import { useContext } from "react";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const theme = useContext(themeContext);
  const language = useContext(languageContext);

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={() => theme.setTheme(theme.theme == "light" ? "dark" : "light")} >dark theme</button>
        <span>
          {/* Show active language here */}
          {language.language}
        </span>
      </div>
    </div>
  );
};
