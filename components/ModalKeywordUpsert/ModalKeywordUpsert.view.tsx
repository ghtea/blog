import {Box} from "@mui/system"
import React from "react"
import {Modal, ModalProps} from "components/Modal"
import {TextInput, TextInputProps} from "components/TextInput"

export type ModalKeywordUpsertViewProps = Pick<ModalProps, "onClose" | "cancel" | "confirm"> & {
  nameValue: TextInputProps["value"]
  onChangeName: TextInputProps["onChange"]
  searchValue: TextInputProps["value"]
  onChangeSearch: TextInputProps["onChange"]
}

export const ModalKeywordUpsertView = ({
  nameValue,
  onChangeName,
  searchValue,
  onChangeSearch,
  ...modalProps
}: ModalKeywordUpsertViewProps) => {
  return (
    <Modal 
      title={"Keyword"}
      {...modalProps}
    >
      <Box sx={{width: 1, maxWidth: "300px"}}>
        <TextInput value={nameValue} onChange={onChangeName} label={"name"}/>
      </Box>
      <Box sx={{width: 1, marginTop: 2}}>
        <TextInput value={searchValue} onChange={onChangeSearch} label={"search"}/>
      </Box>
    </Modal>
  )
}