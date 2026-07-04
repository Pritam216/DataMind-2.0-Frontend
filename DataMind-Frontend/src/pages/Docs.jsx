// import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Docs.css";
import docsMarkdown from "./docs.md?raw";

export default function Docs() {
  return (
    <>
      <Navbar />
      <div className="docs-container">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            img: ({ node, ...props }) => (
              <img
                {...props}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  margin: "1rem auto",
                  display: "block",
                }}
              />
            ),
          }}
        >
          {docsMarkdown}
        </ReactMarkdown>
      </div>
      <Footer />
    </>
  );
}
