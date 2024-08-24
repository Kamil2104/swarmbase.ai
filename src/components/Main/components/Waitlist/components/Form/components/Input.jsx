import PropTypes from 'prop-types'

import './styles/Input.css';

const Input = (props) => {
  return (
    <section className='inputGroup'>
      <label htmlFor={props.label} > {props.label} {props.label === "Second name" ? <> </> : <span> * </span> } </label>
      <input type={props.type} id={props.label}/>
    </section>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Input