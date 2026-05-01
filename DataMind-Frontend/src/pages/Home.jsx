// pages/Home.jsx
import { useState, useEffect } from "react";
import UploadCard from "../components/UploadCard";
import EDASummary from "../components/EDASummary";
import ChatPanel from "../components/ChatPanel";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "../App.css";

// const API_BASE = "http://localhost:8000";
// const API_BASE = "https://datamind-20-production.up.railway.app";
const API_BASE = "https://datamind-2-0.onrender.com";

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [chatEnabled, setChatEnabled] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [runId, setRunId] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(runId);
    if (saved) setMessages(JSON.parse(saved));
  }, [runId]);

  useEffect(() => {
    localStorage.setItem(runId, JSON.stringify(messages));
  }, [messages, runId]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="app-container">
        <div className="left-panel">
          <UploadCard
            file={file}
            setFile={setFile}
            loading={loading}
            setLoading={setLoading}
            setSummary={setSummary}
            setRunId={setRunId}
            API_BASE={API_BASE}
          />

          {summary && (
            <EDASummary
              summary={summary}
              chatEnabled={chatEnabled}
              setChatEnabled={setChatEnabled}
            />
          )}
        </div>

        <ChatPanel
          chatEnabled={chatEnabled}
          messages={messages}
          setMessages={setMessages}
          chatInput={chatInput}
          setChatInput={setChatInput}
          API_BASE={API_BASE}
          runId={runId}
        />
      </div>
      <Footer />
    </>
  );
}
