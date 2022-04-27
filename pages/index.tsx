import type {NextPage} from "next"
import {useEffect, useMemo} from "react"
import {useQuery} from "react-query"
import {GalleryCardArticle} from "components/GalleryCardArticle"
import {LayoutMain} from "components/LayoutMain"
import {Modal} from "components/Modal"
import {getAllArticles} from "utils/firebase"
import {useModal} from "utils/modal"

const Home: NextPage = () => {
  const {data} = useQuery("getAllArticles", getAllArticles)
  const {renderModal} = useModal(Modal)
  
  useEffect(()=>{
    renderModal({
      title: "time",
    })
  },[renderModal])
  
  const articles = useMemo(()=>{
    return (data?.docs || []).map(item => ({
      id: item.id,
      ...item.data()
    }))
  },[data?.docs])

  return (
    <LayoutMain>
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
