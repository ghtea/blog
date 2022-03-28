import {GetServerSideProps, NextPage} from "next";
import React, {useEffect} from "react"
import {ArticleView} from "components/ArticleView";
import {LayoutMain} from "components/LayoutMain";
import {ArticleData, getArticle} from "utils/firebase";

type ReleaseIdPageProps = {
  article: ArticleData | undefined
}

const ReleaseIdPage: NextPage<ReleaseIdPageProps> = ({
  article
})=> {
  useEffect(()=>{
    console.log("article: ", article); // TODO: remove 
  },[article])

  return (
    <LayoutMain>
      {article 
        ? <ArticleView data={article} />
        : "-"
      }
    </LayoutMain>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const idParam = context?.params?.id || ""
  const articleId = typeof idParam === "string" ? idParam : (idParam[0] || "")

  try {
    const response = await getArticle(articleId)
    return {
      props: {
        article: {id: articleId, ...response.data()}
      }
    }
  }
  catch(error){
    console.error(error)
    return {
      props: {
        article: undefined
      },
    }
  }
}

export default ReleaseIdPage