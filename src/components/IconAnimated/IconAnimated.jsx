import { useEffect, useState } from 'react'
import './IconAnimated.css'

export const IconAnimated = ({ waitTime = 0, width, height, children }) => {
    const getRandomPosition = (width, height) => {
        const x = Math.floor(Math.random() * (width - 84))
        const y = Math.floor(Math.random() * (height - 84))

        return { x, y }
    }

    const [position, setPosition] = useState(getRandomPosition(width, height))
    const [animation, setAnimation] = useState('')

    useEffect(() => {
        setAnimation('')
        setPosition(getRandomPosition(width, height))
        const time = waitTime || Math.floor(Math.random() * 10000)
        setTimeout(() => {
            setAnimation('animation-icon')
        }, time)
    }, [width, height])

    const animationEnd = () => {
        setPosition(getRandomPosition(width, height))
    }

    return (
        <div key={`icon-${width}-${height}`} className={'icon-bg ' + animation} style={{ top: position.y, left: position.x }} onAnimationIteration={animationEnd}>
            {children}
        </div>
    )
}
