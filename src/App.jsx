import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
/* Removed ShowcaseSection import as section is no longer needed */
// import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
// Removed FeatureCards import as section is no longer needed
import Navbar from "./components/NavBar";
import About from "./sections/About";


const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    {/* <ShowcaseSection /> */}
    
    {/* FeatureCards section removed as per user request */}
    <Experience />
    
    <Projects />
    <TechStack />
    <LogoShowcase/>
    <Contact />
    <Footer />
  </>
);

export default App;
