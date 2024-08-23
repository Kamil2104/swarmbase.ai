import PropTypes from 'prop-types'

import './style/Occupation.css';

const Occupation = (props) => {
  return (
    <section className='occupation'>
      <p> {props.occupation} </p>
    </section>
  )
}

Occupation.propTypes = {
  occupation: PropTypes.string.isRequired
}

export default Occupation