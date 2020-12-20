// axiosをラップしたクラス、axios以外を使いたくなった時にはここを変えるだけでいい

import axios from "axios"

export default class BaseInteractor {
  get(url: string) {
    axios.get(url)
  }

  post(url:string, param: object) {
    axios.post(url, param)
  }

  put(url:string, param: object) {
    axios.put(url, param)
  }

  delete(url: string, param:object) {
    axios.delete(url, param)
  }
}