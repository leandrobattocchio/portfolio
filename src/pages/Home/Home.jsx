import { Section, ArrowIcon, Loader } from '@/components'
import { ArrowSeparator, Greeting } from './components'
import { Suspense, lazy, useEffect } from 'react'
import { useNearScreen } from '@/hooks'
import ReactGA from 'react-ga'
import { GA_ID } from '@/consts'
import './Home.css'

const Projects = lazy(() => import('./components/Projects/Projects'))
ReactGA.initialize(GA_ID)

function Home () {
    const { isShow: isShowFirst, fromRef: firstRef } = useNearScreen({})

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <main className='home-page'>
            <Section>
                <Greeting />
                <ArrowSeparator Arrow={ArrowIcon} className='delay-large' />
            </Section>
            <Suspense fallback={<Loader />}>
                <Section id='projects'>
                    <div ref={firstRef} />
                    {isShowFirst ? <Projects /> : null}
                </Section>
            </Suspense >
        </main>

    )
}

export default Home
