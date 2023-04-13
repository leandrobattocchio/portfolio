import { BackgroundAnimated, Footer } from '..'
import { ThemeProvider } from '../../context/ThemeContextProvider'
import { Navbar } from '../Navbar'
import './Layout.css'

function Layout ({ children }) {
    const { theme } = ThemeProvider()

    return (
        <div className={`${theme}`}>
            <Navbar />
            <BackgroundAnimated theme={theme}>
                {children}
            </BackgroundAnimated>
            <Footer />
        </div>
    )
}

export default Layout
