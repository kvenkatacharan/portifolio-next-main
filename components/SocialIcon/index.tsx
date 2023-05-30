import React from "react";

interface ISocialIconProps {
  link: string;
  Icon: React.ElementType;
  label: string;
}
const SocialIcon: React.FC<ISocialIconProps> = ({ link, Icon, label }) => {
  return (
    <a
      target="_blank"
      className="text-4xl mx-2"
      aria-label={label}
      rel="noopener noreferrer"
      href={link}
    >
      <Icon />
    </a>
  );
};

export default SocialIcon;
