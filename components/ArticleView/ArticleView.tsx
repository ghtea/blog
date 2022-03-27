import React from "react";
import ReactMarkdown from "react-markdown"

type ArticleViewProps = {
  
}

export const ArticleView = ({

}: ArticleViewProps) =>{
  return (
    <ReactMarkdown># Hello, *world*!</ReactMarkdown>
  );
}