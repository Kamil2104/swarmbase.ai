import Icon from './components/Icon'
import MainText from './components/MainText'
import SecondaryText from './components/SecondaryText'
import Link from './components/Link'

import './styles/ContactOption.css'

const ContactOption = () => {
  return (
    <section className='contactOption'>
      <Icon />
      <section className='col'>
        <MainText />
        <SecondaryText />
        <Link />
      </section>
    </section>
  )
}

export default ContactOption