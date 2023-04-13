import { SecondTitle } from '@/components'
import { useStyles } from '@/hooks'
import './TitleSeparator.css'

function TitleSeparator ({ children }) {
    const { style } = useStyles()

    return (
        <div className="title-separator">
            <SecondTitle color={style.PRIMARY_COLOR}>{children}</SecondTitle>
            <div className='line-separator' style={{ borderColor: style.PRIMARY_COLOR }} />
        </div>
    )
}

export default TitleSeparator
