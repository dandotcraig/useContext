import React from "react";
import { useTheme } from './ThemeContext';
// import { useTheme } from './ThemeContext';
// import { themeData } from "./ThemeContext";

export default function FunctionContextComponentt() {
    
    const themeStyle = useTheme();
    // const themeStyle = {
    //     backgroundColor: darkTheme ? '#333' : '#CCC',
    //     color: darkTheme ? '#CCC' : '#333',
    //     padding: '2rem',
    //     margin: '2rem'
    // }

    return(
        <>
            <div style={themeStyle}>Function Theme</div>
        </>
    )
};
