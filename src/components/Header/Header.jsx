import Logo from './components/Logo/Logo.jsx'
import Menu from './components/Menu/Menu.jsx'

import './styles/Header.css'

const Header = () => {
  return (
    <header className='navbar'>
        <Logo />
        <Menu />
    </header>
  )
}

export default Header