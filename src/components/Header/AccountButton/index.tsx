import * as React from 'react'
import Menu, { MenuUnstyledActions } from '@mui/base/MenuUnstyled'
import { Popper, StyledListbox, StyledMenuItem as MenuItem, TriggerButton } from './style'

export const AccountButton: React.FC<{ name: string }> = ({ name }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const isOpen = Boolean(anchorEl)
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const menuActions = React.useRef<MenuUnstyledActions>(null)
  const preventReopen = React.useRef(false)

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (preventReopen.current) {
      event.preventDefault()
      preventReopen.current = false
      return
    }

    if (isOpen) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleButtonMouseDown = () => {
    if (isOpen) {
      preventReopen.current = true
    }
  }

  const handleButtonKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      setAnchorEl(event.currentTarget)
      if (event.key === 'ArrowUp') {
        menuActions.current?.highlightLastItem()
      }
    }
  }

  const close = () => {
    setAnchorEl(null)
    buttonRef.current!.focus()
  }

  const logoutHandler = () => {
    return () => {
      console.log(`Clicked on Logout button`)
      close()
    }
  }

  return (
    <div>
      <TriggerButton
        type="button"
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
        onMouseDown={handleButtonMouseDown}
        ref={buttonRef}
        aria-controls={isOpen ? 'simple-menu' : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup="menu"
      >
        { name }
      </TriggerButton>

      <Menu
        actions={menuActions}
        open={isOpen}
        onClose={close}
        anchorEl={anchorEl}
        slots={{ root: Popper, listbox: StyledListbox }}
        slotProps={{ listbox: { id: 'simple-menu' } }}
      >
        <MenuItem onClick={logoutHandler()}>Log out</MenuItem>
      </Menu>
    </div>
  )
}
