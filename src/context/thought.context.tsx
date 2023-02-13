import * as React from 'react'
import { instance, TOKEN } from '../services/axios.service'

export interface ThoughtContextType {
  saveThought: () => void
  thoughtMessageHandler: React.ChangeEventHandler<HTMLTextAreaElement>
  setTag: React.Dispatch<React.SetStateAction<{ name: string; hexColor: string } | null>>
  thought: string
}

const ThoughtContext = React.createContext<ThoughtContextType | null>(null)

export const ThoughtProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // functions
  const [tag, setTag] = React.useState<{ name: string; hexColor: string } | null>(null)
  const [thought, setThought] = React.useState('')

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
      // TODO: toast de sucesso
    } catch (error) {
      console.log('Erro ao salvar pensamento')
      // TODO: toast de erro
    }
  }

  return (
    <ThoughtContext.Provider value={{ saveThought, thoughtMessageHandler, setTag, thought }}>{children}</ThoughtContext.Provider>
  )
}

export const ThoughtConsumer = () => React.useContext(ThoughtContext)
