import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { About } from "./About";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home = () => {
    return(
        <>
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Projects/>
        <Experience />
        <Contact />
        <Footer />
        </>
    );
}