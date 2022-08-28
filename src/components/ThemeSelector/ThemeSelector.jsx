import "./ThemeSelector.scss";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { useState } from "react";

export default function ThemeSelector() {
  const [dark, setDark] = useState(true);
  const handleClick = () => {
    const body = document.getElementById("body-root");
    body.classList.toggle("dark-true");
    setDark(!dark);
  };
  return (
    <div className="theme-selector" onClick={handleClick}>
      {dark ? (
        <>
          <RiMoonLine className="theme-icon theme-icon-moon" />
          <p className="theme-text">Dark</p>
        </>
      ) : (
        <>
          <RiSunLine className="theme-icon theme-icon-sun" />
          <p className="theme-text">Light</p>
        </>
      )}
    </div>
  );
}
