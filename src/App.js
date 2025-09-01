import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [section, setSection] = useState("home");

  return (
    <>
      <Navbar onNavigate={setSection} />
      {section === "home" && <Home />}
      {section === "about" && <About />}
      {section === "skills" && <Skills />}
      {section === "projects" && <Projects />}
      {section === "contact" && <Contact />}
    </>
  );
}

export default App;
