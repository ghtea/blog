import {Box} from "@mui/system"
import React, {useCallback, useEffect, useMemo} from "react"
import {useMutation} from "react-query"
import {Modal, ModalProps} from "components/Modal"
import {useAuthentication} from "utils/authentication"
import {createKeyword, KeywordData} from "utils/firebase"

export type ModalKeywordUpsertProps = {
  onClose: ModalProps["onClose"]
  onConfirm?: ()=>void
  onCancel?: ()=>void
  keyword?: KeywordData
}

export const ModalKeywordUpsert = ({
  onClose,
  onConfirm,
  onCancel,
  keyword,
}: ModalKeywordUpsertProps) => {
  const {user} = useAuthentication()
  const {mutate: createKeywordMutate, status: createKeywordStatus} = useMutation(createKeyword)

  const cancel = useMemo(()=>{
    return {onClick: onCancel}
  },[onCancel])

  // confirm
  const handleClickConfirm = useCallback(()=>{
    if (!user) return;

    createKeywordMutate({
      data: {
        author: user.uid,
        name: "new name",
        search: "new search",
      }
    })
  },[createKeywordMutate, user])

  const confirm = useMemo(()=>{
    const hanleClick = () => {
      handleClickConfirm()
      onConfirm?.()
    }

    return {onClick: hanleClick}
  },[handleClickConfirm, onConfirm])

  useEffect(()=>{
    if (createKeywordStatus === "success"){
      onClose()
    }
  }, [createKeywordStatus, onClose])

  return (
    <Modal 
      title={"Keyword"}
      onClose={onClose}
      cancel={cancel}
      confirm={confirm}
    >
      <Box>

      </Box>
    </Modal>
  )
}