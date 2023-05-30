import React from "react";
import Image, { StaticImageData } from "next/image";
import Style from "./Portfolio.module.css";
import IconLink from "./IconLink";
import { FaCode, FaSafari } from "react-icons/fa";
interface IPortfolioBlockProps {
  imageSrc: StaticImageData;
  live: string;
  source: string;
  title: string;
}
const PortfolioBlock: React.FC<IPortfolioBlockProps> = (props) => {
  const { imageSrc, live, source, title } = props;
  return (
    <div className={Style.mainContainer}>
      <div className={Style.projectImage}>
        <Image alt={title} src={imageSrc} />
      </div>

      <h1 className={Style.projectTitle}> {title}</h1>
      <div className={Style.projectContainer}>
        <div className={Style.liveDemo}>
          <IconLink link={live} title={"Live Demo"} Icon={FaSafari} />
        </div>
        <div className={Style.liveDemo}>
          <IconLink link={source} title={"Source Code"} Icon={FaCode} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBlock;
