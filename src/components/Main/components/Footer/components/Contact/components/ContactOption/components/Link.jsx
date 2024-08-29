import PropTypes from 'prop-types';

import { toast } from 'react-hot-toast';

import './styles/Link.css';

const Link = (props) => {
  const handleCopy = () => {
    if (!navigator.clipboard) {
      toast.error('Copying to clipboard is not supported in this browser.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }

    navigator.clipboard.writeText("contact@swarmbase.ai")
      .then(() => {
        toast.success('E-mail has been copied to the clipboard!', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .catch(() => {
        toast.error('Error copying e-mail.', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      });
  };

  return (
    <>
      {props.text === "Mail us"
        ? <p className='link' onClick={handleCopy}> {props.text} </p>
        : <a href='https://www.linkedin.com/company/swarmbase-ai/' target='_blank' rel='noopener noreferrer'> {props.text} </a>
      }
    </>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired
};

export default Link;
