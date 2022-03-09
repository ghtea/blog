import type {NextPage} from "next"
import {useCallback, useMemo, useState} from "react"
import {Editor} from "components/organisms/Editor";


type DraftPageProps = {
}

const DraftPage: NextPage<DraftPageProps> = ({

}) => {
  const [value, setValue] = useState("**Hello world!!!**")
  
  const onChange = useCallback(()=>{
    console.info("onChange called")
  },[])

  return (
    <div>
      <Editor
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default DraftPage
 