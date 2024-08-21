import PropTypes from 'prop-types';

import './styles/Icon.css';

const Icon = (props) => {
  return (
    <img src={props.icon} alt={props.alt}/>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Icon