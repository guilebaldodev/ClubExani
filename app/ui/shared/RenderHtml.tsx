"use client";
import { useEffect, useRef } from "react";
// @ts-expect-error
import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";

const MathQuestion = ({ html }: { html: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      renderMathInElement(containerRef.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
        throwOnError: false,
      });
    }
  }, [html]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MathQuestion;

