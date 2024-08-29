import PropTypes from 'prop-types'

import './styles/Statue.css';

const Statue = ({setMainContent}) => {
  return (
    <section className="statue">
        <p onClick={() => setMainContent("Privacy policy & cookies")}> Privacy policy & cookies </p>
    </section>
  )
}

Statue.propTypes = {
    setMainContent: PropTypes.func.isRequired
}

export default Statue