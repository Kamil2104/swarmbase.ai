export function isFormCorectlyCompleted(firstName, setFirstNameErrorMessage, lastName, setLastNameErrorMessage, email, setEmailErrorMessage, agreement, setAgreementError)
{
  validateFirstName(firstName, setFirstNameErrorMessage)
  validateLastName(lastName, setLastNameErrorMessage)
  validateEmail(email, setEmailErrorMessage)
  validateAgreement(agreement, setAgreementError)

  if (validateFirstName(firstName, setFirstNameErrorMessage) && validateLastName(lastName, setLastNameErrorMessage) && validateEmail(email, setEmailErrorMessage) && validateAgreement(agreement, setAgreementError))
  {
    return true;
  } else
  {
    return false
  }
}

function validateFirstName(firstName, setFirstNameErrorMessage)
{
  if (firstName != "")
  {
    if (/^[a-zA-Z]{1,}$/.test(firstName))
    {
      return true;
    } else
    {
      setFirstNameErrorMessage("Invalid first name.")
      return false
    }
  } else
  {
    setFirstNameErrorMessage("First name is required.")
    return false
  }
}

function validateLastName(lastName, setLastNameErrorMessage)
{
  if (lastName != "")
  {
    if (/^[a-zA-Z]{1,}$/.test(lastName))
    {
      return true
    } else
    {
      setLastNameErrorMessage("Invalid last name.")
      return false
    }
  } else
  {
    return true
  }
}

function validateEmail(email, setEmailErrorMessage)
{
  if (email != "")
  {
    if (/^[a-z0-9]+(?:\.[a-z0-9]+)*@[a-z0-9]{2,}\.[a-z]{2,}$/.test(email))
    {
      return true
    } else
    {
      setEmailErrorMessage("Invalid e-mail.")
      return false
    }
  } else
  {
    setEmailErrorMessage("Email is required.")
    return false
  }
}

function validateAgreement(agreement, setAgreementErrorMessage)
{
  if (agreement == false)
  {
    setAgreementErrorMessage("Agreement is required.")
    return false
  } else
  {
    return true
  }
}