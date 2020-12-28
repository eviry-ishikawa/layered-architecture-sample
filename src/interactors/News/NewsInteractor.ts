import BaseInteractor from '../BaseInteractor'
import NewsMapper, { News, NewsBody } from './NewsMapper'

const NEWS_SEARCH_PATH = 'https://hn.algolia.com/api/v1'

export default class NewsInteractor {
  private readonly interactor

  constructor() {
    this.interactor = new BaseInteractor()
  }

  findAll = async (): Promise<News | null> => {
    try {
      const res = await this.interactor.get(`${NEWS_SEARCH_PATH}/search`)
      const body: NewsBody = await res.data
      console.log(NewsMapper.newsBodyToNews(body))
      return NewsMapper.newsBodyToNews(body)
    } catch (error) {
      console.log(error)
      return null
    }
  }

  findByQuery = async (query: string) => {
    try {
      const res = await this.interactor.get(
        `${NEWS_SEARCH_PATH}/search?query=${query}`,
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
}
