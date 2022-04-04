import alpha from "color-alpha"

export const palette = {
  BG       : "#212121",
  FG       : "#ffffff",
  BORDER   : "#00000060",
  FGGRAY   : "#A3A3A3",
  LGRAY    : "#6F7676",
  DGRAY    : "#101010",
  SHADOW   : "#10101000",
  SELECTION: "#44475A",
  COMMENT  : "#6272A4",
  CYAN     : "#8BE9FD",
  DCYAN    : "#80CBC4",
  GREEN    : "#50FA7B",
  ORANGE   : "#FFB86C",
  PINK     : "#FF79C6",
  PURPLE   : "#BD93F9",
  RED      : "#FF5555",
  YELLOW   : "#F1FA8C",
  COLOR0       : "#21222C",
  COLOR1       : "#FF5555",
  COLOR2       : "#50FA7B",
  COLOR3       : "#F1FA8C",
  COLOR4       : "#BD93F9",
  COLOR5       : "#FF79C6",
  COLOR6       : "#8BE9FD",
  COLOR7       : "#F8F8F2",
  COLOR8       : "#6272A4",
  COLOR9       : "#FF6E6E",
  COLOR10      : "#69FF94",
  COLOR11      : "#FFFFA5",
  COLOR12      : "#D6ACFF",
  COLOR13      : "#FF92DF",
  COLOR14      : "#A4FFFF",
  COLOR15      : "#FFFFFF",
  TEMP_QUOTES         : "#E9F284",
  TEMP_PROPERTY_QUOTES: "#8BE9FE",
  LineHighlight: "#44475A75",
  NonText      : "#FFFFFF1A",
  WHITE        : "#FFFFFF",
  TAB_DROP_BG  : "#44475A70",
  BGLighter    : "#424450",
  BGLight      : "#1A1A1A",
  BGDark       : "#1A1A1A",
  BGDarker     : "#212121",
}

export const colors = {
  // general
  font: palette["FG"],
  background: palette["BG"],
  // input
  cursor: palette["FG"],
  activeLineBorder: palette["SELECTION"],
  selectionBackground: palette["SELECTION"],
  focusedBracket: palette["FGGRAY"],
  // gutters
  guttersBackground: palette["BG"],
  guttersFont: palette["LGRAY"],
  guttersBorder: palette["LGRAY"],
  // highlight
  comment: palette["COMMENT"],
  variable: palette["PURPLE"],
  variableSecondary: palette["FG"], // WIP:
  variableTertiary: palette["FG"], // WIP:
  typeName: palette["CYAN"],
  tagName: palette["PINK"],
  propertyName: palette["FG"],
  attributeName: palette["GREEN"],
  string: palette["YELLOW"], 
  stringSecondary: palette["YELLOW"], // WIP: // e.g. `dd${}`
  number: palette["PURPLE"],
  bool: palette["PURPLE"],
  keyword: palette["PINK"],
  atom: palette["PURPLE"],
  operator: palette["PINK"],
  bracket: palette["FG"],
  heading: palette["PURPLE"],
  emphasis: palette["YELLOW"],
  strong: palette["ORANGE"],
  meta: palette["GREEN"], // WIP:

  // WIP:
  def: palette["PURPLE"],
  qualifier: palette["YELLOW"], // WIP:
  builtin: palette["GREEN"], // WIP:
  // special: ,
  hr: palette["LGRAY"],
  link: palette["CYAN"],
  error: palette["RED"],
  // activeLineBackground: ,
  matchingBracketOutline: palette["LGRAY"],
  // matchingBracket: ,
  // matchHighlight: alpha(palette["WHITE"], 0.4),
  matchHighlightBackground: alpha(palette["WHITE"], 0.4),
  // searching: ,
  // searchingBackground: ,
  // gutterMarker: ,
  // gutterMarkerSubtle: ,
}

/*
# Editor Colors
  editor.foreground: *FG
  editor.background: *BG
  editorLineNumber.foreground: *LGRAY
  editorCursor.foreground:

  editor.selectionBackground: *SELECTION                                        # Color of the editor selection
  editor.selectionHighlightBackground: *BGLighter                               # Color for regions with the same content as the selection
  editor.inactiveSelectionBackground:                                           # Color of the selection in an inactive editor
  editor.foldBackground: *BGDark                                                # Background color for folded ranges

  editor.wordHighlightBackground: !alpha [ *CYAN, 50 ]                          # Background color of a symbol during read-access, for example when reading a variable
  editor.wordHighlightStrongBackground: !alpha [ *GREEN, 50 ]                   # Background color of a symbol during write-access, for example when writing to a variable

  editor.findMatchBackground: !alpha [ *ORANGE, 80 ]
  editor.findMatchHighlightBackground: !alpha [ *WHITE, 40 ]                    # Color of the other search matches
  editor.findRangeHighlightBackground: *LineHighlight                           # Color the range limiting the search

  editor.hoverHighlightBackground: !alpha [*CYAN, 50]                           # Highlight below the word for which a hover is shown

  editor.lineHighlightBackground:                                               # Background color for the highlight of line at the cursor position
  editor.lineHighlightBorder: *SELECTION                                        # Background color for the border around the line at the cursor position

  editorLink.activeForeground: *CYAN                                            # Color of active links
  editor.rangeHighlightBackground: !alpha [ *PURPLE, 15 ]                       # Background color of highlighted ranges, like by Quick Open and Find features

  editor.snippetTabstopHighlightBackground: *BG                                 # Highlight background color of a snippet tabstop
  editor.snippetTabstopHighlightBorder: *COMMENT                                # Highlight border color of a snippet tabstop
  editor.snippetFinalTabstopHighlightBackground: *BG                            # Highlight background color of the final tabstop of a snippet
  editor.snippetFinalTabstopHighlightBorder: *GREEN                             # Highlight border color of the final tabstop of a snippet

  editorWhitespace.foreground: *NonText                                         # Color of whitespace characters in the editor
  editorIndentGuide.background: *NonText                                        # Color of the editor indentation guides
  editorIndentGuide.activeBackground: !alpha [ *WHITE, 45]                      # Color of the active indentation guide
  editorRuler.foreground: *NonText                                              # Color of the editor rulers

  editorCodeLens.foreground: *COMMENT                                           # Foreground color of an editor CodeLens

  # NOTE: These are not set because they tend to be highly contested from
  # person to person. Thus, setting these is probably better suited
  # for workbench.colorCustomizations in User Settings
  editorBracketMatch.background:                                                # Background color behind matching brackets
  editorBracketMatch.border:                                                    # Color for matching brackets boxes

  editorOverviewRuler.border: *BGDarker                                         # Color of the overview ruler border
  editorOverviewRuler.findMatchForeground:
  editorOverviewRuler.rangeHighlightForeground:
  editorOverviewRuler.selectionHighlightForeground: *ORANGE
  editorOverviewRuler.wordHighlightForeground: *CYAN
  editorOverviewRuler.wordHighlightStrongForeground: *GREEN
  editorOverviewRuler.modifiedForeground: !alpha [ *CYAN, 80 ]
  editorOverviewRuler.addedForeground:    !alpha [ *GREEN,  80 ]
  editorOverviewRuler.deletedForeground:  !alpha [ *RED,    80 ]
  editorOverviewRuler.errorForeground:    !alpha [ *RED,    80 ]
  editorOverviewRuler.warningForeground:  !alpha [ *ORANGE, 80 ]
  editorOverviewRuler.infoForeground:     !alpha [ *CYAN,   80 ]

  editorError.foreground: *RED                                                  # Foreground color of error squigglies in the editor
  editorError.border:                                                           # Border color of error squigglies in the editor
  editorWarning.foreground: *CYAN                                               # Foreground color of warning squigglies in the editor
  editorWarning.border:                                                         # Border color of warning squigglies in the editor

  editorGutter.background:                                                      # Background color of the editor gutter
  editorGutter.modifiedBackground: !alpha [ *CYAN, 80 ]                         # Editor gutter background color for lines that are modified
  editorGutter.addedBackground:    !alpha [ *GREEN,  80 ]                       # Editor gutter background color for lines that are added
  editorGutter.deletedBackground:  !alpha [ *RED,    80 ]                       # Editor gutter background color for lines that are deleted

*/