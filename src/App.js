import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'; 

import './App.css';
import './Theme.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Imprint from './components/imprint/Imprint';
import Data from './components/data/Data';

export const ThemeContext = createContext(null);
export const LangContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('ger');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLang = () => {
    setLang(lang === 'eng' ? 'ger' : 'eng');
  };

  return (
    <Router>
      <LangContext.Provider value={{ lang, toggleLang }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className='app' id={theme} >
            <div className='flex-col' >
              <Navbar />            
              <div className='content navbar-distance' >
                <Routes>
                  <Route path='/portfolio' element={<Home />}></Route>
                  <Route path='/portfolio/uebermich' element={<About />}></Route>
                  <Route path='/portfolio/projekte' element={<Projects />}></Route>
                  <Route path='/portfolio/kontakt' element={<Contact />}></Route>
                  <Route path='/portfolio/impressum' element={<Imprint />}></Route>
                  <Route path='/portfolio/datenschutz' element={<Data />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </ThemeContext.Provider>
      </LangContext.Provider>
    </Router>    
  );
}

export default App;