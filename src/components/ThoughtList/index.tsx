import { useCallback, useEffect, useState } from 'react'
import { ThoughtConsumer, ThoughtContextType } from '../../context/thought.context'
import { getThoughtLists, ThoughtListData } from '../../services/fakes'
import { ThoughtItem } from '../ThoughtItem'
import { List } from './style'

export const ThoughtList: React.FC = () => {
  const { getList, thoughtList } = ThoughtConsumer() as ThoughtContextType
  
  useEffect(() => {
    getList()
  }, [])
  return (
    <List>
      {thoughtList.map((thought) => (
        <ThoughtItem item={thought} key={thought.id} />
      ))}
    </List>
  )
}

export default ThoughtList
