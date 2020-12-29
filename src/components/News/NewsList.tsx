import React, { useEffect, useState } from 'react'
import NewsInteractor from '../../interactors/News/NewsInteractor'
import { News } from '../../type/news'
import { NewsListItem } from './NewsListItem'

export const NewsList: React.FC = () => {
  const [newsInfo, setNewsInfo] = useState<News | null>({})

  useEffect(() => {
    const getNews = async () => {
      setNewsInfo(await new NewsInteractor().findAll())
    }
    getNews()
  }, [])

  if (newsInfo?.news === undefined) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>total: {newsInfo.total}</div>
      {newsInfo?.news.map((n) => (
        <div key={n.objectID}>
          <NewsListItem title={n.title} url={n.url} />
        </div>
      ))}
    </div>
  )
}
