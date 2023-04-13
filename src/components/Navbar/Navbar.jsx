import { Anchor } from '../'
import { Language, Theme } from './'
import { useStyles, useTranslation } from '@/hooks/'
import './Navbar.css'

function Navbar () {
    const { style } = useStyles()
    const { translation } = useTranslation()

    return (
        <header className='navbar'>
            <div className='navbar-items'>
                <Anchor className='navbar-item' color={style.PRIMARY_COLOR} href='#experience'>{translation.experience}</Anchor>
                <Anchor className='navbar-item' color={style.PRIMARY_COLOR} href='#education'>{translation.education}</Anchor>
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
