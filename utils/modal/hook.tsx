import {FunctionComponent, useCallback, useEffect, useMemo, useRef, useState} from "react"
import {Optional} from "utility-types";
import {useModalContext} from "./provider"

export const useModal = <T extends FunctionComponent<any>>(component: T, id?: string)=>{
  const {upsertModal, removeModal} = useModalContext()

  const modalId = useMemo(()=>id || component.name, [component.name, id])

  const renderModal = useCallback((props: Optional<Parameters<typeof component>[0], "onClose">) =>{
    upsertModal({
      id: modalId,
      component,
      props: {
        onClose: ()=>removeModal(modalId),
        ...props
      },
    })
  },[component, modalId, removeModal, upsertModal])

  // remove modal when current component is unmounted
  useEffect(()=>(()=>{
    removeModal(modalId)
  }),[modalId, removeModal])

  return useMemo(()=>({
    id: modalId,
    renderModal,
  }), [modalId, renderModal])
}