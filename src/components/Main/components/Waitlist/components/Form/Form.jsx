import PropTypes from 'prop-types'

import Heading from './components/Heading'
import Input from './components/Input';
import Agreement from './components/Agreement';
import Button from './components/Button';

import './styles/Form.css';

const Form = (props) => {
    return (
      <form>
        <Heading />
        <section className='userData'>
          <section className='row'>
            <Input label="First name" type="text" />
            <Input label="Second name" type="text" />
          </section>
          <section className='row2'>
            <Input label="E-mail" type="email" />
          </section>
          <Agreement setMainContent={props.setMainContent}/>
        </section>
        <Button />
      </form>
    )
  }

  Form.propTypes = {
    setMainContent: PropTypes.func.isRequired
  }

  export default Form