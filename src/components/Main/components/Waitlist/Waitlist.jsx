import TextContent from './components/TextContent/TextContent';
import Form from './components/Form/Form';

import './styles/Waitlist.css';

const Waitlist = () => {
  return (
    <section className="waitlist" id='waitlist'>
        <TextContent />
        <Form />
    </section>
  )
}

export default Waitlist