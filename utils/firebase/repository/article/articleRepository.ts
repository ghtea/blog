import {QueryConstraint} from "firebase/firestore";
import {Repository, repository} from "../repository";
import {ArticleDocument} from "../types";

const ARTICLE_PATH = "articles"

export class ArticleRepository {
  repository: Repository

  constructor(repository: Repository) {
    this.repository = repository;
  }

  createArticle({data}: {
    data: ArticleDocument
  }){
    return this.repository.createDocument<ArticleDocument>({path: ARTICLE_PATH, data})
  }

  updateArticle({id, data}: {
    id:string
    data: ArticleDocument
  }){
    return this.repository.updateDocument<ArticleDocument>({path: ARTICLE_PATH, pathSegments: [id], data})
  }

  setArticle({id, data}:{
    id:string
    data: ArticleDocument
  }){
    return this.repository.setDocument<ArticleDocument>({path: ARTICLE_PATH, pathSegments: [id], data})
  }

  deleteArticle({id}:{
    id:string
  }){
    return this.repository.deleteDocument({path: ARTICLE_PATH, pathSegments: [id]})
  }

  getArticle({id}:{
    id: string
  }){
    return this.repository.getDocument<ArticleDocument>({path: ARTICLE_PATH, pathSegments: [id]})
  }

  getArticles({queryConstraints}:{
    queryConstraints: QueryConstraint[]
  }){
    return this.repository.getDocuments<ArticleDocument>({path: ARTICLE_PATH, queryConstraints})
  }
}

export const articleRepository = new ArticleRepository(repository)