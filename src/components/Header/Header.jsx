import { useState } from "react";

import PropTypes from "prop-types";

import Logo from './components/Logo/Logo.jsx';
import Menu from './components/Menu/Menu.jsx';
import MenuHider from "./components/Menu/components/MenuHider.jsx";

import './styles/Header.css';
import './styles/HeaderResponsiveness.css';

const Header = (props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <>
      <header className='navbar'>
        <section className="headerContent">
          <Logo setMainContent={props.setMainContent} />
          <Menu
            setMainContent={props.setMainContent}
            mainContent={props.mainContent}
            className={isMenuVisible ? 'open' : ''}
          />
        </section>
      </header>
      <MenuHider isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} hideMenu={toggleMenuVisibility} />
    </>
  );
};

Header.propTypes = {
  setMainContent: PropTypes.func.isRequired,
  mainContent: PropTypes.string.isRequired
};

export default Header;
