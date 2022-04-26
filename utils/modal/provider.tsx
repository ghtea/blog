import React, {createContext, FunctionComponent, ReactChild, ReactComponentElement, useCallback, useContext, useEffect, useState} from "react";
import {Optional} from "utility-types"

import {v4 as uuidV4} from "uuid";

// ref: https://opensource.com/article/21/5/global-modals-react

export type ModalData<T extends FunctionComponent> = {
  id: string;
  component: T 
  props: Parameters<T>[0] | undefined
}

export type ModalDataInput<T extends FunctionComponent> = Optional<ModalData<T>, "id">
export type ModalIdOrName = string | undefined

type ModalContext = {
  modalDatas: ModalData<FunctionComponent<any>>[]
  addModal: (dataInput: ModalDataInput<FunctionComponent<any>>) => void
  removeModal: (idOrName: ModalIdOrName) => void
  updateModal: (dataInput: ModalDataInput<FunctionComponent<any>>) => void
  upsertModal: (dataInput: ModalDataInput<FunctionComponent<any>>) => void
  findModalIndex: (idOrName: ModalIdOrName) => void
}

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalContext = createContext<ModalContext>({
  modalDatas: [],
  addModal: (dataInput: ModalDataInput<FunctionComponent<any>>) => {},
  removeModal: (idOrName: ModalIdOrName) => {},
  updateModal: (dataInput: ModalDataInput<FunctionComponent<any>>) => {},
  upsertModal: (dataInput: ModalDataInput<FunctionComponent<any>>) => {}, 
  findModalIndex: (idOrName: ModalIdOrName) => {},
});

export const ModalProvider: FunctionComponent = ({children}) => {
  const [modalDatas, setModalDatas] = useState<ModalData<FunctionComponent<any>>[]>([])

  useEffect(()=>{
    console.log("modalDatas: ", modalDatas); // TODO: remove 
  },[modalDatas])

  const addModal = useCallback((dataInput: ModalDataInput<FunctionComponent<any>>) => {
    if (dataInput.component) {
      const id = uuidV4()

      const newModalData:ModalData<typeof dataInput.component> = {
        id,
        component: dataInput.component,
        props: dataInput.props,
      }
      setModalDatas(prev => [...prev, newModalData])

      return id
    }
  },[]);

  const removeModal = useCallback((idOrName: ModalIdOrName) => {
    const newModalDatas = [...modalDatas]
      .filter(item => item.id !== idOrName)
      .filter(item => item.component.name !== idOrName)
    setModalDatas(newModalDatas)
  },[modalDatas]);

  const findModalIndex = useCallback((idOrName: ModalIdOrName)=>{
    const idModalIndex = modalDatas.findIndex(item => item.id === idOrName);
    const nameModalIndex = [...modalDatas].reverse().findIndex(item => item.component.name === idOrName);

    return idModalIndex !== -1 ? idModalIndex : nameModalIndex !== -1 ? nameModalIndex : -1;
  },[modalDatas])

  const updateModal = useCallback((dataInput: ModalDataInput<FunctionComponent<any>>) => {
    const modalIndex = findModalIndex(dataInput.id || dataInput.component?.name);
    if (modalIndex === -1) return undefined;

    const newModalDatas = [...modalDatas];
    newModalDatas[modalIndex] = {...newModalDatas[modalIndex], ...dataInput};

    setModalDatas(newModalDatas);
  },[findModalIndex, modalDatas]);

  const upsertModal = useCallback((dataInput: ModalDataInput<FunctionComponent<any>>)=>{
    const modalIndex = findModalIndex(dataInput.id || dataInput.component?.name);
    if (modalIndex === -1){
      return addModal(dataInput) // WIP: 
    }
    else {
      updateModal(dataInput)
      return undefined
    }
  },[addModal, findModalIndex, updateModal])
  
  return (
    <ModalContext.Provider value={{
      modalDatas,
      addModal,
      removeModal,
      updateModal,
      upsertModal,
      findModalIndex,
    }}>
      {children}
    </ModalContext.Provider>
  );
};
