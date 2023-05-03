import { Section, ArrowIcon, Loader } from '@/components'
import { ArrowSeparator, Greeting } from './components'
import { Suspense, lazy, useEffect } from 'react'
import { useNearScreen } from '@/hooks'
import ReactGA from 'react-ga'
import { GA_ID } from '@/consts'
import './Home.css'

const Projects = lazy(async () => await import('./components/Projects/Projects'))
ReactGA.initialize(GA_ID)

function Home () {
    const { isShow, fromRef } = useNearScreen({})

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <main className='home-page'>
            <Section id='#'>
                <Greeting />
                <ArrowSeparator Arrow={ArrowIcon} className='delay-large' />
            </Section>
            <Section id='projects'>
                <Suspense fallback={<Loader />}>
                    <div ref={fromRef} />
                    {isShow ? <Projects /> : null}
                </Suspense >
            </Section>
        </main>

    )
}

export default Home
