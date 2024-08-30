import PropTypes from 'prop-types'

import ErrorLabel from './ErrorLabel';

import './styles/Agreement.css';

const Agreement = (props) => {
  return (
    <section className='agreement'>
      <section className='row'>
        <input type="checkbox" id='agreementAcceptation' value={props.agreement} onChange={() => props.onChangeHandler(!props.agreement)}/>
        <label className='agreementAcceptation' onClick={() => props.setMainContent('Privacy Policy & cookies')}> By signing up, I agree to receive commercial information [...] </label> <span> * </span>
      </section>
      <section className='error'>
        <ErrorLabel message={props.errorMessage}/>
      </section>
    </section>
  )
}

Agreement.propTypes = {
  agreement: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  setMainContent: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
}

export default Agreement