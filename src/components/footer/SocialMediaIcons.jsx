import React from "react";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook, ImLinkedin2, ImYoutube, ImTwitter } from "react-icons/im";

const SocialMediaIcons = () => {
  return (
    <div className="sm-icons-wrapper">
      <a
        href="https://www.facebook.com/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <ImFacebook className="sm-icon" />
      </a>
      <a
        href="https://www.linkedin.com/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <ImLinkedin2 className="sm-icon" />
      </a>
      <a href="https://twitter.com/" rel="noreferrer noopener" target="_blank">
        <ImTwitter className="sm-icon" />
      </a>
      <a
        href="https://www.youtube.com/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <ImYoutube className="sm-icon" />
      </a>
      <a
        href="https://www.instagram.com/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <FiInstagram className="sm-icon" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
