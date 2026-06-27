"use client";

import React, { useEffect, useRef } from "react";
// @ts-expect-error
import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";

type Props = {
  html: string;
};

const MathQuestionComponent = ({ html }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

renderMathInElement(containerRef.current, {
  delimiters: [
    { left: "$$", right: "$$", display: true },
    { left: "$", right: "$", display: false },
  ],
  ignoredClasses: ["no-katex"],
  throwOnError: false,
});
  }, [html]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default React.memo(
  MathQuestionComponent,
  (prev, next) => prev.html === next.html
);
