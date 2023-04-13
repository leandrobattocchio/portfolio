import { LanguageProvider } from '../context/LanguageContextProvider'
import { getTranslations } from '../services/'

function useTranslation () {
    const { language } = LanguageProvider()
    const translation = getTranslations(language)

    return { translation }
}

export default useTranslation
