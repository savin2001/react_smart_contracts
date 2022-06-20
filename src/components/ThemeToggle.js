import React, { useState } from "react";
import useDarkMode from "./useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeToggle = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(colorTheme ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };
    return (
        <>
            <DarkModeSwitch
                checked={darkMode}
                onChange={toggleDarkMode}
                size={20}
            />
            
        </>
    );
};

export default ThemeToggle;
