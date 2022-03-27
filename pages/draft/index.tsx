import type {NextPage} from "next"
import {useCallback, useMemo, useState} from "react"
import {useMutation} from "react-query";
import {Button} from "components/Button";
import {Editor} from "components/Editor";
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

  const [value, setValue] = useState("**Hello world!!!**")
  
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

