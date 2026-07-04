// // import ChatMessages from "./ChatMessages";
// // import ChatInput from "./ChatInput";

// // export default function ChatPanel({
// //   chatEnabled,
// //   messages,
// //   setMessages,
// //   chatInput,
// //   setChatInput,
// //   API_BASE,
// // }) {
// //   // ---------------------------
// //   // Send Chat Message
// //   // ---------------------------
// //   const sendChat = async () => {
// //     if (!chatInput.trim()) return;

// //     const userMsg = { role: "user", content: chatInput };

// //     // add user message
// //     setMessages((prev) => [...prev, userMsg]);
// //     setChatInput("");

// //     try {
// //       const res = await fetch(`${API_BASE}/chat`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           run_id: "eda_acac57ca3c", // SAME AS BEFORE
// //           message: userMsg.content,
// //         }),
// //       });

// //       if (!res.ok) throw new Error("Chat failed");

// //       const data = await res.json();

// //       // add AI message
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           role: "assistant",
// //           content: data.response,
// //         },
// //       ]);
// //     } catch (err) {
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           role: "assistant",
// //           content: "Chat error. Please try again.",
// //         },
// //       ]);
// //     }
// //   };

// //   // ---------------------------
// //   // UI
// //   // ---------------------------
// //   return (
// //     <div className={`right-panel ${!chatEnabled ? "chat-locked" : ""}`}>
// //       <h2>Chat</h2>

// //       <ChatMessages messages={messages} />

// //       <ChatInput
// //         chatInput={chatInput}
// //         setChatInput={setChatInput}
// //         sendChat={sendChat}
// //       />
// //     </div>
// //   );
// // }





// import ChatMessages from "./ChatMessages";
// import ChatInput from "./ChatInput";
// import "./ChatPanel.css";

// export default function ChatPanel({
//   chatEnabled,
//   messages,
//   setMessages,
//   chatInput,
//   setChatInput,
//   API_BASE,
//   runId,
// }) {
//   const sendChat = async () => {
//     if (!chatInput.trim()) return;

//     const userMsg = { role: "user", content: chatInput };
//     setMessages((prev) => [...prev, userMsg]);
//     setChatInput("");

//     // placeholder assistant message
//     setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

//     const res = await fetch(`${API_BASE}/chat`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         run_id: runId,
//         message: userMsg.content,
//         stream: true,
//       }),
//     });

//     const reader = res.body.getReader();
//     const decoder = new TextDecoder("utf-8");

//     while (true) {
//       const { value, done } = await reader.read();
//       if (done) break;

//       const chunk = decoder.decode(value);

//       setMessages((prev) => {
//         const updated = [...prev];
//         updated[updated.length - 1].content += chunk;
//         return updated;
//       });
//     }
//   };

//   return (
//     <div className={`right-panel ${!chatEnabled ? "chat-locked" : ""}`}>
//       <h2>Chat</h2>

//       <ChatMessages messages={messages} />

//       <ChatInput
//         chatInput={chatInput}
//         setChatInput={setChatInput}
//         sendChat={sendChat}
//       />
//     </div>
//   );
// }





// // import { useState } from "react";
// // import ChatMessages from "./ChatMessages";
// // import ChatInput from "./ChatInput";
// // import "./ChatPanel.css";

// // export default function ChatPanel({ runId, enabled }) {
// //   const [messages, setMessages] = useState([]);
// //   const [streaming, setStreaming] = useState(false);

// //   const sendMessage = async (text) => {
// //     const userMsg = { role: "user", content: text };
// //     setMessages((prev) => [...prev, userMsg]);
// //     setStreaming(true);

// //     const res = await fetch("http://127.0.0.1:8000/chat", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         run_id: runId,
// //         message: text,
// //       }),
// //     });

// //     const reader = res.body.getReader();
// //     const decoder = new TextDecoder();

// //     let assistantText = "";

// //     setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

// //     while (true) {
// //       const { value, done } = await reader.read();
// //       if (done) break;

// //       assistantText += decoder.decode(value);

// //       setMessages((prev) => {
// //         const updated = [...prev];
// //         updated[updated.length - 1].content = assistantText;
// //         return updated;
// //       });
// //     }

// //     setStreaming(false);
// //   };

// //   if (!enabled) {
// //     return (
// //       <div className="chat-disabled">
// //         <p>💬 Enable chat after EDA completes</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="chat-panel">
// //       <ChatMessages messages={messages} />
// //       <ChatInput onSend={sendMessage} disabled={streaming} />
// //     </div>
// //   );
// // }


import { useState, useRef, useEffect } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import "./ChatPanel.css";

export default function ChatPanel({
  chatEnabled,
  messages,
  setMessages,
  chatInput,
  setChatInput,
  API_BASE,
  runId,
}) {
  const [streaming, setStreaming] = useState(false);
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendChat = async () => {
    if (!chatInput.trim()) return;

    const userMsg = { role: "user", content: chatInput };
    setMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setStreaming(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ run_id: runId, message: userMsg.content }),
      });

      if (!res.ok) throw new Error("Chat failed");

      // STREAMING SIMULATION: chunk by chunk
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Chat error. Please try again." },
      ]);
    } finally {
      setStreaming(false);
    }
  };

  return (
    <div className="right-panel">
      {!chatEnabled && (
        <div className="chat-overlay">
          <div className="chat-overlay-content">
            <h3>Upload data to start chatting</h3>
            <p>
              Run EDA on a CSV file first.
              <br />
              Once analysis is ready, you can ask questions about your data.
            </p>
          </div>
        </div>
      )}

      {/* 🔥 ONLY THIS PART GETS BLURRED */}
      <div className={`chat-content ${!chatEnabled ? "blurred" : ""}`}>
        <h2>Chat</h2>
        <ChatMessages messages={messages} />
        <ChatInput
          chatInput={chatInput}
          setChatInput={setChatInput}
          sendChat={sendChat}
          streaming={streaming}
          disabled={!chatEnabled}
        />
      </div>
    </div>
  );
}
