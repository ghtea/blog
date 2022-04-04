import {markdown, markdownLanguage} from "@codemirror/lang-markdown";
import {languages} from "@codemirror/language-data";
import CodeMirror, {ReactCodeMirrorProps} from "@uiw/react-codemirror"
import {dracula} from "./theme";

export type EditorProps = ReactCodeMirrorProps & {
}

export const Editor = ({
  value,
  ...rest
}:EditorProps)=> {
  return (<>
    <CodeMirror
      value={value}
      width={"100%"}
      height={"100%"}
      theme={dracula}
      extensions={[markdown({base: markdownLanguage, codeLanguages: languages})]}
      {...rest}
    />
  </>
  )
}