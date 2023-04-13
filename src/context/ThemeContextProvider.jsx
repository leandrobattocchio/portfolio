import { createContext, useContext, useEffect, useState } from 'react'
import { darkModeScrollbar } from '../utils/'

export const ThemeContext = createContext('')
export const ThemeProvider = () => useContext(ThemeContext)
const localStorageTheme = localStorage.getItem('theme') || 'light'

function ThemeContextProvider ({ children }) {
    const [theme, setTheme] = useState(localStorageTheme)

    const changeTheme = () => {
        setTheme(prevState => {
            localStorage.setItem('theme', prevState === 'light' ? 'dark' : 'light')
            return prevState === 'light' ? 'dark' : 'light'
        })
    }

    useEffect(() => {
        darkModeScrollbar(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
