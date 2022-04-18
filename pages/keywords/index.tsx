import {Box} from "@mui/system"
import type {NextPage} from "next"
import {useCallback, useMemo} from "react"
import {useMutation, useQuery} from "react-query"
import {Button} from "components/Button"
import {LayoutMain} from "components/LayoutMain"
import {useAuthentication} from "utils/authentication"
import {createKeyword, getAllKeywords} from "utils/firebase"

const KeywordsPage: NextPage = () => {
  const {user} = useAuthentication()

  const {data} = useQuery("getAllKeywords", getAllKeywords)
  const {mutate: createKeywordMutate, status: createKeywordStatus} = useMutation(createKeyword, {
    onSuccess: () => console.log("succeeded")
  })

  const keywords = useMemo(()=>{
    return (data?.docs || []).map(item => ({
      id: item.id,
      ...item.data()
    }))
  },[data?.docs])

  const handleCreate = useCallback(()=>{
    if (!user) return;

    createKeywordMutate({
      data: {
        author: user.uid,
        name: "new name",
        search: "new search",
      }
    })
  },[createKeywordMutate, user])

  return (
    <LayoutMain>
      <Box>
        <Button onClick={handleCreate}>create</Button>
      </Box>
      <Box>
        {keywords.map(item => (
          <Box key={item.id}>
            <Box>{item.name}</Box>
            <Box>{item.search}</Box>
            <Box>{item.author}</Box>
          </Box>
        ))}
      </Box>
    </LayoutMain>
  )
}

export default KeywordsPage
