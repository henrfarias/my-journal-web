import { Button } from '@mui/material'
import * as React from 'react'
import styled from 'styled-components'

export const ThoughtTextArea: React.CSSProperties = {
  width: 750,
  height: 220,
  padding: '1rem',
  borderRadius: '8px',
  border: '2px solid #3943B7',
  fontFamily: 'Inter',
}

export const saveButton: React.CSSProperties = {
  fontSize: '24px',
  fontStyle: 'italic',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  backgroundColor: '#3943B7',
}

export const StyledButton = styled(Button)`
  width: 200px;
  height: 60px;
`

export const ThoughtContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`
