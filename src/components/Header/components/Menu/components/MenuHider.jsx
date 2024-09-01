import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

import './styles/MenuHider.css'

const MenuHider = ({isMenuVisible, isVisible, hideMenu}) => {

  if (!isVisible) return null;

  return (
    <section className="hider" onClick={hideMenu}>
        <FontAwesomeIcon icon={isMenuVisible ? faAngleUp : faAngleDown} className='arrowIcon'/>
    </section>
  )
};

MenuHider.propTypes = {
    isMenuVisible: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    hideMenu: PropTypes.func.isRequired
}

export default MenuHider;
