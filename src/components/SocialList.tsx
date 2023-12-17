import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
export const SocialList: React.FC = () => {
  return (
    <div className="d-flex align-items-center p-2 gap-1 h-100">
      <a
        href="https://www.linkedin.com/in/oscarzhang228"
        target="_blank"
        rel="noreferrer"
      >
        <ImLinkedin className="social-icon" />
      </a>
      <a
        href="https://www.github.com/oscarzhang228"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="social-icon" />
      </a>

      <a href="mailto:oscarzhang228@gmail.com" target="_blank" rel="noreferrer">
        <MdOutlineMailOutline className="social-icon" />
      </a>
    </div>
  );
};
