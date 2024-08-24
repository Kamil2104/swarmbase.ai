import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import Innovation from "./components/Innovation/Innovation"
import Team from "./components/Team/Team"
import Waitlist from './components/Waitlist/Waitlist'

import './styles/Main.css'

const Main = () => {
  return (
    <main>
        <Hero />
        <Features />
        <Innovation />
        <Team />
        <Waitlist />
    </main>
  )
}

export default Main