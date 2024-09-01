import PropTypes from 'prop-types'

import './styles/Content.css'

const Content = ({ isMobile, RobotsInSuits }) => {
  return (
    <section className='content'>
      <p> Discover how our technology empowers you to create, control, and experiment with multi-agent swarms, transforming your ideas into reality. <br/> <br /> </p>
      {isMobile
          ? <section className='imageContainer'> <img src={RobotsInSuits} alt="Robots in suits" className='robotsInSuits' /> </section>
          : <> </>
      }
      <p> Our platform provides the tools and insights you need to revolutionize your industry and stay ahead of the competition. </p>
    </section>
  )
}

Content.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  RobotsInSuits: PropTypes.string.isRequired
}

export default Content