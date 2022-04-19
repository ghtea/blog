import {Box} from "@mui/system"
import React, {useCallback, useEffect} from "react"
import {pcr} from "styles/theme"
import {KeywordData} from "utils/firebase"

export type TableKeywordProps = {
  keywords: KeywordData[],
  onRowClick?: () => void
}

export const TableKeyword = ({
  keywords,
  onRowClick
}: TableKeywordProps) => {
  const handleRowClick = useCallback(()=>{
    onRowClick?.()
  },[onRowClick])

  return (
    <Box sx={{display: "flex", flexDirection:"column",}}>
      <Box
        sx={{
          display: "flex", 
          flexDirection:"row",
          borderWidth: 1, 
          borderBottomStyle: "solid", 
          borderColor: pcr["border"],
          px: 1,
          color: pcr["textHint"],
        }}
      >
        <Box sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0, py: 1}}>name</Box>
        <Box sx={{flexGrow: 2, flexShrink: 2, flexBasis: 0, py: 1}}>search</Box>
      </Box>
      <Box sx={{display: "flex", flexDirection:"column",}}>
        {keywords.map(item=>(
          <Box key={item.id} onClick={handleRowClick} sx={{
            display: "flex", 
            flexDirection:"row", 
            px: 1,
            cursor: onRowClick ? "pointer" : "default",
            borderWidth: 1,
            borderBottomStyle: "solid", 
            borderColor: pcr["border"],
            ":hover": onRowClick ? {
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