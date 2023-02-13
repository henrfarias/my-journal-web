import * as React from 'react'
import Header from '../../components/Header'
import { ThoughtArea } from '../../components/ThoughtArea'
import ThoughtList from '../../components/ThoughtList'
import { InputArea, JournalContainer } from './style'
import { useNavigate } from 'react-router-dom'

function JournalPage() {

  return (
    <>
      <Header title="My Journal" username="Perfil" />
      <JournalContainer>
        <InputArea>
          <ThoughtArea />
        </InputArea>
      </JournalContainer>
      <ThoughtList />
    </>
  )
}

export default JournalPage
