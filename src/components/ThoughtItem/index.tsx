import { useEffect, useRef, useState } from 'react'
import { formatDate, isSameSecondTime } from '../../services/date.service'
import { ThoughtListData } from '../../services/fakes'
import { DateString, Divider, Edited, InputField, Item } from './style'
import TagSelect from '../ThoughtArea/SelectTag'

export const ThoughtItem: React.FC<{ item: ThoughtListData }> = ({ item }) => {
  const [disable, setDisable] = useState(true)
  const [body, setBody] = useState(item.body)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleDoubleClick: React.MouseEventHandler = () => {
    setDisable(false)
  }

  const handleInputBlur: React.FocusEventHandler = () => {
    setDisable(true)
    if (body !== item.body) {
      // TODO: Fetch to persist body
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
      <DateString>
        {formatDate(item.createAt)}
        {isSameSecondTime(item.createAt, item.updatedAt) && <Edited>{'(editado)'}</Edited>}
      </DateString>
      <Divider item={item} />
    </Item>
  )
}
