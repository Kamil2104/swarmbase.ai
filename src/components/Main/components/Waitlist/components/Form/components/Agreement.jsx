import PropTypes from 'prop-types'

import './styles/Agreement.css';

const Agreement = ({setMainContent}) => {
  return (
    <section className='agreement'>
      <input type="checkbox" id='agreementAcceptation' />
      <label className='agreementAcceptation' onClick={() => setMainContent('Privacy Policy & cookies')}> By signing up, I agree to receive commercial information [...] </label>
    </section>
  )
}

Agreement.propTypes = {
  setMainContent: PropTypes.func.isRequired
}

export default Agreement