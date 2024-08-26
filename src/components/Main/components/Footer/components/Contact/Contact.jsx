import Heading from './components/Heading/Heading'
import ContactOption from './components/ContactOption/ContactOption'

import EnvelopeIcon from './images/EnvelopeIcon.png'
import LinkedInIcon from './images/LinkedInIcon.png'

import './styles/Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
        <Heading />
        <section className='options'>
          <ContactOption iconSrc={EnvelopeIcon} iconAlt="Envelope icon" mainText="Send us an e-mail" secondaryText="We'd love to hear from you!" linkText="Mail us" />
          <ContactOption iconSrc={LinkedInIcon} iconAlt="LinkedIn icon" mainText="Follow us on LinkedIn" secondaryText="Stay up to date with us!" linkText="Follow us" />
        </section>
    </section>
  )
}

export default Contact