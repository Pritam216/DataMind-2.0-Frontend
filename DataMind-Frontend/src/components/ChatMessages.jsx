import ReactMarkdown from "react-markdown";
import "./ChatMessages.css";

export default function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((m, i) => (
        <div
          key={i}
          className={`chat-bubble ${m.role === "user" ? "user" : "ai"}`}
        >
          <ReactMarkdown>{m.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}
