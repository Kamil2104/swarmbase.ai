import BackgroundImage from './components/BackgroundImage.jsx'
import Content from './components/Content/Content.jsx'

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