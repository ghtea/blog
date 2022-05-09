import {Box} from "@mui/system"
import type {NextPage} from "next"
import {useCallback, useMemo, useState} from "react"
import {useQuery} from "react-query"
import {LayoutMain} from "components/LayoutMain"
import {ModalKeywordUpsert} from "components/ModalKeywordUpsert"
import {TableKeyword} from "components/TableKeyword"
import {getAllKeywords, KeywordData} from "utils/firebase"
import {useModal} from "utils/modal"

const KeywordsPage: NextPage = () => {
  const {data} = useQuery("getAllKeywords", getAllKeywords)

  const [modalKeywordData, setModalKeywordData] = useState<KeywordData>()

  const handleCloseModal = useCallback(()=>{
    setModalKeywordData(undefined)
  },[])

  const {toggleModal} = useModal(ModalKeywordUpsert, {keyword: modalKeywordData, onClose: handleCloseModal})

  const keywords = useMemo(()=>{
    return (data?.docs || []).map(item => ({
      id: item.id,
      ...item.data()
    }))
  },[data?.docs])

  const handleClickRow = useCallback((keyword: KeywordData)=>{
    toggleModal(true)
    
    setModalKeywordData(keyword)
  },[toggleModal])

  return (
    <LayoutMain>
      <Box sx={{paddingX: 2, maxWidth: "600px"}}>
        <TableKeyword keywords={keywords} onClickRow={handleClickRow}/>
      </Box>
    </LayoutMain>
  )
}

export default KeywordsPage
