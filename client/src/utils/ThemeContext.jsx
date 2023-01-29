import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider ({children}) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggelTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
}

return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggelTheme}>
        {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
)