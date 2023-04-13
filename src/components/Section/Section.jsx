import './Section.css'

function Section ({ children, className, ...restOfProps }) {
    return (
        <section className={`${className || ''} section`} {...restOfProps}>
            {children}
        </section>
    )
}

export default Section
