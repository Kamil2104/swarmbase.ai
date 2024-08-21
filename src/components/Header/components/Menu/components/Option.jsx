import PropTypes from 'prop-types';

import './styles/Option.css';

const Option = (props) => {
  return (
    <button> <span> {props.text} </span> </button>
  )
}

Option.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Option