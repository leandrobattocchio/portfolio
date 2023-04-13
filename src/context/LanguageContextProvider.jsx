import { createContext, useContext, useState } from 'react'
import { LANGUAGES } from '@/consts'

export const LanguageContext = createContext('')
export const LanguageProvider = () => useContext(LanguageContext)

function LanguageContextProvider ({ children }) {
    const [language, setLanguage] = useState(LANGUAGES.ES)

    const changeLanguage = (language) => {
        setLanguage(language)
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider
