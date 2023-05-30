import React from "react";

import styles from "Toggler.module.css";
interface ITogglerProps {
  darkMode: boolean;
  handleClick: () => void;
}
const Toggler: React.FC<ITogglerProps> = ({ darkMode, handleClick }) => {
  return (
    <div className="text-2xl">
      {darkMode ? (
        <span onClick={handleClick} aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span onClick={handleClick} aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </div>
  );
};

export default Toggler;
