import Feature from './components/Feature/Feature.jsx'
import Information from './components/Information/Information.jsx'

import Icon1 from './icons/Icon1.jpg'
import Icon2 from './icons/Icon2.jpg'
import Icon3 from './icons/Icon3.jpg'

import './styles/Features.css';

const Features = () => {
  return (
    <section className="features" id='features'>
      <h1> Features </h1>
      <section className='featuresContainer'>
        <Feature icon={Icon1} alt="Icon of robotic arm" secondaryText="Create" mainText="Agents, Tools & More" />
        <Feature icon={Icon2} alt="Icon of multi-agents" secondaryText="Fully control" mainText="Swarms" />
        <Feature icon={Icon3} alt="Icon of " secondaryText="Experiment" mainText="On Everything" />
      </section>
      <section className='informationContainer'>
        <Information />
      </section>
    </section>
  )
}

export default Features