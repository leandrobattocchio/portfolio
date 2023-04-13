import { useStyles } from '@/hooks'
import './ArrowSeparator.css'

function ArrowSeparator ({ Arrow, className }) {
    const { style } = useStyles()

    return (
        <div className={`separator ${className}`}>
            <Arrow color={style.PRIMARY_COLOR} />
        </div>
    )
}

export default ArrowSeparator
