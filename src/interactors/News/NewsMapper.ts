import { News, NewsBody } from '../../type/news'

export default class NewsMapper {
  static newsBodyToNews = (result: NewsBody): News => ({
    news: result.hits,
    total: result.nbHits,
  })
}
