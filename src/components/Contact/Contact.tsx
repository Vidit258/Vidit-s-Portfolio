import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Got a project in mind, an internship opening, or just want to say hi?</p>
        <p>My inbox is always open — let's talk.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:singhvidit899@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:singhvidit899@gmail.com">singhvidit899@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918470827227"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918470827227">(+91) 8470827227</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}
