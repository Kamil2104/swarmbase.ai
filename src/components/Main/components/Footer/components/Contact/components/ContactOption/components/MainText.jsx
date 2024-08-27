import PropTypes from "prop-types";

import './styles/MainText.css';

const MainText = (props) => {
  return (
    <p className='mainText'> {props.text} </p>
  )
}

MainText.propTypes = {
  text: PropTypes.string.isRequired
}

export default MainText