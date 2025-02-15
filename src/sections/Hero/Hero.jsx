import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import twitterlight from '../../assets/twitter-light.svg'
import twitterdark from '../../assets/twitter-dark.svg'
import githublight from '../../assets/github-light.svg'
import githubdark from '../../assets/github-dark.svg'
import linkedinlight from '../../assets/linkedin-light.svg'
import linkedindark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterlight : twitterdark;
    const githubIcon = theme === 'light' ? githublight : githubdark;    
    const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;
  return (
    <section id="Hero" className={styles.Container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Rahul Raj"/>
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
    </div>
    <div classname={styles.info}>
        <h1> Rahul <br/> Raj</h1>
        <h2> Fullstack Developer</h2>
        <span>
            <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="Twitter icon"/>
            </a>
            <a href="https://github.com/" target="_blank">
                <img src={githubIcon} alt="Github icon"/>
            </a>
            <a href="https://linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon"/>
            </a>
        </span>
        <p>I am a Fullstack Developer. I am passionate about building responsive and accessible websites. </p>
        <a href={CV} download>
            <button className="hover"d>Resume</button>
        </a>
    </div>
    </section>
  )
}

export default Hero