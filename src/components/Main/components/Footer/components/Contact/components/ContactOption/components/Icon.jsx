import PropTypes from 'prop-types'

import './styles/Icon.css';

const Icon = (props) => {
  return (
    <img src={props.src} alt={props.alt} />
  )
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Icon