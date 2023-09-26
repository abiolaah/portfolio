import { useState, useEffect, useCallback, useMemo } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = useMemo(() => ["Product Manager", "Web Developer", "QA Engineer"], []);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    //function
    const tick = useCallback(() =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1): fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, text.length, toRotate], toRotate, text, period);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [delta, tick])

    
    return(
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible })=> 
                        <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                       <span className="tagline"> <h1>Hi,</h1></span>
                        <h2>{`I'm Victoria, `}a tech enthusiast</h2>
                        <h3><span className="wrap">{text}</span></h3>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}