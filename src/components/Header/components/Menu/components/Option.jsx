import PropTypes from 'prop-types';

import './styles/Option.css';

const Option = ({handleScrollToComponent, componentId, text}) => {
  return (
    <button onClick={() => handleScrollToComponent(componentId)}> {text} </button>
  )
}

Option.propTypes = {
  handleScrollToComponent: PropTypes.func.isRequired,
  componentId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Option