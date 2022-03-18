import {Box} from "@mui/system"
import type {NextPage} from "next"
import {useQueries, useQuery} from "react-query"
import {getAllArticles} from "utils/firebase"

const Home: NextPage = () => {
  const {status, data} = useQuery("getAllArticles", getAllArticles)

  return (
    <div>
      <div>

      </div>
      <div>
        {(data?.docs||[]).map(item => (
          <Box key={item.id}>
            {item.data().title}
          </Box>
        ))}
      </div>
    </div>
  )
}

export default Home
