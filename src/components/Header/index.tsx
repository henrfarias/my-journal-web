import React from 'react'
import './style.css'

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header id="header">
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = { title: '' }

export default Header
