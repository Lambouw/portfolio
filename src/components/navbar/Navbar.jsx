import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'; 

import { LangContext } from "../../App";
import ToggleTheme from './ToggleTheme.jsx';
import ToggleLang from './ToggleLang.jsx';

import './Navbar.css';

import iconml from '../../assets/images/iconml.png';

function Navbar() {
    const { lang } = useContext(LangContext);

    const toggleMenu = () => {
        let hamburger = document.getElementsByClassName("MenuHmb")[0];
        hamburger.style.display = "flex";
        console.log("open hamburger menu");
    }

    if (lang === 'eng') {
        return (
            <div className='navbar' >    
                <nav >
                    <div className='profile' >
                        <NavLink to='/portfolio' >
                            <img src={iconml} alt="ml" />
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
                    <div className='hamburger-menu' onClick={toggleMenu} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <footer>
                        <div className='toggler' >
                            <div className='lang' >
                                <ToggleLang />
                            </div>
                            <div>
                                <ToggleTheme />
                            </div>
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
            <div className='navbar' >    
                <nav >
                    <div className='profile' >
                        <NavLink to='/portfolio' >
                            <img src={iconml} alt="iconml" />
                        </NavLink>
                    </div>
                    <div className='nav-items'>
                        <NavLink className='nav-item li-marg-bot1' to='/portfolio' >Start</NavLink>
                        <NavLink className='nav-item li-marg-bot1' to='/portfolio/about' >Über mich</NavLink>
                        <NavLink className='nav-item li-marg-bot2' to='/portfolio/projects' >Projekte</NavLink>
                        <NavLink className='btn-contact' to='/portfolio/contact' >
                            Kontakt
                        </NavLink>
                    </div>                    
                    <div className='hamburger-menu' onClick={toggleMenu} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <footer>
                        <div className='toggler' >
                            <div className='lang' >
                                <ToggleLang />
                            </div>
                            <div>
                                <ToggleTheme />
                            </div>
                        </div>
                        <div className='imprint-data'>
                            <NavLink to='/portfolio/legal' >Impressum </NavLink> 
                            |
                            <NavLink to='/portfolio/privacy' > Datenschutz</NavLink>
                        </div>
                    </footer>
                </nav>
            </div>
        );
    }
}

export default Navbar;