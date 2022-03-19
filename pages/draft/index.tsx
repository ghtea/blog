import type {NextPage} from "next"
import {useCallback, useMemo, useState} from "react"
import {useMutation} from "react-query";
import {Button} from "components/Button";
import {Editor} from "components/Editor";
import {createArticle} from "utils/firebase";


type DraftPageProps = {
}

const DraftPage: NextPage<DraftPageProps> = ({
}) => {
  const {mutate: createArticleMutate, status: createArticleStatus} = useMutation(createArticle, {
    onSuccess: () => console.log("succeeded")
  })

  const [value, setValue] = useState("**Hello world!!!**")
  
  const handleChange = useCallback((value)=>{
    setValue(value)
  },[])

  const handleCreate = useCallback(()=>{
    createArticleMutate({data: {
      title: "testing aritcle",
      content: value,
      tags: [],
      isPublic: false,
      thumbnail: ""
    }})
  },[createArticleMutate, value])

  return (
    <div>
      <Button onClick={handleCreate}>create</Button>
      <Editor
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default DraftPage

