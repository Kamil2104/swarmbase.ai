import PropTypes from 'prop-types';

import './styles/SecondaryText.css';

const SecondaryText = (props) => {
  return (
    <>
      <h3> {props.content} </h3>
    </>
  )
}

SecondaryText.propTypes = {
  content: PropTypes.string.isRequired
}

export default SecondaryText