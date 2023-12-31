import { useState, useEffect } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/img/Logosvg.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon4.svg';
import navIcon4 from '../assets/img/nav-icon5.svg';
export const NavBar = () =>{
    //the class below helps to manage which section we are on
    const [activeLink, setActiveLink] = useState('home');
    // the class belwo help to manage the information of when the user scrolls
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container className='navbar-container'>
                <Navbar.Brand href="/">
                    <img className='navbar-logo' src={logo} alt='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="md-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('about')}>About Me</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() =>onUpdateActiveLink('experience')}>Experience</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#linkedin'><img src={navIcon1} alt='linkedin-icon'/></a>
                            <a href='#github'><img src={navIcon4} alt='github-icon'/></a>
                            <a href='#twitter'><img src={navIcon3} alt='twitter-icon'/></a>
                            <a href='#slack'><img src={navIcon2} alt='slack-icon'/></a>
                        </div>
                    </span>
                    <button className='connect-btn' onClick={() => console.log('')} href="#connect" ><span>Let's Connect</span></button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}