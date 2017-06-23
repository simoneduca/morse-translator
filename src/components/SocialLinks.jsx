import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const SocialLinks = (props) => {
  const text = encodeURIComponent(props.messages.morse);
  const url = encodeURIComponent(`http://simoneduca.com/morse-translator/#/message/${props.params.message_id}`);
  return (
    <div>
      <a
        className="social-link"
        href={`http://twitter.com/intent/tweet?url=${url}&text=${text}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        TWEET IT
      </a>
      <a
        className="social-link"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        FACEBOOK IT
      </a>
      <a
        className="social-link"
        href={`https://plus.google.com/share?url=${url}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        G+ IT
      </a>
    </div>
  );
};

SocialLinks.propTypes = propTypes;

SocialLinks.defaultProps = defaultProps;

export default SocialLinks;
