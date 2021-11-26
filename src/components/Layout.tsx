import React from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

export const MyLayout = () => {
  const location = useLocation()

  return (
    <StyledLayout>
      <StyledHeader>
        <Menu theme='dark' mode='horizontal' selectedKeys={[location.pathname]}>
          <Menu.Item key='/'>
            <NavLink to='/'>Home</NavLink>
          </Menu.Item>
          <Menu.Item key='/currency'>
            <NavLink to='/currency'>Currency</NavLink>
          </Menu.Item>
        </Menu>
      </StyledHeader>
      <StyledContent className='site-layout'>
        <div className='site-layout-background'>
          <Outlet />
        </div>
      </StyledContent>
      <StyledFooter>Ant Design ©2018 Created by Ant UED</StyledFooter>
    </StyledLayout>
  )
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

const StyledHeader = styled(Header)`
  position: fixed;
  z-index: 1;
  width: 100%;
`

const StyledContent = styled(Content)`
  margin-top: 64px;
  padding: 0 50px;

  & .site-layout-background {
    padding: 24px;
  }
`
const StyledFooter = styled(Footer)`
  text-align: center;
`
