import { useState } from 'react';

import PropTypes from 'prop-types'

import Heading from './components/Heading'
import Input from './components/Input';
import Agreement from './components/Agreement';
import Button from './components/Button';

import { isFormCorectlyCompleted } from './validation/validateForm';

import './styles/Form.css';

const Form = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [agreement, setAgreement] = useState(false)

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("")
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("")
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const [agreementErrorMessage, setAgreementErrorMessage] = useState("")

  const handleFirstNameChange = (value) => {
    setFirstName(value);
    setFirstNameErrorMessage("");
  }

  const handleLastNameChange = (value) => {
    setLastName(value);
    setLastNameErrorMessage("");
  }

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailErrorMessage("");
  }

  const handleAgreementChange = (value) => {
    setAgreement(value);
    setAgreementErrorMessage("");
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isFormCorectlyCompleted(firstName, setFirstNameErrorMessage, lastName, setLastNameErrorMessage, email, setEmailErrorMessage, agreement, setAgreementErrorMessage)) {
      // TODO: Sending an email to the user
    }
  }
    return (
      <form>
        <Heading />
        <section className='userData'>
          <section className='row'>
            <Input label="First name" type="text" state={firstName} onChangeHandler={handleFirstNameChange} errorMessage={firstNameErrorMessage}/>
            <Input label="Second name" type="text" state={lastName} onChangeHandler={handleLastNameChange} errorMessage={lastNameErrorMessage}/>
          </section>
          <section className='row2'>
            <Input label="E-mail" type="email" state={email} onChangeHandler={handleEmailChange} errorMessage={emailErrorMessage}/>
          </section>
          <Agreement setMainContent={props.setMainContent} agreement={agreement} onChangeHandler={handleAgreementChange} errorMessage={agreementErrorMessage}/>
        </section>
        <Button handleSubmit={handleSubmit}/>
      </form>
    )
  }

  Form.propTypes = {
    setMainContent: PropTypes.func.isRequired
  }

  export default Form