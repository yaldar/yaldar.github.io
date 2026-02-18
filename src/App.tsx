import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header/Header';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Contact from './pages/Contact/Contact';
import 'semantic-ui-css/semantic.min.css';

type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'preferred-theme';

const getSystemTheme = (): ThemeMode => (
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
);

const getStoredTheme = (): ThemeMode | null => {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
  return null;
};

const App = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getStoredTheme() || getSystemTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncWithSystemTheme = () => {
      if (!getStoredTheme()) setThemeMode(getSystemTheme());
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncWithSystemTheme);
      return () => mediaQuery.removeEventListener('change', syncWithSystemTheme);
    }

    mediaQuery.addListener(syncWithSystemTheme);
    return () => mediaQuery.removeListener(syncWithSystemTheme);
  }, []);

  const toggleTheme = () => {
    setThemeMode((prevThemeMode) => {
      const nextThemeMode = prevThemeMode === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(THEME_STORAGE_KEY, nextThemeMode);
      return nextThemeMode;
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header themeMode={themeMode} onToggleTheme={toggleTheme} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
