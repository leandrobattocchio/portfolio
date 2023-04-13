import { ThemeProvider } from '../context/ThemeContextProvider'
import { STYLES_DARK, STYLES_LIGHT } from '@/styles/'

function useStyles () {
    const { theme, changeTheme } = ThemeProvider()
    const style = theme === 'light' ? STYLES_LIGHT : STYLES_DARK
    return { style, theme, changeTheme }
}

export default useStyles
