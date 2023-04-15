import { useStyles } from '@/hooks'
import './Loader.css'

function Loader () {
    const { style } = useStyles()

    return (
        <div style={{ width: '100%', minHeight: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg className='loader-container' viewBox="25 25 50 50">
                <circle className='loader' stroke={style.PRIMARY_COLOR} r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    )
}

export default Loader
