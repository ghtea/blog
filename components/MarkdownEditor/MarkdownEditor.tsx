import {markdown, markdownLanguage} from "@codemirror/lang-markdown";
import {languages} from "@codemirror/language-data";
import CodeMirror, {ReactCodeMirrorProps} from "@uiw/react-codemirror"
import {RefObject} from "react";
import {dracula} from "./theme";
import {useSize} from "utils/dom";

export type MarkdownEditorProps = ReactCodeMirrorProps & {
  container: RefObject<HTMLElement>
}

export const MarkdownEditor = ({
  container,
  value,
  ...rest
}:MarkdownEditorProps)=> {
  const {width, height} = useSize(container.current)
  
  return (
    <CodeMirror
      value={value}
      width={`${width}px`}
      height={`${height}px`}
      theme={dracula}
      extensions={[markdown({base: markdownLanguage, codeLanguages: languages})]}
      {...rest}
    />
  )
}