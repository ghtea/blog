import {Box} from "@mui/system";
import type {NextPage} from "next"
import {useCallback, useRef, useState} from "react"
import {useMutation} from "react-query";
import {Button} from "components/Button";
import {LayoutMain} from "components/LayoutMain";
import {MarkdownEditor} from "components/MarkdownEditor";
import {MarkdownView} from "components/MarkdownView ";
import {useAuthentication} from "utils/authentication";
import {createArticle} from "utils/firebase";

type DraftPageProps = {
}

const DraftPage: NextPage<DraftPageProps> = ({
}) => {
  const {user} = useAuthentication()
  const {mutate: createArticleMutate, status: createArticleStatus} = useMutation(createArticle, {
    onSuccess: () => console.log("succeeded")
  })

  const [value, setValue] = useState(
    "**Hello world!!!** \n # test header \n ## second \n ### third hahaha \n - yo \n - yo \n - hmm `code` \n - www.naver.com \n - [Duck Duck Go](https://duckduckgo.com)"
  )
  
  const editorContainerRef = useRef<HTMLElement>(null)

  const handleChange = useCallback((value)=>{
    setValue(value)
  },[])

  const handleCreate = useCallback(()=>{
    if (!user) return;

    createArticleMutate({data: {
      type: "draft",
      author: user.uid,
      title: "testing aritcle",
      content: value,
      tags: [],
    }})
  },[createArticleMutate, user, value])

  return (
    <LayoutMain>
      <Box sx={{
        display: "flex", 
        flexDirection: "column",
        width: "100%",
        flexGrow: 1,
        flexShrink: 1,
      }}>
        <Button onClick={handleCreate}>create</Button>
        <Box sx={{display: "flex", height: "100%"}}>
          <Box ref={editorContainerRef} sx={{width: "50%", height: "100%"}}>
            <MarkdownEditor
              container={editorContainerRef}
              value={value}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{width: "50%", height: "100%"}}>
            <MarkdownView content={value} />
          </Box>
        </Box>
      </Box>
    </LayoutMain>
  )
}

export default DraftPage

