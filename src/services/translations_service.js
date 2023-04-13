import { translations } from '../translations'

export const getTranslations = (language) => {
    return translations[language]
}
