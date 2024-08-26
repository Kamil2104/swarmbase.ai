import PropTypes from 'prop-types'

import './styles/Link.css';

const Link = (props) => {
  return (
    <>
      {props.text === "Mail us"
        ? <p className='link'> {props.text} </p>
        : <a href='https://www.linkedin.com/company/swarmbase-ai/' target='_blank'> {props.text} </a>
      }
    </>
  )
}

Link.propTypes = {
  text: PropTypes.string.isRequired
}

export default Link