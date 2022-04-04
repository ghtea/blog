import {Box} from "@mui/system";
import {GetServerSideProps, NextPage} from "next";
import React, {useEffect} from "react"
import {ArticleView} from "components/ArticleView";
import {LayoutMain} from "components/LayoutMain";
import {Sidebar, SIDEBAR_WIDTH} from "components/Sidebar";
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
      <Box sx={{display: "flex", flexDirection: "row", py: 2}}>
      </Box>

      <Box sx={{display: "flex", flexDirection: "row"}}>
        <Box sx={{width: `${SIDEBAR_WIDTH}px`, display: ["none", null, null, "flex"]}}>
        </Box>
        <Box sx={{flex: 1, display: "flex", alignItems: "center"}}>
          {article 
            ? <ArticleView data={article} />
            : "-"
          }
        </Box>
        <Box sx={{width: `${SIDEBAR_WIDTH}px`, display: ["none", null, null, "flex"]}}>
          <Sidebar/>
        </Box>
      </Box>
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