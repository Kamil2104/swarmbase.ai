import PropTypes from 'prop-types'

import './style/Photo.css';

const Photo = (props) => {
  return (
    <section className='photo'>
      <img src={props.photo} alt={`Photo of ${props.name}`} loading='lazy'/>
    </section>
  )
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Photo