import PropTypes from 'prop-types'

import Heading from './components/Heading'
import Subheading from './components/Subheading'
import Divider from './components/Divider'
import Content from './components/Content'

import Robot from '../ImageContent/images/Robot1.jpg'
import RobotsInSuits from '../ImageContent/images/Robot2.png'

import './styles/TextContent.css';

const TextContent = ({ isMobile }) => {
  return (
    <>
        <Heading />
        <Subheading />
        <Divider />
        {isMobile
          ? <section className='imageContainer'> <img src={Robot} alt="Robot" className='robot' /> </section>
          : <> </>
        }
        <Content isMobile={isMobile} RobotsInSuits={RobotsInSuits}/>
    </>
  )
}

TextContent.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

export default TextContent