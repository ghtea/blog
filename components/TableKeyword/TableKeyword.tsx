import {Box} from "@mui/system"
import React, {useCallback} from "react"
import {Icon} from "components/Icon"
import {KeywordData} from "utils/firebase"

export type TableKeywordProps = {
  keywords: KeywordData[],
  onClickRow?: (keyword: KeywordData) => void
}

export const TableKeyword = ({
  keywords,
  onClickRow
}: TableKeywordProps) => {


  const handleClickRow = useCallback((keyword: KeywordData)=>{
    onClickRow?.(keyword)
  },[onClickRow])

  const handleClickMore: React.MouseEventHandler<HTMLDivElement> = useCallback((event)=>{
    event.stopPropagation()
    
  },[])

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
        <Box sx={{flexGrow: 2, flexShrink: 2, flexBasis: 0, py: 1}}>name</Box>
        <Box sx={{flexGrow: 4, flexShrink: 4, flexBasis: 0, py: 1}}>search</Box>
        <Box sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0, py: 1}}></Box>
      </Box>
      <Box sx={{display: "flex", flexDirection:"column",}}>
        {keywords.map(item=>(
          <Box key={item.id} onClick={()=>handleClickRow(item)} sx={{
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
            <Box sx={{flexGrow: 2, flexShrink: 2, flexBasis: 0, py: 1}}>{item.name}</Box>
            <Box sx={{flexGrow: 4, flexShrink: 4, flexBasis: 0, py: 1}}>{item.search}</Box>
            <Box sx={{flexGrow: 1, flexShrink: 1, flexBasis: 0, py: 1}}>
              <Box onClick={handleClickMore} sx={{cursor: "pointer"}}>
                <Icon name={"more"} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}