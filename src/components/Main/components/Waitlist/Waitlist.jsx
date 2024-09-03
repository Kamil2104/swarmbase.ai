import PropTypes from 'prop-types'

import TextContent from './components/TextContent/TextContent';
import Form from './components/Form/Form';

import './styles/Waitlist.css';
import './styles/WaitlistResponsiveness.css';

const Waitlist = (props) => {
  return (
    <section className="waitlist" id='waitlist'>
        <TextContent />
        <Form setMainContent={props.setMainContent}/>
    </section>
  )
}

Waitlist.propTypes = {
  setMainContent: PropTypes.func.isRequired
}

export default Waitlist