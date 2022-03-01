
import {Editor as TuiEditor, EditorProps as TuiEditorProps} from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import {forwardRef, useCallback, useMemo, useRef} from "react";

import {TuiEditorWithRefProps, TuiEditorWithRef} from "./TuiEditor";
import "@toast-ui/editor/dist/toastui-editor.css";

type DynamicTuiEditorWithRefProps = TuiEditorProps & {

}
const DynamicTuiEditor = dynamic<TuiEditorWithRefProps>(() => import("./TuiEditor").then(item=>item.TuiEditorWithRef), {ssr: false});
const DynamicTuiEditorWithRef = forwardRef<TuiEditor, DynamicTuiEditorWithRefProps>((props, ref) => {
  // const handleRef = useRef<typeof TuiEditor>()

  return (
    <DynamicTuiEditor {...props} ref={ref} />
  )
});

DynamicTuiEditorWithRef.displayName = "DynamicTuiEditorWithRef"

export type EditorProps = {
  value: string
  onChange: (value: string) => void
}

export const Editor = ({
  value,
  onChange
}: EditorProps) => {  

  const editorRef = useRef<TuiEditor>(null);


  const handleChange = useCallback(() => {
    if (!editorRef.current) return;

    const instance = editorRef.current.getInstance();

    onChange(instance.getMarkdown());
  }, [onChange]);

  return (
    <DynamicTuiEditor
      ref={editorRef}
      initialValue={value}
      previewStyle="vertical"
      height="600px"
      initialEditType={"markdown"}
      useCommandShortcut={true}
      onChange={handleChange}
    />
  )
}