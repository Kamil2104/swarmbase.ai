import PropTypes from 'prop-types';

import { scrollToComponent } from '../../../../../functions/scrollToComponent.js';

import './styles/Option.css';

const Option = (props) => {
  return (
    <button onClick={() => scrollToComponent(props.componentId)}> {props.text} </button>
  )
}

Option.propTypes = {
  componentId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Option