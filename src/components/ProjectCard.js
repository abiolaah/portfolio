import { Col } from "react-bootstrap";

export const ProjectCard = ({title, role, coverImgUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-card">
                <div className="proj-cover-img">
                    
                        <img src={coverImgUrl} alt="project-screenshot"/>
                    
                </div>
                <div className="text-details">
                    <h3>{title}</h3>
                    <div className="role-holder">
                        <span className="role">Role: {role}</span>
                    </div>
                </div>
            </div>
        </Col>
    );
}