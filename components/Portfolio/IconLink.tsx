import React from "react";
import Style from "./Portfolio.module.css";
interface IIconLinkProps {
  link: string;
  title: string;
  Icon: React.ElementType;
}
const IconLink: React.FC<IIconLinkProps> = (props) => {
  const { link, title, Icon } = props;
  return (
    <a
      href={link}
      className={Style.iconLink}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <Icon /> {title}
    </a>
  );
};

export default IconLink;
