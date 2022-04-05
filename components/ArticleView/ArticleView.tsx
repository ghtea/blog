import {Box} from "@mui/system";
import React from "react";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {MarkdownView} from "components/MarkdownView ";
import {Text} from "components/Text"
import {Dayjs} from "utils/dayjs";
import {ArticleData} from "utils/firebase";

type ArticleViewProps = {
  data: ArticleData
}

export const ArticleView = ({
  data
}: ArticleViewProps) =>{
  const updatedAtText = Dayjs(data.updatedAt).format("YYYY-MM-DD")
  const isRelease = data.type === "release"

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <Box>{!isRelease && <Text>{"not yet released"}</Text>}</Box>
      <Box>
        {data.tags.map(item=>(
          <Text key={item}>{item.substring(0,4)}</Text>
        ))}
      </Box>
      <Text sx={{fontSize: "1.5rem", fontWeight: "bold"}}>{data.title}</Text>
      <Text status={"hint"}>{updatedAtText}</Text>

      <Box sx={{mt: 2}}>
        <MarkdownView content={data.content}/>
      </Box>

    </Box>
  );
}