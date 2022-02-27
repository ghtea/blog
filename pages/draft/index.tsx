import type {NextPage} from "next"
import {useCallback, useMemo, useState} from "react"
import {TuiEditor} from "components/TuiEditor";

type DraftPageProps = {
}

const DraftPage: NextPage<DraftPageProps> = ({

}) => {
  const [value, setValue] = useState("**Hello world!!!**")
  
  return (
    <div>
      <TuiEditor
        initialValue={value}
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  )
}

export default DraftPage
 