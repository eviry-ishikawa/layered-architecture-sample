// axiosをラップしたクラス、axios以外を使いたくなった時にはここを変えるだけでいい

import axios, { AxiosResponse } from 'axios'

export default class BaseInteractor {
  async get(url: string): Promise<AxiosResponse<any>> {
    const res = await axios.get(url)
    return res
  }

  post(url: string, param: object) {
    axios.post(url, param)
  }

  put(url: string, param: object) {
    axios.put(url, param)
  }

  delete(url: string, param: object) {
    axios.delete(url, param)
  }
}
