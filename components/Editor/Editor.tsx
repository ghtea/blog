import {markdown, markdownLanguage} from "@codemirror/lang-markdown";
import {languages} from "@codemirror/language-data";
import CodeMirror, {ReactCodeMirrorProps} from "@uiw/react-codemirror"
import {oneDark} from "./theme";

export type EditorProps = ReactCodeMirrorProps

export const Editor = ({
  value,
  ...rest
}:EditorProps)=> {
  return (
    <CodeMirror
      value={value}
      height={"400px"}
      theme={oneDark}
      extensions={[markdown({base: markdownLanguage, codeLanguages: languages})]}
      {...rest}
    />
  )
}