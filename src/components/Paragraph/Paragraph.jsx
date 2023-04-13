function Paragraph ({ children, className, color, backgroundColor = 'transparent' }) {
    return (
        <p className={className} style={{ color, backgroundColor, padding: '0.5rem' }}>
            {children}
        </p>
    )
}

export default Paragraph
