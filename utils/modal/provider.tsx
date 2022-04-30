import React, {createContext, FunctionComponent, useCallback, useContext, useEffect, useState} from "react";
import {Optional} from "utility-types"

import {v4 as uuidV4} from "uuid";

export type ModalData<T extends FunctionComponent> = {
  id: string;
  component: T 
  props: Parameters<T>[0] | undefined
}

export type UpsertModalDataInput<T extends FunctionComponent> = Optional<ModalData<T>, "id">

type ModalContext = {
  modalDatas: ModalData<FunctionComponent<any>>[]
  removeModal: (id: string) => void
  upsertModal: (dataInput: UpsertModalDataInput<FunctionComponent<any>>) => void
}

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalContext = createContext<ModalContext>({
  modalDatas: [],
  removeModal: (id: string) => {},
  upsertModal: (dataInput: UpsertModalDataInput<FunctionComponent<any>>) => {},
});

export const ModalProvider: FunctionComponent = ({children}) => {
  const [modalDatas, setModalDatas] = useState<ModalData<FunctionComponent<any>>[]>([])

  useEffect(()=>{
    console.log("modalDatas: ", modalDatas); // TODO: remove 
  },[modalDatas])

  const removeModal = useCallback((id: string) => {
    setModalDatas(prev =>  [...prev].filter(item => item.id !== id))
  },[]);

  const upsertModal = useCallback((dataInput: UpsertModalDataInput<FunctionComponent<any>>) => {
    const getUpsertedModalDatas = (previousModalData: typeof modalDatas)=>{
      const modalIndex = previousModalData.findIndex(item => item.id === dataInput.id)

      if (modalIndex === -1) {
        
        const id = dataInput.id || dataInput.component.name
    
        const newModalData:ModalData<typeof dataInput.component> = {
          id,
          component: dataInput.component,
          props: dataInput.props,
        }
        return [...previousModalData, newModalData]
      } else {
        const newModalDatas = [...previousModalData];
        newModalDatas[modalIndex] = {...newModalDatas[modalIndex], ...dataInput};
  
        return newModalDatas
      }
    }
    
    setModalDatas(prev => getUpsertedModalDatas(prev));
  },[]);
  
  return (
    <ModalContext.Provider value={{
      modalDatas,
      removeModal,
      upsertModal,
    }}>
      {children}
    </ModalContext.Provider>
  );
};
