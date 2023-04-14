import { CurriculumIcon, GithubIcon, LinkedinIcon, Paragraph, Title } from '@/components'
import profilePhoto from '@/assets/profile.jpg'
import profilePhotoBlur from '@/assets/profile-blur.jpg'
import { useImageLoader, useStyles, useTranslation } from '@/hooks/'
import CV from '@/assets/CV.pdf'
import { GA_ID } from '@/consts/'
import ReactGA from 'react-ga'
import { useEffect } from 'react'
import './Greeting.css'

ReactGA.initialize(GA_ID)

function Greeting () {
    const { processingImage } = useImageLoader(profilePhoto)
    const { translation } = useTranslation()
    const { style } = useStyles()

    useEffect(() => {
        ReactGA.pageview(window.location.pathname)
    }, [])

    return (
        <div id='greeting' className='greeting'>
            {
                processingImage
                    ? <img style={{ borderColor: style.PRIMARY_COLOR }} src={profilePhotoBlur} alt='leandro battocchio photo blur' />
                    : <img style={{ borderColor: style.PRIMARY_COLOR }} src={profilePhoto} alt='leandro battocchio photo' />
            }
            <div className='welcome-information'>
                <Title color={style.PRIMARY_COLOR}>Leandro Battocchio</Title>
                <div className='welcome-footer'>
                    <Paragraph color={style.SECONDARY_COLOR}>
                        <span>Frontend</span>
                        <span>Developer</span>
                    </Paragraph>
                    <div className='personal-links shake-vertical'>
                        <a href={CV} target='_blank' rel="noreferrer">
                            <CurriculumIcon color={style.TEXT_COLOR} borderColor={style.PRIMARY_COLOR} backgroundColor={style.PRIMARY_COLOR}>
                                {translation.cv}
                            </CurriculumIcon>
                        </a>
                        <a href='https://github.com/leandrobattocchio' target='_blank' rel="noreferrer">
                            <GithubIcon color={style.PRIMARY_COLOR} />
                        </a>
                        <a href='https://www.linkedin.com/in/leandrobattocchio/' target='_blank' rel="noreferrer">
                            <LinkedinIcon color={style.PRIMARY_COLOR} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greeting
