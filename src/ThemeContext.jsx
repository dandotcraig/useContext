import React, { useContext , useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdate = React.createContext()
// const darkTheme = useTheme()



// export function themeData() {
//     return useContext(themeStyle)
// };

export function useTheme() {
    return useContext(ThemeContext)
};

export function useThemeUpdate() {
    return useContext(ThemeUpdate)
};

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)

    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={themeStyle}>
            <ThemeUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )

};
