import { Container } from "./styles";
import githubIcon from "../../assets/github-green.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const FolderIcon = () => (
  <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <title>Folder</title>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
)

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        {/* Verified real project — links confirmed working */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderIcon />
              <div className="project-links">
                <a href="https://github.com/Vidit258/weatherapp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://vidit258.github.io/weatherapp/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather App</h3>
              <p>
                A weather application that fetches real-time data using a public API and displays temperature, humidity, and conditions for any city.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaScript</li>
                <li>API</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* TODO: add a GitHub link here once you have one */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderIcon />
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Bank Management System</h3>
              <p>
                Built a fully functional bank management system with account and transaction handling, using Java, Java Swing, and AWT for the GUI, backed by a MySQL database.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>Java Swing</li>
                <li>AWT</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* TODO: add a GitHub link here once you have one */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderIcon />
              <div className="project-links">
                <a href="https://github.com/Vidit258/BitLink" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://bit-link-iota.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>BitLink</h3>
              <p>
                A simple URL shortener built with Next.js and a MongoDB backend, deployed on Vercel.
                Includes a responsive hero/navbar and serverless-optimized database connection caching.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>MongoDB</li>
                <li>Vercel</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Built at UHACK 3.0 — TODO: add a GitHub/demo link here once you have one */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderIcon />
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Nestify</h3>
              <p>
                A web-based platform built at UHACK 3.0 that connects builders, interior designers, and customers for seamless home construction and design collaboration. Focused on responsive UI and user-friendly navigation.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Hackathon</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Built at Smart India Hackathon (Internal Round) — 2nd Place — TODO: add a link if available */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <FolderIcon />
              <div className="project-links">
                <a href="https://github.com/Vidit258/Medibook" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://medibook-85nc.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Medibook</h3>
              <p>
                MediBook is a medical appointment management system built with Node.js, Express, EJS, and Firebase Firestore. 
                It provides patient, doctor, and admin features for managing appointments, prescriptions, and healthcare information.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express</li>
                <li>EJS</li>
                <li>Firebase Firestore</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
