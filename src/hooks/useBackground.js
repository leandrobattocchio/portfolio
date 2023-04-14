import { useEffect, useRef, useState } from 'react'

function useBackground () {
    const [widthBg, setWidth] = useState(0)
    const [heightBg, setHeight] = useState(0)
    const background = useRef(null)

    useEffect(() => {
        if (background.current !== null) {
            const { width, height } = background.current.getBoundingClientRect()
            setWidth(width)
            setHeight(height)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (background.current !== null) {
                const { width, height } = background.current.getBoundingClientRect()
                setWidth(width)
                setHeight(height)
            }
        })
    }, [])

    return { widthBg, heightBg, background }
}

export default useBackground
