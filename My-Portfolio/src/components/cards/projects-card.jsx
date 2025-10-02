import "./projects-card.scss";
import screenshot1 from "../../assets/images/Screenshot-1.png";
import screenshot2 from "../../assets/images/Screenshot-2.png";
import screenshot3 from "../../assets/images/Screenshot-3.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useAlert } from "../../context/alert-context";

const projects = [
    {
        id: "P-01",
        title: "adt-array-program",
        description: "Menu-driven (Command Line Interface) C program implementing/demonstrating operations on array, including.. Insertion, Deletion, Searching, Sort, Reverse, Min/Max.",
        visitLink: "https://github.com/gulshan-41/adt-array-program",
        getImgSrc: screenshot1
    },
    {
        id: "P-02",
        title: " A web-based career counselling platform for courses insight & career exploration",
        description: "By providing personalized guidance and access to diverse career information, we seek to enable students to choose career paths best suited to their interests, strengths, and market demands, aligning with NEP 2020's vision for holistic education.",
        getImgSrc: screenshot2
    },
    {
        id: "P-03",
        title: "The drift: Cafe billing software",
        description: "The Drift's Cafe - Smart Billing Software designed to streamline order management and sales tracking for cafes. It allows admins to manage the menu, generate invoices, and track daily sales with ease.",
        getImgSrc: screenshot3
    }
]

function ProjectsCard() {
    const { showError } = useAlert(); 
    
    const handleVisitLink = (visitLink, projectTitle) => {
        if(visitLink) {
            window.open(visitLink, "_blank");
        } else {
            showError(`${projectTitle} is under maintainance!`);
        }
    }

    return (
        <div className="projects-card-grid">
            {projects.map((project) => (
                <div
                    className="projects-card-wrapper"
                    key={project.id}
                    onClick={() => handleVisitLink(project.visitLink, project.title)}
                >
                    <div className="title-descript">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="img-container">
                        <div className="nav-btn">
                            <div className="btn-cover">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    enableBackground="new 0 0 24 24"
                                    viewBox="0 0 24 24"
                                    width="32px"
                                    height="32px"
                                    fill="#fff"
                                    className="right-arrow"
                                    id="upper-right-arrow"
                                >
                                    <path d="M17.4521484,6H6.5471191C6.2445679,6.0001831,5.9994507,6.2456665,5.9996338,6.5482178s0.2456665,0.5476685,0.5482178,0.5474854h9.5845337l-9.9702759,9.9707031c-0.1026611,0.102417-0.1602783,0.2415771-0.1600342,0.3865967c0.0004883,0.3009644,0.244812,0.5445557,0.5457764,0.5440674c0.1446533,0.0004272,0.2834473-0.0568848,0.3857422-0.1591797l9.9707031-9.9711304v9.5858154C16.9044189,17.7550049,17.1497192,18.0001221,17.4521484,18h0.0004272C17.7550049,17.9998779,18.0001221,17.7545776,18,17.4521484V6.5474243C17.9998779,6.2449951,17.7545776,5.9998779,17.4521484,6z"></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    enableBackground="new 0 0 24 24"
                                    viewBox="0 0 24 24"
                                    width="32px"
                                    height="32px"
                                    fill="#fff"
                                    className="right-arrow-top"
                                    id="upper-right-arrow"
                                >
                                    <path d="M17.4521484,6H6.5471191C6.2445679,6.0001831,5.9994507,6.2456665,5.9996338,6.5482178s0.2456665,0.5476685,0.5482178,0.5474854h9.5845337l-9.9702759,9.9707031c-0.1026611,0.102417-0.1602783,0.2415771-0.1600342,0.3865967c0.0004883,0.3009644,0.244812,0.5445557,0.5457764,0.5440674c0.1446533,0.0004272,0.2834473-0.0568848,0.3857422-0.1591797l9.9707031-9.9711304v9.5858154C16.9044189,17.7550049,17.1497192,18.0001221,17.4521484,18h0.0004272C17.7550049,17.9998779,18.0001221,17.7545776,18,17.4521484V6.5474243C17.9998779,6.2449951,17.7545776,5.9998779,17.4521484,6z"></path>
                                </svg>
                                <div className="projects-cards-trackball"></div>
                            </div>
                        </div>
                        <img className="screenshot" src={project.getImgSrc} alt="project-screenshot!" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectsCard;