import Heading from './components/Heading';
import Card from './components/Card';

import Eric from './images/EricPanter.jpeg'
import Greg from './images/GregBorkowski.png'
import Joseph from './images/JosephTran.jpeg'

import './styles/Team.css';

const Team = () => {
  return (
    <section className='team'>
        <Heading />
        <section className='cards'>
          <Card photo={Eric} name="Eric Panter" linkedin="https://www.linkedin.com/in/%F0%9F%A6%BE-eryk-panter-913038140/" occupation="Founder & AI Architect" />
          <Card photo={Greg} name="Greg Borkowski" linkedin="https://www.linkedin.com/in/gregai/" occupation="Business & Project Manager" />
          <Card photo={Joseph} name="PhD. Joseph Tran" linkedin="https://www.linkedin.com/in/jozef-tran/" occupation="AI Developer" />
        </section>
    </section>
  )
}

export default Team