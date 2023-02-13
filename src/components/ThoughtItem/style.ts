import { TextareaAutosize } from '@mui/base'
import styled from 'styled-components'
import { ThoughtListData } from '../../services/fakes'

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 60vw;
  padding: 3rem;
`

export const InputField = styled(TextareaAutosize)`
  display: block;
  width: 100%;
  overflow: hidden;
  resize: none;
  min-height: 40px;
  line-height: 20px;
  border: none;
  background: transparent;
  color: #333;
  font-size: 1.4rem;
  font-family: 'Poppins';
  line-height: 2rem;
  margin-bottom: 2rem;
`

export const DateString = styled.span<{ hexColor?: string }>(
  ({ hexColor }) => `
  font-weight: bold;
  text-align: right;
  color: ${hexColor ? hexColor : '#caa8f5'};
`
)

export const Edited = styled.strong`
  margin-left: 10px;
  color: #caa8f5aa;
`

export const Divider = styled.div<{ item: ThoughtListData }>(
  ({ item }) => `
    border-bottom: 3px solid ${item.tag?.hexColor ? item.tag?.hexColor : '#caa8f5'};
    margin-top: 1rem;
    border-radius: 8px;
  `
)
