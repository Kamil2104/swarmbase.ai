import PropTypes from 'prop-types'

import SwarmbaseLogo from './images/SwarmbaseLogo.png';
import SwarmbaseMobileLogo from './images/SwarmbaseMobileLogo.png';

import './styles/Logo.css'

const Logo = ({ setMainContent, isMobile }) => {
  return (
    <figure>
        <img src={isMobile ? SwarmbaseMobileLogo : SwarmbaseLogo} alt="Swarmbase.ai logo" loading='lazy' onClick={() => setMainContent('Main')}/>
    </figure>
  )
}

Logo.propTypes = {
  setMainContent: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired
}

export default Logo