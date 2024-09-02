import { useState, useEffect } from "react";

import PropTypes from "prop-types";

import useIsMobile from "../../hooks/useIsMobile.js";

import Logo from './components/Logo/Logo.jsx';
import Menu from './components/Menu/Menu.jsx';
import MenuHider from "./components/Menu/components/MenuHider.jsx";

import './styles/Header.css';
import './styles/HeaderResponsiveness.css';

const Header = (props) => {
  const isMobile = useIsMobile()

  const [isVisible, setIsVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prevVisibility) => !prevVisibility);
  };

  useEffect(() => {
    setIsVisible(isMobile);
    setIsMenuVisible(!isMobile);
  }, [isMobile]);

  return (
    <>
      <header className='navbar'>
        <section className="headerContent">
          <Logo setMainContent={props.setMainContent} isMobile={isMobile}/>
          <Menu
            isMobile={isMobile}
            setIsMenuVisible={setIsMenuVisible}
            setMainContent={props.setMainContent}
            mainContent={props.mainContent}
            className={isMenuVisible ? 'open' : ''}
          />
        </section>
      </header>
      <MenuHider isMenuVisible={isMenuVisible} isVisible={isVisible} hideMenu={toggleMenuVisibility} />
    </>
  );
};

Header.propTypes = {
  setMainContent: PropTypes.func.isRequired,
  mainContent: PropTypes.string.isRequired
};

export default Header;
