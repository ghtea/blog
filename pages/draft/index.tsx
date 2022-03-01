import type {NextPage} from "next"
import {useCallback, useMemo, useState} from "react"
import {TuiEditor, EventMap, ToastUIEditor} from "components/Editor";


type DraftPageProps = {
}

const DraftPage: NextPage<DraftPageProps> = ({

}) => {
  const [value, setValue] = useState("**Hello world!!!**")
  
  const events: ToastUIEditor.EventMap = useMemo(()=>{
    return {
      change: () => {}
    }
  }, [])

  return (
    <div>
      <TuiEditor
        initialValue={value}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        events={events}
      />
    </div>
  )
}

export default DraftPage
 