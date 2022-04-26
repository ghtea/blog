import {FunctionComponent, useCallback, useEffect, useMemo, useRef} from "react"
import {v4 as uuidV4} from "uuid";
import {useModalContext} from "./provider"

export const useModal = <T extends FunctionComponent<any>>(component: T)=>{
  const {upsertModal, removeModal} = useModalContext()

  const id = useMemo(()=>{
    return uuidV4()
  },[])

  const renderModal = useCallback((props: Parameters<typeof component>[0]) =>{
    upsertModal({
      id,
      component,
      props,
    })
  },[component, id, upsertModal])

  // remove modal when current component is unmounted
  useEffect(()=>(()=>{
    removeModal(id)
  }),[id, removeModal])

  const renderModalRef = useRef<typeof renderModal>(renderModal)
  useEffect(()=>{
    renderModalRef.current = renderModal
  },[renderModal])

  return useMemo(()=>({
    id,
    renderModal: renderModalRef.current,
  }), [id])
}