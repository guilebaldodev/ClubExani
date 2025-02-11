import { useState } from "react";
import "react-quill/dist/quill.snow.css"; 

import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const QuillComponent = ({ placeholder = "Escribe aquí tu pregunta..." }) => {
  const [content, setContent] = useState("");

  return ( 
    <>
      <div>
        <ReactQuill 
          value={content} 
          onChange={setContent} 
          style={{
            minHeight: "100%",
            fontFamily: '"Poppins", sans-serif', 
            fontStyle: "normal",
            fontSize: "14px" 
          }}
          placeholder={placeholder}
        />
      </div>




    </>
  );
}

export default QuillComponent;
