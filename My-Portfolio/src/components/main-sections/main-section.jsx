import "./main-section.scss";
import Profile from "../profile-section/profile";
import AboutSection from "../about-section/about-section";
import ProjectSection from "../projects-section/projects-section";
import ToolsSection from "../tools-section/tools-section";
import ContactForm from "../contact-form/contact-form";

function MainSection() {
    return (
        <main>
            <div className="main-wrapper utility-section">
                <div className="major-sections">
                    <section className="main-lefthalf">
                        <Profile />
                    </section>
                    <section className="main-righthalf">
                        <AboutSection />
                        <ProjectSection />
                        <ToolsSection />
                    </section>
                </div>
                <ContactForm />
            </div>
        </main>
    );
}

export default MainSection;