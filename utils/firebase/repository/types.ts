export type ArticleDocument = {
  title: string
  content: string
  tags: string[]
  reactions: string[]
  author: string
  createdAt: number
  updatedAt: number
  releasedAt?: number 
  isPublic: boolean
  thumbnail: string
}
export type ArticleData = ArticleDocument & {
  id: string
}

export type ArticleDraftDocument = {
  articleId: string
  title: string
  content: string
  tags: string[]
  author: string
  createdAt: number
  updatedAt: number
  thumbnail: string
}
export type ArticleDraftData = ArticleDraftDocument & {
  id: string
}

