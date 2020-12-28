import BaseInteractor from '../BaseInteractor'

const NEWS_SEARCH_PATH = 'https://hn.algolia.com/api/v1'

export default class NewsInteractor {
  private readonly interactor

  constructor() {
    this.interactor = new BaseInteractor()
  }

  findAll = async () => {
    try {
      const res = await this.interactor.get(`${NEWS_SEARCH_PATH}/search`)
      console.log(res)
    } catch (error) {
      console.log(error)
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
