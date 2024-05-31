import React from "react";
import { useTheme } from './ThemeContext';

export default function FunctionContextComponentt() {
    
    const themeStyle = useTheme();

    return(
        <>
            <div style={themeStyle}>{themeStyle.backgroundColor}</div>
        </>
    )
};
