import {QueryConstraint} from "firebase/firestore";
import {articleRepository} from "./articleRepository";

export const getAllArticles = () => {
  const queryConstraints: QueryConstraint[] = []

  return articleRepository.getArticles({queryConstraints})
}

export type CreateArticleArgs = {
  data: {
    title: string
    content: string
    tags: string[]
    isPublic: boolean
    thumbnail: string
  }
}
export const createArticle = ({data}: CreateArticleArgs) => {
  return articleRepository.createArticle({data: {
    title: data.title,
    content: data.content,
    tags: data.tags,
    reactions: [],
    author: "tester",
    updatedAt: new Date().getTime(),
    createdAt: new Date().getTime(),
    isPublic: data.isPublic,
    thumbnail: data.thumbnail,
  }})
}