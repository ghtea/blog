import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import React from "react"
import {ArticleView} from "components/ArticleView";
import {ArticleData} from "utils/firebase";

type ReleaseIdPageProps = {
  articleId: string
  article: ArticleData
}

const ReleaseIdPage: NextPage<ReleaseIdPageProps> = ({
  articleId
})=> {


  return (
    <ArticleView/>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  // TODO: fetch all release article from firebase
  return {
    paths: [{params: {id: "food"}}, {params: {id: "knowledge"}}],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const articleId = context?.params?.id || ""

  try {
    const response = await getArticle
  }
  catch(error){
    console.error(error)
  }

  return {
    props: {
      articleId
    },
  }
}

export default ReleaseIdPage