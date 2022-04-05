import {Box} from "@mui/system";
import React from "react";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {Components, Wrapper} from "./Components";
// import "github-markdown-css/github-markdown-light.css"

export type MarkdownViewProps = {
  content: string
}

export const MarkdownView  = ({
  content
}: MarkdownViewProps) =>{

  return (
    <Wrapper>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={Components}
      >
        {content}
      </ReactMarkdown>
    </Wrapper>
  );
}