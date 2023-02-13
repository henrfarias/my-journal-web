import { TextareaAutosize } from '@mui/base'
import { useEffect, useState } from 'react'
import { TagSelect } from './SelectTag'
import { ActionContainer, saveButton, StyledButton, ThoughtContainer, ThoughtTextArea } from './style'
import './style.css'

export const ThoughtArea: React.FC = () => {
  const [tag, setTag] = useState<{ name: string; hexColor: string } | null>(null)

  useEffect(() => {
    console.log(tag)
  }, [tag])
  return (
    <ThoughtContainer>
      <TextareaAutosize className="thought" placeholder="O que aconteceu?" style={ThoughtTextArea} />
      <ActionContainer>
        <TagSelect setTag={setTag} />
        <StyledButton variant="contained" type="button" style={saveButton} className="save-button">
          Salvar
        </StyledButton>
      </ActionContainer>
    </ThoughtContainer>
  )
}
