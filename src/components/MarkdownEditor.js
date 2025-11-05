import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(""); // input text
  const [preview, setPreview] = useState("");   // rendered Markdown

  // Update preview dynamically whenever markdown changes
  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown-editor" style={{ display: "flex", gap: "20px" }}>
      {/* Input Area */}
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here..."
        style={{ flex: 1, padding: "10px", height: "400px", fontSize: "16px" }}
      />

      {/* Preview Area */}
      <div
        className="preview"
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          height: "400px",
          overflowY: "auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
