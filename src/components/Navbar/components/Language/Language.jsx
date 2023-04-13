import { LANGUAGES } from '@/consts/'
import { useStyles } from '@/hooks/'
import { LanguageProvider } from '@/context/LanguageContextProvider'
import { Button } from '@/components'
import './Language.css'

function Language () {
    const { language, changeLanguage } = LanguageProvider()
    const { style } = useStyles()

    return (
        <div className='translation-button'>
            <Button color={style.PRIMARY_COLOR} backgroundColor={style.TEXT_COLOR} className={`${language !== LANGUAGES.ES ? 'display-none' : ''} hover-up`} onClick={() => changeLanguage(LANGUAGES.EN)}>ES</Button>
            <Button color={style.PRIMARY_COLOR} backgroundColor={style.TEXT_COLOR} className={`${language !== LANGUAGES.EN ? 'display-none' : ''} hover-up`} onClick={() => changeLanguage(LANGUAGES.ES)}>EN</Button>
        </div>
    )
}

export default Language
