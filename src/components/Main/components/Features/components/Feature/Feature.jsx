import Icon from './components/Icon.jsx'
import SecondaryText from './components/SecondaryText.jsx'
import MainText from './components/MainText.jsx'

import PropTypes from 'prop-types';

import './styles/Feature.css';

const Feature = (props) => {
  return (
    <section className="feature">
        <Icon icon={props.icon} alt={props.alt}/>
        <SecondaryText content={props.secondaryText}/>
        <MainText content={props.mainText}/>
    </section>
  )
}

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired
};

export default Feature