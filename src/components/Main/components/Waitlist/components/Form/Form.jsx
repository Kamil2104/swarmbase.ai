import Heading from './components/Heading'
import Input from './components/Input';
import Agreement from './components/Agreement';
import Button from './components/Button';

import './styles/Form.css';

const Form = () => {
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
          <Agreement />
        </section>
        <Button />
      </form>
    )
  }

  export default Form