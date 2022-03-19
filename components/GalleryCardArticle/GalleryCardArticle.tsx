import {Box} from "@mui/system"
import {useRouter} from "next/router";
import React, {useCallback, useMemo} from "react"
import {Text} from "components/Text"
import {Dayjs} from "utils/dayjs";
import {ArticleData} from "utils/firebase"

export type GalleryCardArticleProps = {
  data: ArticleData
}

export const GalleryCardArticle = ({
  data
}: GalleryCardArticleProps) => {
  const router = useRouter()
  
  const releasedAtText = useMemo(()=>{
    return data.releasedAt ? Dayjs(data.releasedAt).format("YYYY-MM-DD") : ""
  },[data.releasedAt])

  const handleTitleClick = useCallback(()=>{
    router.push(`/article/${data.id}`)
  },[data.id, router])

  return (
    <Box sx={{minHeight: 160, display: "flex", alignItems: "flex"}}>
      <Box sx={{display: "flex", flexDirection: "row"}}>
        {data.tags.map(item=>(
          <Text key={item}>{item}</Text>
        ))}
      </Box>
      <Text sx={{fontSize: "1.25rem", cursor: "pointer"}} onClick={handleTitleClick}>{data.title}</Text>
      <Text>{data.summary}</Text>
      <Text status={"hint"}>{releasedAtText}</Text>
    </Box>
  )
}