import Photo from './components/Photo'
import Name from './components/Name'
import LinkedIn from './components/LinkedIn'
import Occupation from './components/Occupation'

import './styles/Card.css'

const Card = () => {
  return (
    <section className='card'>
        <Photo />
        <Name />
        <LinkedIn />
        <Occupation />
    </section>
  )
}

export default Card