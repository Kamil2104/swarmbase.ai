import Logo from './components/Logo'
import Menu from './components/Menu/Menu'

import '../../assets/styles/Header.css'

const Header = () => {
  return (
    <header>
        <Logo />
        <Menu />
    </header>
  )
}

export default Header