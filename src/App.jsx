import Home from "./screens/Home";
import Projects from "./screens/Projects";
import AboutMe from "./screens/About";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" }},
  exit: { opacity: 0, y: 100, transition: { duration: 0.5 }}
};

export default function App() {
  return (
    <main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
      >
        <Home />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        transition={{ delay: 0.3 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        transition={{ delay: 0.6 }}
      >
        <AboutMe />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        transition={{ delay: 0.9 }}
      >
        <Contact />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        variants={sectionVariants}
        transition={{ delay: 1.2 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
