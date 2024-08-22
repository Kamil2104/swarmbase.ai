import PropTypes from 'prop-types';

import './styles/Image.css'

const Image = (props) => {
  return (
    <section className='image'>
        <section className='icon'></section>
        <section className={props.row} />
        <img src={props.src} alt={props.alt} />
    </section>
  )
}

Image.propTypes = {
    row: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Image