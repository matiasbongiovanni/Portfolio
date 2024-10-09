import Home from "./screens/Home";
import Projects from "./screens/Projects";
import AboutMe from "./screens/About";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Home />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  )
}