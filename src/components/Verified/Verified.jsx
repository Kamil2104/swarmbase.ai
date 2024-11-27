import { useEffect } from 'react';
import './styles/Verified.css';
import SuccessIcon from './images/success-icon.svg';
import ExpiredIcon from './images/expired-icon.svg';
import { useSearchParams } from 'react-router-dom';

const Verified = () => {
  const [searchParams] = useSearchParams();
  const isExpired = searchParams.get('__clerk_status') === 'expired';

  const statusColor = isExpired ? "red" : "green";

  useEffect(() =>
    {
      const timer = setTimeout(() =>
      {
        window.location.href = "https://www.swarmbase.ai/";
      }, 10000);

      return () => clearTimeout(timer);
    }, [])

  return (
    <div className="verified-container">
      <div style={{ color: statusColor }} className="verified-content">
        {isExpired ? (
          <>
            <h1>Registration failed!</h1>
            <p>The link has expired. Please try to register again.</p>
            <p>You will be redirected in 10 seconds...</p>
            <img
              src={ExpiredIcon}
              alt="Expired"
              className="status-image"
            />
          </>
        ) : (
          <>
            <h1>Thanks for registering!</h1>
            <p>You can return to the original tab to continue.</p>
            <p>You will be redirected in 10 seconds...</p>
            <img
              src={SuccessIcon}
              alt="Checkmark"
              className="status-image"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Verified;