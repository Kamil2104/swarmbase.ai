import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

import './styles/Button.css';

const Button = () => {
  return (
    <button> <FontAwesomeIcon icon={faSignIn} className='signInIcon'/> REGISTER NOW </button>
  )
}

export default Button