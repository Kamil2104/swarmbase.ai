import PropTypes from 'prop-types';

import './styles/Image.css'

const Image = (props) => {
  return (
    <section className='image'>
        <section className='iconBg'>
          <img src={props.iconSrc} alt={props.iconAlt} className={props.iconClassname} loading='lazy'/>
        </section>
        <section className={props.row} />
        <img src={props.imageSrc} alt={props.imageAlt} className={props.imageClassname} loading='lazy'/>
    </section>
  )
}

Image.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    iconClassname: PropTypes.string.isRequired,
    row: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageClassname: PropTypes.string.isRequired
}

export default Image