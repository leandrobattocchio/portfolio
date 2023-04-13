import './Button.css'

function Button ({ onClick, children, className, color, backgroundColor, borderColor }) {
    return <button onClick={onClick} className={`${className} button`} style={{ color, backgroundColor, borderColor }}>{children}</button>
}

export default Button
