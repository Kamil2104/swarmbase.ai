import PropTypes from 'prop-types';

import './styles/Option.css';

const Option = (props) => {
  return (
    <button className={props.className}> {props.text} </button>
  )
}

Option.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Option