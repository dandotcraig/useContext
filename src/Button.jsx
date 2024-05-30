import React from "react";
import { useThemeUpdate } from "./ThemeContext";

export default function Button() {
    
    const toggleTheme = useThemeUpdate()
    return(
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
};
