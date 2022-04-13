import {QueryConstraint, where} from "firebase/firestore";
import {ArticleData} from "../types";
import {articleRepository} from "./repository";

export const getAllArticles = () => {
  const queryConstraints: QueryConstraint[] = []

  return articleRepository.getArticles({queryConstraints})
}

export const getAllReleaseArticles = () => {
  const queryConstraints: QueryConstraint[] = []
  queryConstraints.push(where("type", "==", "release"))

  return articleRepository.getArticles({queryConstraints})
}

export const getArticle = (id: string) => {
  return articleRepository.getArticle({id})
}

export type CreateArticleArgs = {
  data: {
    type: ArticleData["type"]
    author: string
    //
    title: string
    content: string
    tags: string[]
    thumbnail?: string
    summary?: string
  }
}
export const createArticle = ({data}: CreateArticleArgs) => {
  return articleRepository.createArticle({data: {
    type: data.type,
    release: "",
    draft: "",
    //
    author:  data.author,
    //
    title: data.title,
    content: data.content,
    tags: data.tags,
    thumbnail: data.thumbnail || "",
    summary: data.summary || "",
    //
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    //
    reactions: []
  }})
}