import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send');
    // const emailTemplate = process.env.REACT_APP_CONTACT_TEMPLATE_ID;
    // const emailToken = process.env.REACT_APP_CONTACT_PUBLIC_KEY;
    // const emailService = process.env.REACT_APP_CONTACT_SERVICE_ID;

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Sending.....")
        emailjs.sendForm('service_5j2he95', 'template_busz06c', form.current, 'thRuTQ7wiH0tlo52w').then((result) => {
            alert('Message successfully sent!')
            window.location.reload(false)
            setButtonText("Send")
            console.log(result.text);
        }, (error) => {
            alert('Failed to send the message, please try again')
            console.log(error.text);
        });
    }
    return(
        <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstname"placeholder="First Name"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastname"placeholder="Last Name"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" placeholder="Email Address" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="phone" placeholder="Phone No." />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="subject" placeholder="Subject"/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Message" ></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    );
}