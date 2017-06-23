import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const SocialBanner = () => (
  <div className="social-banner">
    <div
      className="fb-like"
      data-href="http://simoneduca.com/morse-translator"
      data-layout="button_count"
      data-action="like"
      data-size="small"
      data-show-faces="false"
      data-share="false"
    />
    <a
      className="twitter-share-button"
      href="http://simoneduca.com/morse-translator"
    >
    Tweet</a>
    <div className="g-plusone" />
    <span className="pull-right">- .- .-.. -.- / .. -. / -.-. --- -.. .</span>
  </div>
)

SocialBanner.propTypes = propTypes;

SocialBanner.defaultProps = defaultProps;

export default SocialBanner;
