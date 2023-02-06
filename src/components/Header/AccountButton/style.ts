import { MenuItemUnstyled, menuItemUnstyledClasses, PopperUnstyled } from '@mui/base'
import styled from 'styled-components'

export const StyledListbox = styled('ul')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: white;
  border: 1px solid rgba(155, 155, 151,1);
  color: rgb(36, 41, 47);
  box-shadow: 0px 4px 30px rgba(51, 51, 51, 0.4);
`

export const StyledMenuItem = styled(MenuItemUnstyled)`
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemUnstyledClasses.focusVisible} {
    outline: 3px solid rgba(153, 204, 243);
    background-color: rgba(234,238,242);
    color: rgb(36, 41, 47);
  }

  &.${menuItemUnstyledClasses.disabled} {
    color: rgb(140, 149, 159);
  }

  &:hover:not(.${menuItemUnstyledClasses.disabled}) {
    background-color: rgba(234,238,242);
    color: rgb(36, 41, 47);
  }
`

export const TriggerButton = styled('button')`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 12px 16px;
  line-height: 1.5;
  background: transparent;
  border: 1px solid transparent;
  color: white;
  font-weight: bold;
  cursor: pointer;

  transition-property: all;
  transition-duration: 120ms;
  
  &:hover {
    background-color: rgb(35,42,119);
  }

  &:focus {
    border-color: rgb(51,153,255);
    outline: 3px solid rgb(153, 204, 243);
  }
`

export const Popper = styled(PopperUnstyled)`
  z-index: 100;
`
