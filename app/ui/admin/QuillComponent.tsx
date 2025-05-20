"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

// Cargar dinámicamente sin SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const QuillComponent = ({ placeholder = "Escribe tu pregunta...", onChange }) => {
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value);
    if (onChange) onChange(value);
  };

  return (
    <div style={{ width: "100%" }}>
      <ReactQuill
        value={content}
        onChange={handleChange}
        placeholder={placeholder}
        style={{
          minHeight: "180px",
          fontFamily: '"Poppins", sans-serif',
          fontSize: "14px"
        }}
      />
    </div>
  );
};

export default QuillComponent;
