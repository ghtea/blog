import {Editor as TuiEditor, EditorProps as TuiEditorProps} from "@toast-ui/react-editor";
import React from "react";

export type TuiEditorWithRefProps = TuiEditorProps & {
  ref?: React.ForwardedRef<TuiEditor>;
}

export const TuiEditorWithRef = ({
  ref,
  ...rest
}: TuiEditorWithRefProps) => {
  return (
    <TuiEditor {...rest} ref={ref} />
  )
}

// export const TuiEditorWithRef = forwardRef<Editor, TuiEditorWithRefProps>((props, ref) => {
//   return (
//     <Editor {...props} ref={ref} />
//   )
// }); 

// TuiEditorWithRef.displayName = "TuiEditorWithRef"