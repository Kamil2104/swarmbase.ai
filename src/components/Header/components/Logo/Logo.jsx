import SwarmbaseLogo from './images/SwarmbaseLogo.png';

import './styles/Logo.css'

const Logo = () => {
  return (
    <figure>
        <img src={SwarmbaseLogo} alt="Swarmbase.ai logo" loading='lazy' />
    </figure>
  )
}

export default Logo