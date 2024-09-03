import PropTypes from 'prop-types'

import ErrorLabel from './ErrorLabel';

import './styles/Agreement.css';

const Agreement = (props) => {
  return (
    <section className='agreement'>
      <section className='row'>
        <input type="checkbox" id='agreementAcceptation' value={props.agreement} onChange={() => props.onChangeHandler(!props.agreement)}/>
        <section className='text'>
          <label className='agreementAcceptation' htmlFor='agreementAcceptation'> By signing up, you agree to <span onClick={() => props.setMainContent('Privacy Policy & cookies')} className='spanAgreement'> our privacy policy and cookies policy <span className='star'> * </span> </span> </label>
        </section>
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