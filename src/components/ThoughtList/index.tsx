import { useCallback, useEffect, useState } from 'react'
import { getThoughtLists, ThoughtListData } from '../../services/fakes'
import { ThoughtItem } from '../ThoughtItem'
import { List } from './style'

export const ThoughtList: React.FC<{ userId: string }> = ({ userId }) => {
  const [page, setPage] = useState(1)
  const [count, useCount] = useState(10)
  const [thoughtList, setThoughList] = useState<ThoughtListData[]>([])

  const getThoughtList = useCallback(async () => {
    try {
      const listData = await getThoughtLists(userId) // vai enviar a page e count aqui também
      setThoughList(listData.data)
    } catch (err) {
      // TODO: popup de erro
      return
    }
  }, [userId])

  useEffect(() => {
    getThoughtList()
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
