import PropTypes from 'prop-types'

import './styles/ErrorLabel.css';

const ErrorLabel = ({ message }) => {
    if (!message) return null;
    return (
      <p className="error-message">{message}</p>
    );
  }

  ErrorLabel.propTypes = {
    message: PropTypes.string
  };

  export default ErrorLabel;