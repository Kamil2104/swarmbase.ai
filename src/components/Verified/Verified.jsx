import './styles/Verified.css';

import SuccessIcon from './images/success-icon.png';

const Verified = () => {
  return (
    <div className="verified-container">
      <div className="verified-content">
        <h1>Thanks for registering!</h1>
        <p>You can return to the original tab to continue.</p>
        <img
          src={SuccessIcon}
          alt="Checkmark"
          className="verified-image"
        />
      </div>
    </div>
  );
};

export default Verified;
