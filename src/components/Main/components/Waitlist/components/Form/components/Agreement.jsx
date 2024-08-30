import PropTypes from 'prop-types'

import ErrorLabel from './ErrorLabel';

import './styles/Agreement.css';

const Agreement = (props) => {
  return (
    <section className='agreement'>
      <section className='row'>
        <input type="checkbox" id='agreementAcceptation' value={props.agreement} onChange={() => props.onChangeHandler(!props.agreement)}/>
        <section className='text'>
          <label className='agreementAcceptation'> By signing up, you agree to </label>
          <p onClick={() => props.setMainContent('Privacy Policy & cookies')}> our privacy policy and cookies policy </p>
          <span> * </span>
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