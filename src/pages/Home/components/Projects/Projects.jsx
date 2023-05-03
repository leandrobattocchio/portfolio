import {
    lofiImage,
    movieImage,
    backgroundRemoverImage,
    ecommerceImage,
    gifImage,
    minecraftImage,
    chatImage,
    componentGeneratorImage,
    googleTranslateImage,
    ticTacToeImage,
    lofiImageBlurred,
    movieImageBlurred,
    backgroundRemoverImageBlurred,
    ecommerceImageBlurred,
    gifImageBlurred,
    minecraftImageBlurred,
    chatImageBlurred,
    componentGeneratorImageBlurred,
    googleTranslateImageBlurred,
    ticTacToeImageBlurred
} from '@/assets/projects'
import { Project } from './components'
import { useStyles, useTranslation } from '@/hooks'
import { TitleSeparator, Button } from '@/components'
import { ReactIcon, JavascriptIcon, TypescriptIcon, NextIcon, ThreeIcon, TailwindIcon } from '@/components/Icons'
import { useState } from 'react'
import './Projects.css'

const TECNOLOGIES = {
    react: {
        id: 1,
        logo: ReactIcon
    },
    typescript: {
        id: 2,
        logo: TypescriptIcon
    },
    javascript: {
        id: 3,
        logo: JavascriptIcon
    },
    next: {
        id: 4,
        logo: NextIcon
    },
    three: {
        id: 5,
        logo: ThreeIcon
    },
    tailwind: {
        id: 6,
        logo: TailwindIcon
    }
}

const MAX_PROJECTS = 4

function Projects () {
    const [isAllProjects, setAllProjects] = useState(false)
    const { style } = useStyles()
    const { translation } = useTranslation()

    const PROJECTS = [
        {
            id: 1,
            title: 'Lofi Music',
            description: translation.project1,
            image: lofiImage,
            blurImage: lofiImageBlurred,
            alt: 'Lofi Project',
            href: 'https://lofi-music-five.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.javascript, TECNOLOGIES.tailwind]
        },
        {
            id: 2,
            title: 'Movie Search',
            description: translation.project2,
            image: movieImage,
            blurImage: movieImageBlurred,
            alt: 'Movie Project',
            href: 'https://movie-search-ten-ruby.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.javascript]
        },
        {
            id: 3,
            title: 'Background Remover',
            description: translation.project3,
            image: backgroundRemoverImage,
            blurImage: backgroundRemoverImageBlurred,
            alt: 'Background Remover Project',
            href: 'https://background-remover-gamma.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.javascript]
        },
        {
            id: 4,
            title: 'E-commerce',
            description: translation.project4,
            image: ecommerceImage,
            blurImage: ecommerceImageBlurred,
            alt: 'E-commerce Project',
            href: 'https://coder-ecommerce-leandrobattocchio.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.javascript]
        },
        {
            id: 5,
            title: 'Gif Search',
            description: translation.project5,
            image: gifImage,
            blurImage: gifImageBlurred,
            alt: 'Gif Project',
            href: 'https://gifs-omega.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.javascript]
        },
        {
            id: 6,
            title: 'Minecraft Clon',
            description: translation.project6,
            image: minecraftImage,
            blurImage: minecraftImageBlurred,
            alt: 'Minecraft Project',
            href: 'https://minecraft-cheap.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.javascript, TECNOLOGIES.three]
        },
        {
            id: 7,
            title: 'ChatGPT Clon',
            description: translation.project7,
            image: chatImage,
            blurImage: chatImageBlurred,
            alt: 'ChatGPT Project',
            href: 'https://chat-gpt-clone-olive.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.javascript, TECNOLOGIES.next]
        },
        {
            id: 8,
            title: 'Component Generator',
            description: translation.project8,
            image: componentGeneratorImage,
            blurImage: componentGeneratorImageBlurred,
            alt: 'Component Generator Project',
            href: 'https://component-generator.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.javascript, TECNOLOGIES.next, TECNOLOGIES.tailwind]
        },
        {
            id: 9,
            title: 'Google Translate',
            description: translation.project9,
            image: googleTranslateImage,
            blurImage: googleTranslateImageBlurred,
            alt: 'Google Translate Project',
            href: 'https://google-translate-clon.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.typescript, TECNOLOGIES.next]
        },
        {
            id: 10,
            title: 'Tic Tac Toe',
            description: translation.project10,
            image: ticTacToeImage,
            blurImage: ticTacToeImageBlurred,
            alt: 'Tic-Tac-Toe Project',
            href: 'https://tic-tac-toe-five-gilt.vercel.app/',
            tecnologies: [TECNOLOGIES.react, TECNOLOGIES.typescript]
        }
    ]

    const projectsToRender = isAllProjects ? PROJECTS : PROJECTS.slice(0, MAX_PROJECTS)

    const handleProjects = () => {
        setAllProjects(prevState => !prevState)
    }

    return (
        <div className='projects'>
            <TitleSeparator>
                {translation.projects}
            </TitleSeparator>
            <div className='projects-container'>
                {
                    projectsToRender.map(({ title, description, image, alt, id, tecnologies, href, blurImage }) => {
                        return <Project key={id} title={title} description={description} blurImage={blurImage} image={image} alt={alt} tecnologies={tecnologies} href={href} />
                    })
                }
            </div>
            <Button color={style.TEXT_COLOR} backgroundColor={style.PRIMARY_COLOR} borderColor={style.PRIMARY_COLOR} className='show-projects' onClick={handleProjects}>{isAllProjects ? 'Show less' : 'Show all'}</Button>
        </div>
    )
}

export default Projects
