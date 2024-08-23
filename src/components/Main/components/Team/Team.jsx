import Heading from './components/Heading';
import Card from './components/Card';

import Eric from './images/EricPanter.jpeg'
import Greg from './images/GregBorkowski.png'
import Joseph from './images/JosephTran.jpeg'
import You from './images/You.png'

import './styles/Team.css';

const Team = () => {
  return (
    <section className='team'>
        <Heading />
        <section className='cards'>
          <section className='cardsRow'>
            <Card photo={Eric} name="Eric Panter" linkedin="https://www.linkedin.com/in/%F0%9F%A6%BE-eryk-panter-913038140/" occupation="AI Architect" />
            <Card photo={Greg} name="Greg Borkowski" linkedin="https://www.linkedin.com/in/gregai/" occupation="Business / Project Manager" />
          </section>
          <section className='cardsRow'>
            <Card photo={Joseph} name="Joseph Tran" linkedin="https://www.linkedin.com/in/jozef-tran/" occupation="AI Developer" />
            <Card photo={You} name="You" linkedin="none" occupation="We are actively looking for new people. If you are interested feel free to contact us to discuss the details!" />
          </section>
        </section>
    </section>
  )
}

export default Team