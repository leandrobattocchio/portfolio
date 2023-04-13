function ThirdTitle ({ children, className, color, backgroundColor }) {
    return <h3 className={className} style={{ color, backgroundColor, textAlign: 'center', margin: '1rem 0rem' }}>{children}</h3>
}

export default ThirdTitle
