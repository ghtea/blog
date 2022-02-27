import {EditorProps} from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";

export const TuiEditor = dynamic<EditorProps>(() => import("@toast-ui/react-editor")
  .then(m => m.Editor), {ssr: false});