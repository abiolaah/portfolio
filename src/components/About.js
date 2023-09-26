import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const About = () => {
   
    return (
        <section className="about-me" id="about">
            <Container id="about-container">
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={5}>
                            <div className="img-bg">
                                <img src={headerImg} alt="Header Img"/>
                            </div>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <div className="about-me-text">
                            <h1>About Me</h1>
                            <div className="about-paragraph">
                            <p>I am a driven, committed, innovative individual that is interested in developing excellent products with great 
                                quality and user experiences. I have a natural curiosity and am always eager and highly motivated to learn 
                                about new technology. If I am to describe myself in three words, it will be passionate, resilent and enthusiastic learner. 
                                {/* Visit my LinkedIn profile for more details. Also you can check out my cv on this link, or feel free to 
                                check some of my projects <a href="/#projects">here</a>*/} </p>
                            </div>
                            <button onClick={() => console.log('connect')} href="/#contact">Let's Connect <ArrowRightCircle size={25} /></button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}