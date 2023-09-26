import { useState } from "react";
import { Col, Container,Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img4.jpeg";
import projImg2 from "../assets/img/project-img5.jpeg";
import projImg3 from "../assets/img/project-img6.png";
import projImg4 from "../assets/img/project-img7.png";
import projImg5 from "../assets/img/project-img8.png";
import projImg6 from "../assets/img/project-img9.png";
import projImg7 from "../assets/img/project-img10.png";
import projImg8 from "../assets/img/project-img11.png";
import projImg9 from "../assets/img/project-img12.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    const [activeTab, setActiveTab] = useState('first'); 
    // Filter projects by category
  const getProjectsByCategory = (category) => {
    return projects.filter((project) => project.category === category);
  };

    const projects = [
        {
            title: "Royal Crown Real Estate System",
            description: "Developed the application using reactjs framework for the front end. I also performed product management role for this project, providing user stories, creating and monitoring iterationand providing test reports.",
            coverImgUrl: projImg4,
            role: "Front-End Engineer",
            category: "Development",
            sourceLink: "https://github.com/inderjitbedi/properto-fe",
            demoLink: "#projects"
          },
          {
            title: "ANQ",
            description: "For this project, I pworked as a product manager, analyst and scrum master",
            coverImgUrl: projImg2,
            role: "Product Manager",
            category: "Product Management",
            sourceLink: "#github",
            demoLink: "#projects"
          },
          {
            title: "CanSurvey",
            description: "This project was a serverless project using Angular Js framework and firebase for database and hosting",
            coverImgUrl: projImg6,
            role: "Fullstack Engineer",
            category: "Development",
            sourceLink: "https://github.com/abiolaah/canSurvey",
            demoLink: "https://cansurvey-c0e35.web.app/"
          },
          {
            title: "Auto-Dealer",
            description: "This project, I worked in the capacity of product manager, UI designer and system architecture engineer",
            coverImgUrl: projImg3,
            role: "Product Manager",
            category: "Product Management",
            sourceLink: "#github",
            demoLink: "#projects"
          },
          {
            title: "HUB",
            description: "For this project, I pworked as a product manager, analyst and scrum master",
            coverImgUrl: projImg1,
            role: "Product Manager",
            category: "Product Management",
            sourceLink: "#github",
            demoLink: "#projects"
          },
          {
            title: "Believers' App",
            description: "This is an ongoing project in which I currently work as product manager",
            coverImgUrl: projImg5,
            role: "Product Manager",
            category: "Product Management",
            sourceLink: "#github",
            demoLink: "#projects"
          },
          {
            title: "DemoQA BookStore",
            description: "For this project, I worked as a tester. Performing both manual and automated testing. The test involved mainly functional and UI testing",
            coverImgUrl: projImg9,
            role: " QA Engineer",
            category: "Quality Assurance",
            sourceLink: "#github",
            demoLink: "#projects"
          },
          {
            title: "Restful-Booker",
            description: "For this project, I worked as a tester. Performing both manual and automated testing. The test involved mainly API testing.",
            coverImgUrl: projImg7,
            role: "QA Engineer",
            category: "Quality Assurance",
            sourceLink: "#github",
            demoLink: "#projects"
          },
          {
            title: "Swapi API",
            description: "For this project, I worked as a tester. Performing both manual and automated testing. The test involved mainly API testing",
            coverImgUrl: projImg8,
            role: "QA Engineer",
            category: "Quality Assurance",
            sourceLink: "#github",
            demoLink: "#projects"
          }
    ]
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible })=> 
                        <div className={isVisible ? "animate__animated bounce":""}>
                            <h2>Projects</h2>
                            <p>Below are the list of projects I have worked on and are categorized based on development, testing or product management expertise</p>
                        </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">All</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="development">Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="pm">Product Managment</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="qa">Quality Assurance</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="development">
                        <Row>
                            {getProjectsByCategory('Development').map(
                            (project, index) => {
                                return <ProjectCard key={index} {...project} />;
                            }
                            )}
                        </Row>  
                        </Tab.Pane>
                        <Tab.Pane eventKey="pm">
                        <Row>
                            {getProjectsByCategory('Product Management').map(
                            (project, index) => {
                                return <ProjectCard key={index} {...project} />;
                            }
                            )}
                        </Row> 
                        </Tab.Pane>
                        <Tab.Pane eventKey="qa">
                        <Row>
                            {getProjectsByCategory('Quality Assurance').map(
                            (project, index) => {
                                return <ProjectCard key={index} {...project} />;
                            }
                            )}
                        </Row> 
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    );
}
