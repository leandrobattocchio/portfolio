import { CssIcon, ExpressIcon, GitIcon, GqIcon, HtmlIcon, IconAnimated, JsIcon, NextIconB, NodeIcon, ReactIconB, TailwindIconB, TsIcon } from '..'
import { useRef, useState, useEffect } from 'react'
import './BackgroundAnimated.css'

export const BackgroundAnimated = ({ children, theme }) => {
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

    return (
        <div className="bg-animated" ref={background}>
            <IconAnimated width={widthBg} height={heightBg} waitTime={0} >
                <GitIcon color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={500} >
                <GqIcon color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={2000} >
                <NextIconB color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={1400} >
                <ExpressIcon color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={1000} >
                <JsIcon color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={700}>
                <ReactIconB color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={4000}>
                <TailwindIconB color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={2500}>
                <TsIcon color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={3000}>
                <NodeIcon color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={4500}>
                <HtmlIcon color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            <IconAnimated width={widthBg} height={heightBg} waitTime={2700}>
                <CssIcon color={theme === 'dark' ? 'white' : '#313131'} />
            </IconAnimated>
            {children}
        </div>
    )
}
