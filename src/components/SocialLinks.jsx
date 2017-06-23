import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const SocialLinks = (props) => {
  const text = encodeURIComponent(props.messages.morse);
  const url = encodeURIComponent(`http://simoneduca.com/#/morse-translator/message/${props.params.message_id}`);
  return (
    <div className="share-buttons">
      <a
        className="social-link"
        href={`http://twitter.com/share?url=${url}&text=${text}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        TWEET IT
      </a>
      <a
        className="social-link"
        href={`http://twitter.com/share?url=${url}&text=${text}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        TWEET IT
      </a>
      <a
        className="social-link"
        href={`http://twitter.com/share?url=${url}&text=${text}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        TWEET IT
      </a>
    </div>
  );
};

SocialLinks.propTypes = propTypes;

SocialLinks.defaultProps = defaultProps;

export default SocialLinks;
