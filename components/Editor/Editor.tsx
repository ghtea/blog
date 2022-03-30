// import {markdown, markdownLanguage} from "@codemirror/lang-markdown";
// import {languages} from "@codemirror/language-data";
import dynamic from "next/dynamic"

// const MDEditor = dynamic<MDEditorProps>(() => import("@uiw/react-md-editor"), {
//   ssr: false,
// });
const CodeMirror = dynamic(() => {
  // import("@codemirror/lang-markdown")
  // import("@codemirror/language-data")
  import("codemirror/mode/xml/xml")
  import("codemirror/mode/javascript/javascript")
  import("codemirror/mode/css/css")
  import("codemirror/mode/markdown/markdown")
  import("codemirror/theme/material-ocean.css")
  return import("react-codemirror")
}, {ssr: false})

export type EditorProps = ReactCodeMirror.ReactCodeMirrorProps

export const Editor = ({
  value,
  ...rest
}:EditorProps)=> {
  return <CodeMirror
    value={value}
    name= "Devlog"
    options={{
      theme: "darcula",
      lineNumbers: true,
      mode: "markdown"
    }}
    {...rest}
  />
  // return (
  //   <CodeMirror value={value} {...rest} className={"cm-s-mdn-like CodeMirror"} extensions={[markdown({base: markdownLanguage, codeLanguages: languages})]} />
  // )
}