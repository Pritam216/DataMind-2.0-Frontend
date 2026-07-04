import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./EDASummary.css";

export default function EDASummary({ summary, chatEnabled, setChatEnabled }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`summary-card ${collapsed ? "collapsed" : ""}`}>
      <div className="summary-header">
        <h3>EDA Summary</h3>
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Expand" : "Collapse"}
        </button>
      </div>

      {!collapsed && (
        <>
          <ReactMarkdown>{summary}</ReactMarkdown>

          {!chatEnabled && (
            <div className="chat-decision">
              <p>Continue with chat?</p>
              <button onClick={() => setChatEnabled(true)}>Yes</button>
              <button onClick={() => setChatEnabled(false)}>No</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
