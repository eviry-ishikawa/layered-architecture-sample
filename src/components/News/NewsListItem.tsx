import React from 'react'

type NewsListItemProps = {
  title: string
  url: string
}

export const NewsListItem: React.FC<NewsListItemProps> = ({ title, url }) => {
  return (
    <div>
      <a href={url}>{title}</a>
    </div>
  )
}
