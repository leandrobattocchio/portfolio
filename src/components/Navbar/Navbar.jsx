import { Anchor } from '../'
import { Language, Theme } from './'
import { useStyles, useTranslation } from '@/hooks/'
import './Navbar.css'

function Navbar () {
    const { style, theme } = useStyles()
    const { translation } = useTranslation()

    return (
        <header className='navbar' style={{ backgroundColor: theme === 'light' ? '#ebedf1' : 'rgb(1, 1, 1)' }}>
            <div className='navbar-items'>
                <Anchor className='navbar-item' color={style.PRIMARY_COLOR} href='#greeting'>{translation.home}</Anchor>
                <Anchor className='navbar-item' color={style.PRIMARY_COLOR} href='#projects'>{translation.projects}</Anchor>
            </div>
            <div className='navbar-features'>
                <Theme />
                <Language />
            </div>
        </header>
    )
}

export default Navbar
