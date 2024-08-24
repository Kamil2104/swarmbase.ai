import Heading from './components/Heading'
import Input from './components/Input';
import Agreement from './components/Agreement';
import Button from './components/Button';

import './styles/Form.css';

const Form = () => {
    return (
      <form>
        <Heading />
        <Input />
        <Input />
        <Agreement />
        <Button />
      </form>
    )
  }

  export default Form