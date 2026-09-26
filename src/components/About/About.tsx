import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import javaIcon from "../../assets/java.svg";
import githubIcon from "../../assets/github-green.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export function About() {
  return (
    <Container id="about">
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src="/Images/Vidit%20Singh.jpeg" alt="Vidit Singh" />
        </ScrollAnimation>
      </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Vidit, a B.Tech Computer Science student passionate about building modern web applications and exploring the world of cybersecurity.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I'm currently focused on full-stack development with React, JavaScript, and Core Java — turning ideas into real projects and understanding how things work behind the scenes.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            When I'm not coding, I'm sharpening my problem-solving skills through DSA practice, hackathons, and projects that push me to learn something new every day.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor of Technology in Computer Science &amp; Engineering</h4>
            <p>United Institute of Technology, Prayagraj | 2023 - 2027 (Expected)</p>
            <p>SGPA: 6.35 (as of 6th semester)</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3>
            <h4>Web &amp; Mobile Development Trainee</h4>
            <p>IBM SkillsBuild (MOOC) | July 2025 - August 2025</p>
            <p>Built an e-commerce site to reduce offline market foot traffic</p>
            <br />
            <h4>Core Java Trainee</h4>
            <p>United Institute of Technology | August 2024</p>
            <p>Completed Core Java &amp; Collections Framework training</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={650}>
          <div className="experience">
            <h3>Achievements:</h3>
            <p>Google Solution Challenge — Participant (June 2025)</p>
            <p>SIH Internal Hackathon — 2nd Place (October 2025)</p>
            <p>UHACK 3.0 Hackathon — Participant (October 2025)</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={githubIcon} alt="Git & GitHub" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={vscodeIcon} alt="VS Code" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  )
}
