import PropTypes from 'prop-types';

import './styles/MainText.css';

const MainText = (props) => {
  return (
    <>
      <h2> {props.content} </h2>
    </>
  )
}

MainText.propTypes = {
  content: PropTypes.string.isRequired
}

export default MainText