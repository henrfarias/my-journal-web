import { TextareaAutosize } from '@mui/base'
import { ThoughtConsumer, ThoughtContextType } from '../../context/thought.context'
import { TagSelect } from './SelectTag'
import { ActionContainer, saveButton, StyledButton, ThoughtContainer, ThoughtTextArea } from './style'
import './style.css'

export const ThoughtArea: React.FC = () => {
  const { saveThought, thoughtMessageHandler, thought } = ThoughtConsumer() as ThoughtContextType 

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
        <TagSelect />
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
