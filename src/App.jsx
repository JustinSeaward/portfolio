import Navbar from "./components/navbar/Narbar";
import Landing from "./pages/landing-page/Landing";
import Projects from "./components/project/Project";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ThemeToggle from "./components/theme-toggle/ThemeToggle";
import "./App.css";

function App() {

  return (
      <div className="main-container">
        <ThemeToggle />
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
