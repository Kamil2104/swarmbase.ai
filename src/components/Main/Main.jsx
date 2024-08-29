import PropTypes from 'prop-types'

import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import Innovation from "./components/Innovation/Innovation"
import Team from "./components/Team/Team"
import Waitlist from './components/Waitlist/Waitlist'
import Footer from './components/Footer/Footer'

import './styles/Main.css'

const Main = (props) => {
  return (
    <main>
        <Hero />
        <Features />
        <Innovation />
        <Team />
        <Waitlist setMainContent={props.setMainContent}/>
        <Footer setMainContent={props.setMainContent}/>
    </main>
  )
}

Main.propTypes = {
  setMainContent: PropTypes.func.isRequired
}

export default Main