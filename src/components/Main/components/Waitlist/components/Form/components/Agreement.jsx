import './styles/Agreement.css';

const Agreement = () => {
  return (
    <section className='agreement'>
      <input type="checkbox" id='agreementAcceptation' />
      <label className='agreementAcceptation'> By signing up, I agree to receive commercial information [...] </label>
    </section>
  )
}

export default Agreement