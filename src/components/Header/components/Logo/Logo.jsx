import PropTypes from 'prop-types'

import SwarmbaseLogo from './images/SwarmbaseLogo.png';

import './styles/Logo.css'

const Logo = ({ setMainContent }) => {
  return (
    <figure>
        <img src={SwarmbaseLogo} alt="Swarmbase.ai logo" loading='lazy' onClick={() => setMainContent('Main')}/>
    </figure>
  )
}

Logo.propTypes = {
  setMainContent: PropTypes.func.isRequired,
}

export default Logo