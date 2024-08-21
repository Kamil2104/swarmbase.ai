import PropTypes from 'prop-types';

import './styles/Option.css';

const Option = (props) => {
  return (
    <button className={props.className}> <span> {props.text} </span> </button>
  )
}

Option.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Option