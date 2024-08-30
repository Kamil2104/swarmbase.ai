import PropTypes from 'prop-types'

import './styles/ErrorLabel.css';

const ErrorLabel = ({ message }) => {
    if (!message) return null;

    return (
      <section className='errorLabel' data-error={message}></section>
    );
}

ErrorLabel.propTypes = {
    message: PropTypes.string
};

export default ErrorLabel;