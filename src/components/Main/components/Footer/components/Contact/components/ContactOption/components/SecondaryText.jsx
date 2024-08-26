import PropTypes from 'prop-types'

import './styles/SecondaryText.css';

const SecondaryText = (props) => {
  return (
    <p className='secondaryText'> {props.text} </p>
  )
}

SecondaryText.propTypes = {
  text: PropTypes.string.isRequired
}

export default SecondaryText