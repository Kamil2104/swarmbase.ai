import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import Innovation from "./components/Innovation/Innovation"
import Team from "./components/Team/Team"

import './styles/Main.css'

const Main = () => {
  return (
    <main>
        <Hero />
        <Features />
        <Innovation />
        <Team />
    </main>
  )
}

export default Main