import "./ChatInput.css";

export default function ChatInput({
  chatInput,
  setChatInput,
  sendChat,
  streaming,
  disabled,
}) {
  return (
    <div className="chat-input">
      <input
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        placeholder={streaming ? "Streaming..." : "Ask something..."}
        disabled={disabled || streaming}
      />
      <button onClick={sendChat} disabled={disabled || streaming}>
        {streaming ? "..." : "Send"}
      </button>
    </div>
  );
}
