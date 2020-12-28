import React, { useEffect, useState } from 'react'
import NewsInteractor from '../interactors/News/NewsInteractor'
import { News } from '../interactors/News/NewsMapper'

export const Book = () => {
  const [news, setNews] = useState<News | null>({})

  useEffect(() => {
    const getNews = async () => {
      setNews(await new NewsInteractor().findAll())
    }
    getNews()
    console.log(news)
  }, [])

  return <div></div>
}
