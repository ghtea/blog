import {QueryConstraint} from "firebase/firestore";
import {keywordRepository} from "./repository";

export const getAllKeywords = () => {
  const queryConstraints: QueryConstraint[] = []

  return keywordRepository.getKeywords({queryConstraints})
}

export const getKeyword = (id: string) => {
  return keywordRepository.getKeyword({id})
}

export type CreateKeywordArgs = {
  data: {
    author: string
    //
    name: string
    search: string
  }
}
export const createKeyword = ({data}: CreateKeywordArgs) => {
  return keywordRepository.createKeyword({data: {
    author:  data.author,
    //
    name: data.name,
    search: data.search,
    //
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  }})
}

export type UpdateKeywordArgs = {
  id: string,
  data: {
    author?: string
    //
    name?: string
    search?: string
  }
}
export const updateKeyword = ({id, data}: UpdateKeywordArgs) => {
  return keywordRepository.updateKeyword({
    id,
    data: {
      ...({author:  data.author} || {}),
      //
      ...({name:  data.name} || {}),
      ...({search:  data.search} || {}),
      //
      updatedAt: new Date().getTime(),
    }
  })
}