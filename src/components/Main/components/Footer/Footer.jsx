import PropTypes from 'prop-types'

import Contact from './components/Contact/Contact'
import Statue from './components/Statue/Statue'

import './styles/Footer.css'

const Footer = (props) => {
  return (
    <footer>
      <Contact />
      <Statue setMainContent={props.setMainContent}/>
    </footer>
  )
}

Footer.propTypes = {
  setMainContent: PropTypes.func.isRequired
}

export default Footer