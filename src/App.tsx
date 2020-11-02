import React from 'react';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import Intro from './pages/Intro/Intro';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import skills from './data/skillsObject';
import { fetchProjects } from './utils';

function App() {
  fetchProjects();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Intro />
        <About />
        <Skills {...skills} />
        <Projects />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
