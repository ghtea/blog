import {Box} from "@mui/system"
import React, {useCallback} from "react"
import {KeywordData} from "utils/firebase"

export type TableKeywordProps = {
  keywords: KeywordData[],
  onClickRow?: () => void
}

export const TableKeyword = ({
  keywords,
  onClickRow
}: TableKeywordProps) => {
  const handleClickRow = useCallback(()=>{
    onClickRow?.()
  },[onClickRow])

  return (
    <Box sx={{display: "flex", flexDirection:"column",}}>
      <Box
        sx={{
          display: "flex", 
          flexDirection:"row",
          borderWidth: 1, 
          borderBottomStyle: "solid", 
          borderColor: "border.default",
          px: 1,
          color: "text.hint"
        }}
      >
        <Box sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0, py: 1}}>name</Box>
        <Box sx={{flexGrow: 2, flexShrink: 2, flexBasis: 0, py: 1}}>search</Box>
      </Box>
      <Box sx={{display: "flex", flexDirection:"column",}}>
        {keywords.map(item=>(
          <Box key={item.id} onClick={handleClickRow} sx={{
            display: "flex", 
            flexDirection:"row", 
            px: 1,
            cursor: onClickRow ? "pointer" : "default",
            borderWidth: 1,
            borderBottomStyle: "solid", 
            borderColor: "border.default",
            ":hover": onClickRow ? {
              backgroundColor: "hover"
            } : {}
          }}>
            <Box sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0, py: 1}}>{item.name}</Box>
            <Box sx={{flexGrow: 2, flexShrink: 2, flexBasis: 0, py: 1}}>{item.search}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}