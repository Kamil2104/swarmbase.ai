import { useState } from 'react';
import PropTypes from 'prop-types';

import Heading from './components/Heading';
import Input from './components/Input';
import Agreement from './components/Agreement';
import Button from './components/Button';
import { isFormCorectlyCompleted } from './validation/validateForm';

import './styles/Form.css';

import { useSignUp } from "@clerk/clerk-react";


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
    setStatus(null);
    setError(null);
    setExpired(false)
    setVerified(false)

    if (isFormCorectlyCompleted(firstName, setFirstNameErrorMessage, lastName, setLastNameErrorMessage, email, setEmailErrorMessage, agreement, setAgreementErrorMessage)) {
      if (!isLoaded) return;

      try {
        // Initiate the signup process with Clerk
        await signUp.create({ emailAddress: email });

        setStatus("A verification link has been sent to your email. Please check your inbox.");

        // Start the email link flow
        const { startEmailLinkFlow } = signUp.createEmailLinkFlow();
        const su = await startEmailLinkFlow({
          redirectUrl: "http://localhost:5173/verified",
        });

        const verification = su.verifications.emailAddress;

        if (verification.verifiedFromTheSameClient()) {
          setVerified(true);
          setStatus("Email verified successfully!");
        } else if (verification.status === "expired") {
          setExpired(true);
          setStatus("Verification link expired. Please try again.");
        }
      } catch (err)
      {
        let errorMessage = err.errors?.[0]?.longMessage || err.errors?.[0]?.message || "An unknown error occurred";

        if (errorMessage === "You're currently in single session mode. You can only be signed into one account at a time.")
        {
          errorMessage = "This email has already been added to the waitlist";
        }

        setError("Error: " + errorMessage);
      }
    }
  };

  const getStatusColor = () =>
  {
    if (error) return "red";
    if (verified) return "green";
    if (expired) return "orange";
    return "white";
  }

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

      {(status || error) && (
        <div className="status-container">
          <p style={{ color: getStatusColor() }}>
            {status ? status : error}
          </p>
        </div>
      )}
    </form>
  );
};

Form.propTypes = {
  setMainContent: PropTypes.func.isRequired
};

export default Form;
