import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'; 

import { ThemeContext, LangContext } from "../../App";
import ToggleTheme from './ToggleTheme.js';
import ToggleLang from './ToggleLang.js';

import './Navbar.css';

import iconml from '../../assets/images/iconml.png';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { lang, toggleLang } = useContext(LangContext);

    if (lang === 'eng') {
        return (
            <div className='sidebar' >    
                <nav className='navbar' >
                    <div className='profile' >
                        <NavLink to='/portfolio' >
                            <img src={iconml} alt="iconml" />
                        </NavLink>
                    </div>
                    <div className='nav-items'>
                        <NavLink className='nav-item li-marg-bot1' to='/portfolio' >Home</NavLink>
                        <NavLink className='nav-item li-marg-bot1' to='/portfolio/about' >About</NavLink>
                        <NavLink className='nav-item li-marg-bot2' to='/portfolio/projects' >Projects</NavLink>
                        <NavLink className='btn-contact' to='/portfolio/contact' >
                            Contact
                        </NavLink>
                    </div>
                    <footer>
                        <div className='lang' >
                            <ToggleLang />
                        </div>
                        <div>
                            <ToggleTheme />
                        </div>
                        <div className='imprint-data'>
                            <NavLink to='/portfolio/legal' >Legal Notice </NavLink> 
                            |
                            <NavLink to='/portfolio/privacy' > Privacy Policy</NavLink>
                        </div>
                    </footer>
                </nav>
            </div>
        );
    } else {
        return (
            <div className='sidebar' >    
                <nav className='navbar' >
                    <div className='profile' >
                        <NavLink to='/portfolio' >
                            <img src={iconml} alt="iconml" />
                        </NavLink>
                    </div>
                    <div className='nav-items'>
                        <NavLink className='nav-item li-marg-bot1' to='/portfolio' >Start</NavLink>
                        <NavLink className='nav-item li-marg-bot1' to='/portfolio/uebermich' >Über mich</NavLink>
                        <NavLink className='nav-item li-marg-bot2' to='/portfolio/projekte' >Projekte</NavLink>
                        <NavLink className='btn-contact' to='/portfolio/kontakt' >
                            Kontakt
                        </NavLink>
                    </div>
                    <footer>
                        <div className='lang' >
                            <ToggleLang />
                        </div>
                        <div>
                            <ToggleTheme />
                        </div>
                        <div className='imprint-data'>
                            <NavLink to='/portfolio/impressum' >Impressum </NavLink> 
                            |
                            <NavLink to='/portfolio/datenschutz' > Datenschutz</NavLink>
                        </div>
                    </footer>
                </nav>
            </div>
        );
    }
}

export default Navbar;