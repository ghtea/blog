import {QueryConstraint} from "firebase/firestore";
import {Repository, repository} from "../repository";
import {KeywordDocument} from "../types";

const KEYWORD_PATH = "keywords"

export class KeywordRepository {
  repository: Repository

  constructor(repository: Repository) {
    this.repository = repository;
  }

  createKeyword({data}: {
    data: KeywordDocument
  }){
    return this.repository.createDocument<KeywordDocument>({path: KEYWORD_PATH, data})
  }

  updateKeyword({id, data}: {
    id:string
    data: Partial<KeywordDocument>
  }){
    return this.repository.updateDocument<KeywordDocument>({path: KEYWORD_PATH, pathSegments: [id], data})
  }

  setKeyword({id, data}:{
    id:string
    data: KeywordDocument
  }){
    return this.repository.setDocument<KeywordDocument>({path: KEYWORD_PATH, pathSegments: [id], data})
  }

  deleteKeyword({id}:{
    id:string
  }){
    return this.repository.deleteDocument({path: KEYWORD_PATH, pathSegments: [id]})
  }

  getKeyword({id}:{
    id: string
  }){
    return this.repository.getDocument<KeywordDocument>({path: KEYWORD_PATH, pathSegments: [id]})
  }

  getKeywords({queryConstraints}:{
    queryConstraints: QueryConstraint[]
  }){
    return this.repository.getDocuments<KeywordDocument>({path: KEYWORD_PATH, queryConstraints})
  }
}

export const keywordRepository = new KeywordRepository(repository)