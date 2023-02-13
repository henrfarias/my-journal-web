import { useEffect, useRef, useState } from 'react'
import { ThoughtConsumer, ThoughtContextType } from '../../context/thought.context'
import { formatDate } from '../../services/date.service'
import { ThoughtListData } from '../../services/fakes'
import { DateString, Divider, InputField, Item } from './style'

export const ThoughtItem: React.FC<{ item: ThoughtListData }> = ({ item }) => {
  const [disable, setDisable] = useState(true)
  const [body, setBody] = useState(item.body)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { getList, updateThought } = ThoughtConsumer() as ThoughtContextType
  const handleDoubleClick: React.MouseEventHandler = () => {
    setDisable(false)
  }

  const handleInputBlur: React.FocusEventHandler = async () => {
    setDisable(true)
    if (body !== item.body) {
      updateThought(body)
      await getList()
      item.body = body
    }
  }

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    setBody(target.value)
  }

  useEffect(() => {
    if (!inputRef.current || disable) return
    inputRef.current.focus()
  }, [disable])

  return (
    <Item onDoubleClick={handleDoubleClick}>
      <InputField
        value={body}
        onChange={handleInputChange}
        ref={inputRef}
        onBlur={handleInputBlur}
        disabled={disable}
      />
      <DateString hexColor={item.tag?.hexColor}>{formatDate(item.createAt)}</DateString>
      <Divider item={item} />
    </Item>
  )
}
