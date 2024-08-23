import PropTypes from 'prop-types'

import LinkedInIcon from './images/LinkedInIcon.png'

import './style/LinkedIn.css';

const LinkedIn = (props) => {
  return (
    <section className='linkedin'>
      <a href={props.linkedin} target="_blank">
          <img src={LinkedInIcon} alt="LinkedIn Icon" />
      </a>
    </section>
  )
}

LinkedIn.propTypes = {
  linkedin: PropTypes.string.isRequired
}

export default LinkedIn