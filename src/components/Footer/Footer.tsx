import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github-green.svg'

// TODO: swap the LinkedIn href below for your real profile URL.
export function Footer() {
  return (
    <Container className="footer">
      <a href="https://github.com/Vidit258" className="logo">
        <span>Vidit </span>
        <span>Singh</span>
      </a>
      <div>
        <p>
          Built with React, TypeScript, and Vite <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/vidit-singh-60a0002b1/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Vidit258"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
