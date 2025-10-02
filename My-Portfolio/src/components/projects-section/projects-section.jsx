import "./projects-section.scss";
import ProjectsCard from "../cards/projects-card";

function ProjectSection() {
    return (
        <section className="projects-section-wrapper" id="projects">
            <h2><span>RECENT</span> PROJECTS</h2>
            <ProjectsCard />
        </section>
    );
}

export default ProjectSection;