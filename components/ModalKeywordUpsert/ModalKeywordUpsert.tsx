import React, {useCallback, useEffect, useMemo, useState} from "react"
import {useMutation} from "react-query"
import {ModalKeywordUpsertView, ModalKeywordUpsertViewProps} from "./ModalKeywordUpsert.view"
import {ModalProps} from "components/Modal"
import {useAuthentication} from "utils/authentication"
import {createKeyword, KeywordData, updateKeyword} from "utils/firebase"

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
  const {mutate: updateKeywordMutate, status: updateKeywordStatus} = useMutation(updateKeyword)

  const [nameValue, setNameValue] = useState(keyword?.name || "")
  const [searchValue, setSearchValue] = useState(keyword?.search || "")
  
  const confirmDisabled = !setNameValue || !setNameValue

  useEffect(()=>{
    setNameValue(keyword?.name || "");
  },[keyword?.name])

  useEffect(()=>{
    setSearchValue(keyword?.search || "");
  },[keyword?.search])

  const cancel: ModalKeywordUpsertViewProps["cancel"] = useMemo(()=>{
    return {onClick: onCancel}
  },[onCancel])

  // confirm
  const handleClickConfirm = useCallback(()=>{
    if (!user || confirmDisabled) return;

    if (keyword?.id){
      updateKeywordMutate({
        id: keyword?.id,
        data: {
          author: user.uid,
          name: nameValue,
          search: searchValue,
        }
      })
    }
    else {
      createKeywordMutate({
        data: {
          author: user.uid,
          name: nameValue,
          search: searchValue,
        }
      })
    }
  },[confirmDisabled, createKeywordMutate, keyword?.id, nameValue, searchValue, updateKeywordMutate, user])

  const confirm: ModalKeywordUpsertViewProps["confirm"] = useMemo(()=>{
    const hanleClick = () => {
      handleClickConfirm()
      onConfirm?.()
    }

    return {
      disabled: confirmDisabled,
      onClick: hanleClick
    }
  },[confirmDisabled, handleClickConfirm, onConfirm])

  useEffect(()=>{
    if (createKeywordStatus === "success" || updateKeywordStatus=== "success"){
      onClose()
    }
  }, [createKeywordStatus, onClose, updateKeywordStatus])

  const handleChangeName:ModalKeywordUpsertViewProps["onChangeName"]  = useCallback((value)=>{
    setNameValue(value)
  },[])

  const handleChangeSearch:ModalKeywordUpsertViewProps["onChangeSearch"] = useCallback((value)=>{
    setSearchValue(value)
  },[])

  return (
    <ModalKeywordUpsertView
      onClose={onClose}
      cancel={cancel}
      confirm={confirm}
      nameValue={nameValue}
      onChangeName={handleChangeName}
      searchValue={searchValue}
      onChangeSearch={handleChangeSearch}
    />
  )
}