import { CodeIcon, GithubIcon, InstagramIcon, LinkedinIcon } from '@/components'
import { EmailIcon, Paragraph } from '..'
import { useStyles } from '@/hooks'
import './Footer.css'

function Footer () {
    const { style } = useStyles()
    return (
        <footer className='footer' style={{ borderColor: style.PRIMARY_COLOR }}>
            <div className='footer-line' style={{ borderColor: style.PRIMARY_COLOR }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <div className='footer-left'>
                    <CodeIcon color={style.PRIMARY_COLOR} />
                    <Paragraph color={style.PRIMARY_COLOR}>
                        Leandro Battocchio
                    </Paragraph>
                </div>
                <div className='footer-right'>
                    <a href='https://www.instagram.com/leanb3/' target='_blank' rel="noreferrer"><InstagramIcon color={style.PRIMARY_COLOR} /></a>
                    <a href='https://www.linkedin.com/in/leandrobattocchio' target='_blank' rel="noreferrer"><LinkedinIcon color={style.PRIMARY_COLOR} /></a>
                    <a href='https://github.com/leandrobattocchio' target='_blank' rel="noreferrer"><GithubIcon color={style.PRIMARY_COLOR} /></a>
                    <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=battocchioleandro@gmail.com' target='_blank' rel="noreferrer"><EmailIcon color={style.PRIMARY_COLOR} /></a>
                </div>
            </div>
        </footer >
    )
}

export default Footer
