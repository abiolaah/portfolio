import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/Logosvg.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon4.svg';
import navIcon4 from '../assets/img/nav-icon5.svg';

export const Footer = () =>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo-footer" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='#linkedin'><img src={navIcon1} alt='linkedin-icon'/></a>
                            <a href='#github'><img src={navIcon4} alt='github-icon'/></a>
                            <a href='#twitter'><img src={navIcon3} alt='twitter-icon'/></a>
                            <a href='#slack'><img src={navIcon2} alt='slack-icon'/></a>
                        </div>
                        <p>Copyright 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}