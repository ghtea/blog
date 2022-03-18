import {Box} from "@mui/system"
import type {NextPage} from "next"
import {useQuery} from "react-query"
import {LayoutMain} from "components/LayoutMain"
import {getAllArticles} from "utils/firebase"

const Home: NextPage = () => {
  const {status, data} = useQuery("getAllArticles", getAllArticles)

  return (
    <LayoutMain>
      <div>
        
      </div>
      <div>
        {(data?.docs||[]).map(item => (
          <Box key={item.id}>
            {item.data().title}
          </Box>
        ))}
      </div>
    </LayoutMain>
  )
}

export default Home
