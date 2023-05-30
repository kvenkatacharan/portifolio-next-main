import React from "react";

import Style from "./Portfolio.module.css";
import PortfolioBlock from "./PortfolioBlock";
import { info } from "../../utils/info";
const Portfolio: React.FC = () => {
  return (
    <div className={Style.portfolioContainer}>
      {info.portfolio.map((project, index) => (
        <div className={Style.portfolioWrapper} key={index}>
          <PortfolioBlock
            imageSrc={project.imageSrc}
            live={project.live}
            source={project.source}
            title={project.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
