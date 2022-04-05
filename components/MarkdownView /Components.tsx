// https://github.com/remarkjs/react-markdown#appendix-b-components

import {Box} from "@mui/system"
import {ReactNode} from "react"
import {ReactMarkdownOptions} from "react-markdown/lib/react-markdown"

const DEFAULT_FONT_SIZE_REM = 1.25;
const DEFAULT_MARGIN_Y_PX = 4;

export const Wrapper = ({children}: {children: ReactNode}) =>{
  return <Box sx={{
    fontSize: `${DEFAULT_FONT_SIZE_REM}rem`,
    padding: 2,
  }}>{children}</Box>
}

const Paragraph = ({children}: {children: ReactNode}) => {
  return <Box component={"h1"} sx={{
    marginY: `${DEFAULT_MARGIN_Y_PX}px`,
  }}>{children}</Box>
}

const HeaderOne = ({children}: {children: ReactNode}) => {
  return <Box component={"h1"} sx={{
    fontWeight: "bold", 
    fontSize: `${DEFAULT_FONT_SIZE_REM * 1.75}rem`,
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "border",
    marginTop: "16px",
    marginBottom: `${DEFAULT_MARGIN_Y_PX}px`,
  }}>{children}</Box>
}
const HeaderTwo = ({children}: {children: ReactNode}) => {
  return <Box component={"h2"} sx={{
    fontWeight: "bold", 
    fontSize: `${DEFAULT_FONT_SIZE_REM * 1.5}rem`,
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "border",
    marginTop: "12px",
    marginBottom: `${DEFAULT_MARGIN_Y_PX}px`,
  }}>{children}</Box>
}
const HeaderThree = ({children}: {children: ReactNode}) => {
  return <Box component={"h3"} sx={{
    fontWeight: "bold", fontSize: `${DEFAULT_FONT_SIZE_REM * 1.25}rem`,
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "border",
    marginTop: "8px",
    marginBottom: `${DEFAULT_MARGIN_Y_PX}px`,
  }}>{children}</Box>
}
const HeaderFour = ({children}: {children: ReactNode}) => {
  return <Box component={"h4"} sx={{
    fontWeight: "bold",
    marginY: `${DEFAULT_MARGIN_Y_PX}px`,
  }}>{children}</Box>
}
const HeaderFive = ({children}: {children: ReactNode}) => {
  return <Box component={"h5"} sx={{
    fontWeight: "bold",
    marginY: `${DEFAULT_MARGIN_Y_PX}px`,
  }}>{children}</Box>
}
const HeaderSix = ({children}: {children: ReactNode}) => {
  return <Box component={"h6"} sx={{
    fontWeight: "bold",
    marginY: `${DEFAULT_MARGIN_Y_PX}px`,
  }}>{children}</Box>
}

const Strong = ({children}: {children: ReactNode}) => {
  return <Box component={"strong"} sx={{
    fontWeight: "bold",
  }}>{children}</Box>
}

const Emphasis = ({children}: {children: ReactNode}) => {
  return <Box component={"em"} sx={{
    fontStyle: "italic",
  }}>{children}</Box>
}

const Code = ({children}: {children: ReactNode}) => {
  return <Box component={"code"} sx={{
    padding: "2px 8px 2px",
    borderRadius: "8px",
    color: "code",
    backgroundColor: "codeBackground"
  }}>{children}</Box>
}

export const Components: ReactMarkdownOptions["components"] = {
  p: Paragraph,
  h1: HeaderOne,
  h2: HeaderTwo,
  h3: HeaderThree,
  h4: HeaderFour,
  h5: HeaderFive,
  h6: HeaderSix,
  em: Emphasis,
  strong: Strong,
  a: "a",
  code: Code,
  br: "br",
  blockquote: "blockquote",
  img: "img",
  ul: "ul",
  ol: "ol",
  li: "li",
  hr: "hr",
  pre: "pre",
  del: "del",
  input: "input",
  table: "table",
  thead: "thead",
  td: "td",
  th: "th",
  tr: "tr",
}