import {Box} from "@mui/system";
import React from "react";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {ArticleData} from "utils/firebase";

type MarkdownViewProps = {
  content: string
}

export const MarkdownView  = ({
  content
}: MarkdownViewProps) =>{

  return (
    <Box className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Box>
  );
}