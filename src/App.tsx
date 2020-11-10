import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
