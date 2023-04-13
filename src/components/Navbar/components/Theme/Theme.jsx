import { MoonIcon, SunIcon } from '../../../Icons'
import { useStyles } from '@/hooks'

function Theme () {
    const { style, theme, changeTheme } = useStyles()

    return (
        <div className='theme-icon'>
            {
                theme === 'dark'
                    ? <SunIcon className='hover-up' onClick={changeTheme} color={style.PRIMARY_COLOR} />
                    : <MoonIcon className='hover-up' onClick={changeTheme} color={style.PRIMARY_COLOR} />
            }
        </div>
    )
}

export default Theme
