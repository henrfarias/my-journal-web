import { TextareaAutosize } from '@mui/base'
import { useState } from 'react'
import { instance, TOKEN } from '../../services/axios.service'
import { TagSelect } from './SelectTag'
import { ActionContainer, saveButton, StyledButton, ThoughtContainer, ThoughtTextArea } from './style'
import './style.css'

export const ThoughtArea: React.FC = () => {
  const [tag, setTag] = useState<{ name: string; hexColor: string } | null>(null)
  const [thought, setThought] = useState('')

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
    <ThoughtContainer>
      <TextareaAutosize
        className="thought"
        placeholder="O que aconteceu?"
        style={ThoughtTextArea}
        onChange={thoughtMessageHandler}
        value={thought}
      />
      <ActionContainer>
        <TagSelect setTag={setTag} />
        <StyledButton
          variant="contained"
          type="button"
          style={saveButton}
          className="save-button"
          onClick={saveThought}
        >
          Salvar
        </StyledButton>
      </ActionContainer>
    </ThoughtContainer>
  )
}
