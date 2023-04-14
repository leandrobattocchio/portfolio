import { Section, ArrowIcon } from '@/components'
import { ArrowSeparator, Greeting } from './components'
import { Suspense, lazy } from 'react'
import { useNearScreen } from '@/hooks'
import './Home.css'

const Projects = lazy(() => import('./components/Projects/Projects'))

function Home () {
    const { isShow: isShowFirst, fromRef: firstRef } = useNearScreen({})

    return (
        <main className='home-page'>
            <Section>
                <Greeting />
                <ArrowSeparator Arrow={ArrowIcon} className='delay-large' />
            </Section>
            <Suspense fallback={null}>
                <Section id='projects'>
                    <div ref={firstRef} />
                    {isShowFirst ? <Projects /> : null}
                </Section>
            </Suspense >
        </main>

    )
}

export default Home
