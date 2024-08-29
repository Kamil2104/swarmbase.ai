import PropTypes from "prop-types";

import Logo from './components/Logo/Logo.jsx'
import Menu from './components/Menu/Menu.jsx'

import './styles/Header.css'

const Header = (props) => {
  return (
    <header className='navbar'>
        <Logo setMainContent={props.setMainContent} />
        <Menu />
    </header>
  )
}

Header.propTypes = {
  setMainContent: PropTypes.func.isRequired,
};

export default Header