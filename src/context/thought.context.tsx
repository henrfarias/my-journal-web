import * as React from 'react'
import { instance, TOKEN } from '../services/axios.service'

export interface ThoughtContextType {
  saveThought: () => void
  updateThought: (body: string) => void
  thoughtMessageHandler: React.ChangeEventHandler<HTMLTextAreaElement>
  setTag: React.Dispatch<React.SetStateAction<{ name: string; hexColor: string } | null>>
  getList: () => Promise<void>
  thought: string
  thoughtList: ThoughtListData[]
}

const ThoughtContext = React.createContext<ThoughtContextType | null>(null)

export interface ThoughtList {
  page: number
  count: number
  data: ThoughtListData[]
}

export interface ThoughtListData {
  id: string
  body: string
  authorId: string
  tagId: string | null
  attachments: string | null
  createAt: string
  updatedAt: string
  tag: Tag | null
}

export interface Tag {
  id: string
  name: string
  hexColor: string
  authorId?: string
  createdAt: string
  updatedAt: string
}

export const ThoughtProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // functions
  const [tag, setTag] = React.useState<{ name: string; hexColor: string } | null>(null)
  const [thought, setThought] = React.useState('')
  const [thoughtList, setThoughtList] = React.useState<ThoughtListData[]>([])

  const thoughtMessageHandler: React.ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setThought(target.value)
  }

  const saveThought = async () => {
    try {
      if (thought === '') {
        // TODO: toast erro
        return
      }
      const thoughtPost: { body: string; tag?: string; tagColor?: string } = {
        body: thought,
      }
      if (tag) {
        thoughtPost.tag = tag.name
        thoughtPost.tagColor = tag.hexColor
      }
      await instance.post('/auth/thought', thoughtPost, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      })
      setThought('')
      getList()
      // TODO: toast de sucesso
    } catch (error) {
      console.log('Erro ao salvar pensamento')
      // TODO: toast de erro
    }
  }

  const getList = async () => {
    try {
      const { data } = await instance.get<ThoughtList>('/auth/thought', {
        headers: { Authorization: `Bearer ${TOKEN}` },
      })
      setThoughtList(data.data)
    } catch (error) {
      return
    }
  }

  const updateThought = async (newBody: string) => {
    try {
      if (newBody === '') {
        // TODO: toast erro
        return
      }
      const thoughtPost: { body: string; tag?: string; tagColor?: string } = {
        body: newBody,
      }
      if (tag) {
        thoughtPost.tag = tag.name
        thoughtPost.tagColor = tag.hexColor
      }
      await instance.post('/auth/thought', thoughtPost, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      })
      // TODO: toast de sucesso
    } catch (error) {
      console.log('Erro ao salvar pensamento')
      // TODO: toast de erro
    }
  }

  return (
    <ThoughtContext.Provider
      value={{ saveThought, thoughtMessageHandler, setTag, getList, updateThought, thought, thoughtList }}
    >
      {children}
    </ThoughtContext.Provider>
  )
}

export const ThoughtConsumer = () => React.useContext(ThoughtContext)
