export interface Item {
  created_at: Date
  title: string
  url: string
  author: string
  points: number
  story_text: null | string
  comment_text: null | string
  num_comments: number
  story_id: null | string
  story_title: null | string
  story_url: null | string
  parent_id: null | string
  created_at_i: number
  relevancy_score: number
  _tags: string[]
  objectID: string
  _highlightResult: HighlightResult
}

export interface HighlightResult {
  title: Author
  url: Author
  author: Author
}

export interface Author {
  value: string
  matchLevel: string
  matchedWords: any[]
}

export interface NewsBody {
  hits: Item[]
  nbHits: number
  page: number
  nbPages: number
  hitsPerPage: number
  exhaustiveNbHits: boolean
  query: string
  params: string
  processingTimeMS: number
}

// こっちがアプリケーションで使う型
export type News = {
  news: Item[]
  total: number
}
