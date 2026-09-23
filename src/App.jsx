import Landing from "./pages/landing-page/Landing";
import Projects from "./components/project/Project";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {

  return (
      <div className="main-container">
        <Navbar />
        <Landing />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
