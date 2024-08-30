import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

import './styles/Button.css';

const Button = ({handleSubmit}) => {
  return (
    <button onClick={handleSubmit}> <FontAwesomeIcon icon={faSignIn} className='signInIcon'/> REGISTER NOW </button>
  )
}

Button.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Button