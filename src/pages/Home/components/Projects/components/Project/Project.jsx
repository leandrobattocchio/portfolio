import { useImageLoader, useStyles, useTranslation } from '@/hooks'
import { Anchor, Paragraph, ThirdTitle } from '@/components'
import './Project.css'

function Project ({ title, description, image, alt, tecnologies, href, blurImage }) {
    const { processingImage } = useImageLoader(image)
    const { style } = useStyles()
    const { translation } = useTranslation()

    return (
        <article className='project-item' style={{ backgroundColor: style.BACKGROUND_COLOR }}>
            {
                processingImage ? <img className='project-image' src={blurImage} alt={`${alt} blur`} /> : <img className='project-image' alt={alt} src={image} />
            }
            <div className='project-info' >
                <ThirdTitle color={style.PRIMARY_COLOR} backgroundColor={style.TEXT_COLOR}>{title}</ThirdTitle>
                <Paragraph color={style.TEXT_COLOR} >{description}</Paragraph>
            </div>
            <div className='project-footer'>
                <div className='tecnologies'>
                    {
                        tecnologies.map((tecnologie) => {
                            const Logo = tecnologie.logo

                            return <Logo key={tecnologie.id} color={style.TEXT_COLOR} />
                        })
                    }
                </div>
                <div className='project-buttons'>
                    <Anchor color={style.PRIMARY_COLOR} backgroundColor={style.TEXT_COLOR} borderColor={style.TEXT_COLOR} className='visit-button' href={href} target='_blank' rel="noreferrer">{translation.visit}</Anchor>
                </div>
            </div>
        </article >
    )
}

export default Project
