import "./main-pages.scss";
import Header from "../components/header/header";
import MainSection from "../components/main-sections/main-section";
import Footer from "../components/footer/footer";

function MainPage() {
    return (
        <section className="main-pages-container">
            <Header />
            <MainSection />
            <Footer />
        </section>
    );
}

export default MainPage;