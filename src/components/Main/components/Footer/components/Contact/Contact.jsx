import Heading from './components/Heading/Heading'
import ContactOption from './ContactOption/ContactOption'

import './styles/Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
        <Heading />
        <ContactOption />
        <ContactOption />
    </section>
  )
}

export default Contact