import {HighlightStyle, tags} from "@codemirror/highlight";
import {EditorView} from "@codemirror/view";
import {colors as draculaColors} from "./colors/dracula";

const DEFAULT_FONT_SIZE = 20;

type EditorThemeColors = typeof draculaColors

export const getGeneralTheme = (colors: EditorThemeColors) => EditorView.theme({
  // general
  "&": {
    color: colors.font,
    backgroundColor: colors.background,
    fontSize: `${DEFAULT_FONT_SIZE}px`,
  },
  "&.cm-focused":{
    outline: "none !important"
  },
  ".cm-scroller": { // overall style for editor
    fontFamily: "'Noto Sans KR', sans-serif",
    lineHeight: 1.5,
    padding: "16px"
  },
  // input
  ".cm-content": {
    caretColor: colors.cursor
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: colors.cursor
  },
  "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
    backgroundColor: colors.selectionBackground
  },
  ".cm-activeLine": {
    outline: `1px solid ${colors.activeLineBorder}`,
    backgroundColor: "transparent"
  },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    outline: "1px solid #515a6b"
  },
  // gutters
  ".cm-gutters": {
    color: colors.guttersFont,
    backgroundColor: colors.guttersBackground,
    borderColor: colors.guttersBorder,
    borderWidth: "1px",
    borderStyle: "solid",
    display: "none"
  },
}, {dark: true});

// https://codemirror.net/6/docs/ref/#highlight
const getHighlightStyle = (colors: EditorThemeColors) => HighlightStyle.define([
  // comment
  {tag: tags.comment,
    color: colors.comment
  },
  {tag: tags.lineComment},
  {tag: tags.blockComment},
  {tag: tags.docComment},
  // names
  {tag: tags.name},
  {tag: tags.variableName, 
    color: colors.variable
  },
  {tag: tags.typeName,
    color: colors.typeName
  },
  {tag: tags.tagName,
    color: colors.tagName
  },
  {tag: tags.propertyName,
    color: colors.propertyName
  },
  {tag: tags.attributeName,
    color: colors.attributeName
  },
  {tag: tags.className},
  {tag: tags.labelName},
  // 
  {tag: tags.namespace},
  {tag: tags.macroName},
  {tag: tags.literal},
  // strings
  {tag: tags.string,
    color: colors.string
  },
  {tag: tags.docString},
  {tag: tags.character},
  {tag: tags.attributeValue},
  // number
  {tag: tags.number,
    color: colors.number
  },
  {tag: tags.integer},
  {tag: tags.float},
  //
  {tag: tags.bool,
    color: colors.bool
  },
  {tag: tags.regexp},
  {tag: tags.escape},
  {tag: tags.color},
  {tag: tags.url},
  // keywords
  {tag: tags.keyword,
    color: colors.keyword
  },
  {tag: tags.self},
  {tag: tags.null},
  {tag: tags.atom,
    color: colors.atom
  },
  {tag: tags.unit},
  {tag: tags.modifier},
  {tag: tags.operatorKeyword},
  {tag: tags.controlKeyword},
  {tag: tags.definitionKeyword},
  {tag: tags.moduleKeyword},
  // operators
  {tag: tags.operator,
    color: colors.operator
  },
  {tag: tags.derefOperator},
  {tag: tags.arithmeticOperator},
  {tag: tags.logicOperator},
  {tag: tags.bitwiseOperator},
  {tag: tags.compareOperator},
  {tag: tags.updateOperator},
  {tag: tags.definitionOperator},
  {tag: tags.typeOperator},
  {tag: tags.controlOperator},
  // punctuations
  {tag: tags.punctuation},
  {tag: tags.separator},
  // brackets
  {tag: tags.bracket,
    color: colors.bracket
  },
  {tag: tags.angleBracket},
  {tag: tags.squareBracket},
  {tag: tags.paren},
  {tag: tags.brace},
  //
  {tag: tags.content},
  // headings
  {tag: tags.heading},
  {tag: tags.heading1,
    fontWeight: "bold",
    color: colors.heading,
    fontSize: `${DEFAULT_FONT_SIZE * 1.75}px`,
  },
  {tag: tags.heading2,
    fontWeight: "bold",
    color: colors.heading,
    fontSize: `${DEFAULT_FONT_SIZE * 1.5}px`,
  },
  {tag: tags.heading3,
    fontWeight: "bold",
    color: colors.heading,
    fontSize: `${DEFAULT_FONT_SIZE * 1.25}px`,
  },
  {tag: tags.heading4,
    fontWeight: "bold",
    color: colors.heading,
  },
  {tag: tags.heading5,
    fontWeight: "bold",
    color: colors.heading,
  },
  {tag: tags.heading6,
    fontWeight: "bold",
    color: colors.heading,
  },
  //
  {tag: tags.contentSeparator},
  {tag: tags.list},
  {tag: tags.quote},
  {tag: tags.emphasis,
    color: colors.emphasis,
    fontStyle: "italic",
  },
  {tag: tags.strong,
    color: colors.strong,
    fontWeight: "bold",
  },
  {tag: tags.link,
    textDecoration: "underline"
  },
  {tag: tags.monospace},
  {tag: tags.strikethrough,
    textDecoration: "line-through"
  },
  {tag: tags.inserted},
  {tag: tags.deleted},
  {tag: tags.changed},
  {tag: tags.invalid},
  {tag: tags.meta,
    color: colors.meta
  },
  {tag: tags.documentMeta},
  {tag: tags.annotation},
  {tag: tags.processingInstruction},
  // definition, constant, function, standard, local, special
  {tag: tags.function(tags.variableName)},
  {tag: tags.constant(tags.name)},
  {tag: tags.standard(tags.name)},
  {tag: tags.special(tags.string)},
  {tag: tags.special(tags.variableName)},
])

export const dracula = [getGeneralTheme(draculaColors), getHighlightStyle(draculaColors)];