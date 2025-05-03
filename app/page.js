// // import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
// // import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
// import Projects from "./components/homepage/projects";
import ProjectsV2 from "./components/homepage/projectsv2";
import Skills from "./components/homepage/skills";



export default  function Home() {
 

  return (
    <div  >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <ProjectsV2 />
      {/* <Projects /> */}
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  )
};