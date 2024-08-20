import BackgroundImage from './components/BackgroundImage'
import Content from './components/Content'

import '../../assets/styles/Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
        <BackgroundImage />
        <Content />
    </section>
  )
}

export default Hero