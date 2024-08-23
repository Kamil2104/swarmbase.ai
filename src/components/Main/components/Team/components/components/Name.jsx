import PropTypes from 'prop-types'

import './style/Name.css';

const Name = (props) => {
  return (
    <section className='name'>
      <p> {props.name} </p>
    </section>
  )
}

Name.propTypes = {
  name: PropTypes.string.isRequired
}

export default Name