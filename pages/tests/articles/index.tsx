import {Box} from "@mui/system";
import type {NextPage} from "next"
import React, {useCallback, useEffect, useMemo, useState} from "react"
import {useMutation, useQuery} from "react-query";
import {createArticle, getAllArticles} from "utils/firebase";

const TestGoalsPage: NextPage = () => {
  const {data: allArticlesData, refetch: getAllArticlesRefetch, status: getAllArticlesStatus} = useQuery("articles", getAllArticles)
  // const {fetch: getGoalsFetch, data: getGoalsData, refetch: getGoalsRefetch} = useDataSaga<DataActionType.GET_GOALS>(DataActionType.GET_GOALS)

  const articles = useMemo(()=>{
    const newArticles = allArticlesData?.docs.map(item => ({id: item.id, ...item.data()})) || [];
    newArticles.sort((a, b) => a.createdAt - b.createdAt)
    return newArticles
  },[allArticlesData?.docs])

  // const onSucceed = useCallback(()=>{
  //   getGoalsRefetch()
  // },[getGoalsRefetch])

  const {mutate: createArticleMutate, status: createArticleStatus} = useMutation(createArticle)
  // const {fetch: updateGoalFetch} = useDataSaga<DataActionType.UPDATE_GOAL>(DataActionType.UPDATE_GOAL, {onSucceed})
  // const {fetch: deleteGoalFetch} = useDataSaga<DataActionType.DELETE_GOAL>(DataActionType.DELETE_GOAL, {onSucceed})

  const [title, setTitle]=useState("")
  
  useEffect(()=>{
    console.log("allArticlesData: ", allArticlesData?.docs); // TODO: remove 
  },[allArticlesData])

  const handleCreate = useCallback(()=>{
    createArticleMutate({
      data: {
        type: "draft",
        author: "author",
        title: title,
        content: "test",
        tags: ["tag1"],
      }
    })
  },[createArticleMutate, title])

  useEffect(()=>{
    if (createArticleStatus === "success"){
      getAllArticlesRefetch()
    }
  },[getAllArticlesRefetch, createArticleStatus])

  const handleUpdate = useCallback((id: string)=>{
    // updateGoalFetch({
    //   pathSegments: [id],
    //   data: {
    //     name: "updated goal",
    //   }
    // })
  },[])

  const handleDelete = useCallback((id: string)=>{
    // deleteGoalFetch({
    //   pathSegments: [id]
    // })
  },[])

  const handleLeftButtonClick = useCallback(()=>{
  },[])

  const handleInputTitleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event)=>{
    setTitle(event.currentTarget.value)
  },[])

  return (
    <Box sx={{flexDirection: "column"}}>
      <input data-testid="input-title" type={"text"} onChange={handleInputTitleChange} value={title}/>
      <button data-testid="create" onClick={handleCreate}>CREATE</button>

      <Box component={"ul"} data-testid="list-article" >
        {articles.map(item => (
          <Box component={"li"}  data-testid="list-item-article" key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <button onClick={()=>handleDelete(item.id)}>삭제</button>
            <button onClick={()=>handleUpdate(item.id)}>업데이트</button>
          </Box>
        ))}
      </Box>
    </Box>   
  )
}

export default TestGoalsPage