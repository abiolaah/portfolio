import { useEffect, useState } from "react";
import plus from "../assets/icons/Plus.svg";
import cross from "../assets/icons/Cross.svg";
import building from "../assets/icons/property-color-icon.svg";
import location from "../assets/icons/location-circle.svg";
import link from "../assets/icons/linnk-icon.svg";

export const Experience = () =>{
    const [isActive, setIsActive] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Mark the page as loaded once
    if (!loaded) {
        setLoaded(true);
      }
    }, [loaded])

    const toggle = (index) => {
        if(isActive === index){
            return setIsActive(null)
        }

        setIsActive(index)
    }
    const data = [
        {
            position: 'Associate product manager',
            date: 'October 2019 - Novemeber 2022',
            name: 'COURE Software and Systems',
            location: "Lagos, Nigeria",
            websiteLink: "https://www.coure-tech.com/",
            websiteText: "coure-tech.com",
            duties:"Increased the number of countries for the Routing service of the ANQ platform from 9 to 42 African countries and 3 European countries and successfully integrated with two of the top telecommunication companies in Nigeria for their data.",
            skills: ["Documentation", "Critical thinking", "Analytics", "Problem skills"]
        },
        {
            position: 'Network support intern',
            date: 'March 2018 - August 2018',
            name: 'Ecobank',
            location: "Lagos, Nigeria",
            websiteLink: "https://www.ecobank.com/ng/personal-banking",
            websiteText: "ecobank.ng",
            duties:"Decreased downtime by 20% by fix downtime issues in various branches and troubleshooting with network providers to upgrade network",
            skills: ["Troubleshoting", "Attention to details"]
        }
    ]

    return(
        <section className="experience" id="experience">
            <div className="experience-list">
                <h2>Experiences</h2>
                <div className="experience-accordion">
                    {data.map((item, index) => (
                    <div className="item">
                        <div className="accordion-header" onClick={() => toggle(index)}>
                            <h3 className="title">{item.position}</h3>
                            <span><h3 className="period">{item.date}</h3></span>
                            <span className="collapsible">{isActive === index ? <img src={cross} alt="cross-icon"/>:<img src={plus} alt="plus-icon"/>}</span>
                        </div>
                       
                        { isActive === index && <div className="accordion-body">
                            <div className="company-details">
                                <ul className="comapny-info-list">
                                    <li className="company-name">
                                        <span><img src={building} alt="plusbtn-icon"/></span>
                                        <span>{item.name}</span>
                                    </li>
                                    <li className="company-location">
                                        <span><img src={location} alt="location-icon"/></span>
                                        <span>{item.location}</span>
                                    </li>
                                    <li className="company-website">
                                        <span><img src={link} alt="link-icon"/></span>
                                        <span><a href={item.websiteLink}>{item.websiteText}</a></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="duties">
                                <p>{item.duties}</p>
                            </div>
                            <div className="skills-acquired">
                                <h5>Skills Acquired:</h5>
                                <ul className="skills">
                                {item.skills.map((skill, skillIndex) => (
                                    <li className="acquired" key={skillIndex}>
                                        <span>{skill}</span>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>}
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}