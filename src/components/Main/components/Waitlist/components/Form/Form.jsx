import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSignUp } from "@clerk/clerk-react";

import Heading from './components/Heading';
import Input from './components/Input';
import Agreement from './components/Agreement';
import Button from './components/Button';
import { isFormCorectlyCompleted } from './validation/validateForm';

import './styles/Form.css';

const Form = (props) => {
  const { signUp, isLoaded } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agreement, setAgreement] = useState(false);

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [agreementErrorMessage, setAgreementErrorMessage] = useState("");

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);
  const [expired, setExpired] = useState(false);

  const handleFirstNameChange = (value) => {
    setFirstName(value);
    setFirstNameErrorMessage("");
  };

  const handleLastNameChange = (value) => {
    setLastName(value);
    setLastNameErrorMessage("");
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailErrorMessage("");
  };

  const handleAgreementChange = (value) => {
    setAgreement(value);
    setAgreementErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormCorectlyCompleted(firstName, setFirstNameErrorMessage, lastName, setLastNameErrorMessage, email, setEmailErrorMessage, agreement, setAgreementErrorMessage)) {
      if (!isLoaded) return;

      try {
        // Initiate the signup process with Clerk
        await signUp.create({ emailAddress: email });


        // Start the email link flow
        const { startEmailLinkFlow } = signUp.createEmailLinkFlow();

        const su = await startEmailLinkFlow({
          redirectUrl: "https://localhost:5173/verification",
        });

        console.log(su);

        const verification = su.verifications.emailAddress;


        if (verification.verifiedFromTheSameClient()) {
          setVerified(true);
          setStatus("Email verified successfully!");
        } else if (verification.status === "expired") {
          setExpired(true);
          setStatus("Verification link expired. Please try again.");
        } else {
          setStatus("A verification link has been sent to your email. Please check your inbox.");
          console.log("Current status:", status);
        }
      } catch (err) {
        setError("Error: " + err.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

      {status && <p>{status}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {verified && <p style={{ color: "green" }}>Email verified successfully!</p>}
      {expired && <p style={{ color: "orange" }}>Verification link expired. Please try again.</p>}
    </form>
  );
};

Form.propTypes = {
  setMainContent: PropTypes.func.isRequired
};

export default Form;
