import * as React from 'react'
import Header from '../../components/Header'
import { ThoughtArea } from '../../components/ThoughtArea'
import { InputArea, JournalContainer } from './style'

function JournalPage() {
  return (
    <>
      <Header title="My Journal" username="Henrique" />
      <JournalContainer>
        <InputArea>
          <ThoughtArea />
        </InputArea>
      </JournalContainer>
    </>
  )
}

export default JournalPage
