import AboutSection from "@/components/AboutSection/AboutSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import IntroSection from "@/components/IntroSection/IntroSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import { headerHomeLinks } from "@/data/headerHomeLinks";

const Home = () => {
  return (
    <>
      <Header links={headerHomeLinks}/>
      <main>
        <IntroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  );
}

export default Home