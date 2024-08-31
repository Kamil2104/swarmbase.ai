import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

import './styles/MenuHider.css'

const MenuHider = ({isMenuVisible, setIsMenuVisible, hideMenu}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsVisible(window.innerWidth <= 450);
      setIsMenuVisible(window.innerWidth > 450);
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, [setIsMenuVisible]);

  if (!isVisible) return null;

  return (
    <section className="hider" onClick={hideMenu}>
        <FontAwesomeIcon icon={isMenuVisible ? faAngleUp : faAngleDown} />
    </section>
  )
};

MenuHider.propTypes = {
    isMenuVisible: PropTypes.bool.isRequired,
    setIsMenuVisible: PropTypes.func.isRequired,
    hideMenu: PropTypes.func.isRequired
}

export default MenuHider;
