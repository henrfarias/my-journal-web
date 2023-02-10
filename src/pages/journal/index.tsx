import * as React from 'react'
import Header from '../../components/Header'
import { ThoughtArea } from '../../components/ThoughtArea'
import ThoughtList from '../../components/ThoughtList'
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
      <ThoughtList userId={'fake-user-id'} />
    </>
  )
}

export default JournalPage
