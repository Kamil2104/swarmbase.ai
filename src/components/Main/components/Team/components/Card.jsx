import PropTypes from 'prop-types'

import Photo from './components/Photo'
import Name from './components/Name'
import LinkedIn from './components/LinkedIn'
import Occupation from './components/Occupation'

import './styles/Card.css'

const Card = (props) => {
  return (
    <section className='card'>
        <Photo photo={props.photo} name={props.name}/>
        <section className='row'>
          <Name name={props.name}/>
          {props.linkedin === "none"
            ? <></>
            : <LinkedIn linkedin={props.linkedin}/>
          }
        </section>
        <Occupation occupation={props.occupation}/>
    </section>
  )
}

Card.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired
}

export default Card