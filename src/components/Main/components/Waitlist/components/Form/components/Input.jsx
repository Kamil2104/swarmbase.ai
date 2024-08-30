import PropTypes from 'prop-types'

import ErrorLabel from './ErrorLabel';

import './styles/Input.css';

const Input = (props) => {
  return (
    <section className='inputGroup'>
      <label htmlFor={props.label} > {props.label} {props.label === "Second name" ? <> </> : <span> * </span> } </label>
      <input
        type={props.type}
        id={props.label}
        value={props.state}
        onChange={(e) => props.onChangeHandler(e.target.value)}
      />
      <ErrorLabel message={props.errorMessage}/>
    </section>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
}

export default Input