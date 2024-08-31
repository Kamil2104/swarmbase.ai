import PropTypes from "prop-types";

import Logo from './components/Logo/Logo.jsx'
import Menu from './components/Menu/Menu.jsx'

import './styles/Header.css'
import './styles/HeaderResponsiveness.css'

const Header = (props) => {
  return (
    <header className='navbar'>
        <Logo setMainContent={props.setMainContent} />
        <Menu setMainContent={props.setMainContent} mainContent={props.mainContent}/>
    </header>
  )
}

Header.propTypes = {
  setMainContent: PropTypes.func.isRequired,
  mainContent: PropTypes.string.isRequired
};

export default Header