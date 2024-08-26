import Icon from './components/Icon'
import MainText from './components/MainText'
import SecondaryText from './components/SecondaryText'
import Link from './components/Link'

import PropTypes from 'prop-types'

import './styles/ContactOption.css'

const ContactOption = (props) => {
  return (
    <section className='contactOption'>
      <section className='icon'>
        <Icon src={props.iconSrc} alt={props.iconAlt}/>
      </section>
      <section className='col'>
        <MainText text={props.mainText}/>
        <SecondaryText text={props.secondaryText}/>
        <Link text={props.linkText}/>
      </section>
    </section>
  )
}

ContactOption.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}

export default ContactOption