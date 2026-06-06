// import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Docs.css";
import docsMarkdown from "./docs.md?raw";

export default function Docs() {
  // useEffect(() => {
  //   // Force re-sync theme when Docs mounts
  //   const theme = localStorage.getItem("theme") || "light";
  //   document.body.classList.remove("light", "dark");
  //   document.body.classList.add(theme);
  // }, []);
  return (
    <>
      <Navbar />
      <div className="docs-container">
        <ReactMarkdown>{docsMarkdown}</ReactMarkdown>
      </div>
      <Footer />
    </>
  );
}
