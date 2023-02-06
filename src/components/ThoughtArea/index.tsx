import { TextareaAutosize } from '@mui/base'
import { ActionContainer, saveButton, StyledButton, ThoughtContainer, ThoughtTextArea } from './style'
import './style.css'

export const ThoughtArea: React.FC = () => {
  return (
    <ThoughtContainer>
      <TextareaAutosize className="thought" placeholder="O que aconteceu?" style={ThoughtTextArea} />
      <ActionContainer>
        <StyledButton>Tag</StyledButton>
        <StyledButton variant="contained" type="button" style={saveButton} className="save-button">
          Salvar
        </StyledButton>
      </ActionContainer>
    </ThoughtContainer>
  )
}
