import { Children } from 'react'
import Footer from './Footer'
import Logo from './Logo'

function Layout(props) {
  return (
    <>
      <Logo />
      {props.children}
    </>
  )
}

export default Layout;