export type ArticleDocument = {
  type: "draft" | "release"
  release: string
  draft: string
  //
  author: string
  //
  title: string
  content: string
  tags: string[]
  keywords: string[]
  thumbnail: string
  summary: string
  //
  createdAt: number
  updatedAt: number
  // release only
  reactions: string[]
}
export type ArticleData = ArticleDocument & {
  id: string
}

export type KeywordDocument = {
  author: string
  //
  name: string
  search: string
  //
  createdAt: number
  updatedAt: number
}
export type KeywordData = KeywordDocument & {
  id: string
}