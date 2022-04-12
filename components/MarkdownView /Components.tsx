// https://github.com/remarkjs/react-markdown#appendix-b-components

import {Box} from "@mui/system"
import {ReactNode} from "react"
import {ReactMarkdownOptions} from "react-markdown/lib/react-markdown"

const DEFAULT_FONT_SIZE_REM = 1.25;
const DEFAULT_PADDING_Y_PX = 4;

export const Wrapper = ({children}: {children: ReactNode}) =>{
  return <Box sx={{
    fontSize: `${DEFAULT_FONT_SIZE_REM}rem`,
    padding: 2,
  }}>{children}</Box>
}

const Paragraph = ({children}: {children: ReactNode}) => {
  return <Box component={"p"} sx={{
    paddingY: `${DEFAULT_PADDING_Y_PX}px`,
  }}>{children}</Box>
}

const HeaderOne = ({children}: {children: ReactNode}) => (
  <Box component={"div"} sx={{
    paddingTop: `${DEFAULT_PADDING_Y_PX * 5}px`,
    paddingBottom: `${DEFAULT_PADDING_Y_PX * 4}px`,
  }}>
    <Box component={"h1"} sx={{
      fontWeight: "bold", 
      fontSize: `${DEFAULT_FONT_SIZE_REM * 1.75}rem`,
      borderBottomStyle: "solid",
      borderWidth: "1px",
      borderColor: "border",
    }}>
      {children}
    </Box>
  </Box>
)
const HeaderTwo = ({children}: {children: ReactNode}) => (
  <Box component={"div"} sx={{
    paddingTop: `${DEFAULT_PADDING_Y_PX * 4}px`,
    paddingBottom: `${DEFAULT_PADDING_Y_PX * 3}px`,
  }}>
    <Box component={"h2"} sx={{
      fontWeight: "bold", 
      fontSize: `${DEFAULT_FONT_SIZE_REM * 1.5}rem`,
      borderBottomStyle: "solid",
      borderWidth: "1px",
      borderColor: "border",
    }}>
      {children}
    </Box>
  </Box>
)
const HeaderThree = ({children}: {children: ReactNode}) => (
  <Box component={"div"} sx={{
    paddingTop: `${DEFAULT_PADDING_Y_PX * 3}px`,
    paddingBottom: `${DEFAULT_PADDING_Y_PX * 2}px`,
  }}>
    <Box component={"h3"} sx={{
      fontWeight: "bold", 
      fontSize: `${DEFAULT_FONT_SIZE_REM * 1.25}rem`,
      borderBottomStyle: "solid",
      borderWidth: "1px",
      borderColor: "border",
    }}>
      {children}
    </Box>
  </Box>
)
const HeaderFour = ({children}: {children: ReactNode}) => (
  <Box component={"div"} sx={{paddingY: `${DEFAULT_PADDING_Y_PX}px`}}>
    <Box component={"h4"} sx={{
      fontWeight: "bold",
    }}>
      {children}
    </Box>
  </Box>
)
const HeaderFive = ({children}: {children: ReactNode}) => (
  <Box component={"div"} sx={{paddingY: `${DEFAULT_PADDING_Y_PX}px`}}>
    <Box component={"h5"} sx={{
      fontWeight: "bold",
    }}>
      {children}
    </Box>
  </Box>
)
const HeaderSix = ({children}: {children: ReactNode}) => (
  <Box component={"div"} sx={{paddingY: `${DEFAULT_PADDING_Y_PX}px`}}>
    <Box component={"h6"} sx={{
      fontWeight: "bold",
    }}>
      {children}
    </Box>
  </Box>
)

const List = ({
  children, 
  depth,
  ordered,
  className
}: {
  children: ReactNode, 
  depth: number
  ordered: boolean
  className?: string
}) => (
  <Box component={"div"} sx={{paddingY: `${DEFAULT_PADDING_Y_PX}px`}}>
    <Box component={ordered ? "ol" : "ul"} className={className} sx={{
      ml: `${depth * 12}px`,
      width: "100%",
      display: "block",
    }}>{children}</Box>
  </Box>
)

const ListItem = ({
  children, 
  index,
  ordered,
  checked,
  className
}: {
  children: ReactNode, 
  index: number
  ordered: boolean
  checked?: boolean | null
  className?: string
}) => {
  const prefix = ordered ? `${index+1}.` : "\u2022"
  return (
    <Box component={"li"} className={className}>
      <Box component={"span"} sx={{display: "inline-flex"}}>{prefix}</Box>
      <Box component={"span"} sx={{
        marginLeft: 1, 
      }}>{children}</Box>
    </Box>
  )}

const Image = ({src, title}: {src?: string, title?: string}) => (
  <Box component={"div"} sx={{paddingY: `${DEFAULT_PADDING_Y_PX}px`}}>
    <Box component={"img"} src={src} title={title}/>
  </Box>
)

const Blockquote = ({children}: {children: ReactNode}) => (
  <Box component={"div"} sx={{paddingY: `${DEFAULT_PADDING_Y_PX}px`}}>
    <Box component={"blockquote"} sx={{
      padding: 1,
      borderLeftStyle: "solid",
      borderWidth: "4px",
      borderColor: "primary",
      backgroundColor: "blockquoteBackground"
    }}>{children}</Box>
  </Box>
)

const Hr = () => (
  <Box component={"div"} sx={{paddingY: `${DEFAULT_PADDING_Y_PX}px`}}>
    <Box component={"hr"} sx={{
      display: "flex",
      backgroundColor: "hrBackground",
      height: "1px",
      width: "100%",
      border: "none",
      marginY: 1,
      padding: 0,
    }}/>
  </Box>
)

// inline
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
    display: "inline-flex",
    padding: "2px 8px 2px",
    borderRadius: "8px",
    color: "code",
    backgroundColor: "codeBackground",
    marginX: 0.5,
  }}>{children}</Box>
}

const Anchor = ({children, href}: {children: ReactNode, href?: string}) => {
  return <Box component={"a"} sx={{
    color: "primary",
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "transparent",
    textDecoration: "none",
    "&:hover": {
      borderColor: "primary",
      cursor: "pointer"
    }
  }} href={href}>{children}</Box>
}

const Br = () => <br/>
const Pre = () => <pre/>

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
  a: Anchor,
  code: Code,
  br: Br,
  blockquote: Blockquote,
  img: Image,
  ul: List,
  ol: List,
  li: ListItem,
  hr: Hr,
  pre: Pre,
  del: "del",
  input: "input",
  table: "table",
  thead: "thead",
  td: "td",
  th: "th",
  tr: "tr",
}