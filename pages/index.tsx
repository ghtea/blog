import {Box} from "@mui/system"
import type {NextPage} from "next"
import {useMemo} from "react"
import {useQuery} from "react-query"
import {GalleryCardArticle} from "components/GalleryCardArticle"
import {LayoutMain} from "components/LayoutMain"
import {getAllArticles} from "utils/firebase"

const Home: NextPage = () => {
  const {status, data} = useQuery("getAllArticles", getAllArticles)

  const articles = useMemo(()=>{
    return (data?.docs || []).map(item => ({
      id: item.id,
      ...item.data()
    }))
  },[data?.docs])

  return (
    <LayoutMain>
      <div>
        
      </div>
      <div>
        {articles.map(item => (
          <GalleryCardArticle 
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </LayoutMain>
  )
}

export default Home
