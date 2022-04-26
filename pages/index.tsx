import type {NextPage} from "next"
import {useEffect, useMemo} from "react"
import {useQuery} from "react-query"
import {Button} from "components/Button"
import {GalleryCardArticle} from "components/GalleryCardArticle"
import {LayoutMain} from "components/LayoutMain"
import {getAllArticles} from "utils/firebase"
import {useModal} from "utils/modal"

const Home: NextPage = () => {
  const {status, data} = useQuery("getAllArticles", getAllArticles)
  const {renderModal} = useModal(Button)

  useEffect(()=>{
    renderModal({
      color: "primary",
      children: "dfsgdg",
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
