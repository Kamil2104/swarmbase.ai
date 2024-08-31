import BackgroundImage from './components/BackgroundImage/BackgroundImage.jsx'
import ContentBlock from './components/ContentBlock/ContentBlock.jsx'

import './styles/Hero.css'
import './styles/HeroResponsiveness.css'

const Hero = () => {
  return (
    <section className='hero'>
        <BackgroundImage />
        <ContentBlock />
    </section>
  )
}

export default Hero