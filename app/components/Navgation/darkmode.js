import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update body class based on dark mode state
    document.body.classList.toggle("dark_theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`change_mode ${isDarkMode ? "dark" : "light"}`}>
      {isDarkMode ? (
        <span className="darkmode" onClick={toggleDarkMode}>
          <BsMoonFill />
        </span>
      ) : (
        <span className="lightmode" onClick={toggleDarkMode}>
          <BsFillSunFill />
        </span>
      )}
    </div>
  );
};

export default Darkmode;
