function Anchor ({ children, color, className, href, target, rel, borderColor, backgroundColor }) {
    return <a style={{ color, borderColor, backgroundColor }} href={href} target={target} rel={rel} className={className}>{children}</a>
}

export default Anchor
