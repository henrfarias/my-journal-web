import React from 'react'
import { AccountButton } from './AccountButton'
import { Title, HeaderContainer } from './style'

interface HeaderProps {
  title: string
  username: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <AccountButton name={'Henrique'} />
    </HeaderContainer>
  )
}

export default Header
