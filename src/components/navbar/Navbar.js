import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'; 

import { ThemeContext } from "../../App";
import ToggleTheme from './ToggleTheme.js';

import './Navbar.css';

import iconml from '../../assets/images/iconml.png';
import flagde from '../../assets/images/flagde.png';
import flaguk from '../../assets/images/flaguk.svg';

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <div className='sidebar' >    
            <nav className='navbar' id={theme}>
                <div className='profile' >
                    <NavLink to='/portfolio' >
                        <img src={iconml} alt="iconml" />
                    </NavLink>
                </div>
                <div className='nav-items'>
                    <NavLink className='nav-item li-marg-bot1' to='/portfolio' >Home</NavLink>
                    <NavLink className='nav-item li-marg-bot1' to='/portfolio/uebermich' >About</NavLink>
                    <NavLink className='nav-item li-marg-bot2' to='/portfolio/projekte' >Projects</NavLink>
                    <NavLink className='btn-contact' to='/portfolio/kontakt' >
                        Contact
                    </NavLink>
                </div>
                <footer>
                    <div className='lang' >
                        <NavLink to='/portfolio' ><img className='flag' src={flagde} alt='German Flag' ></img></NavLink>
                    </div>
                    <div>
                        <ToggleTheme />
                    </div>
                    <div className='imprint-data'>
                        <NavLink to='/portfolio/impressum' >Imprint </NavLink> 
                        |
                        <NavLink to='/portfolio/datenschutz' > Data</NavLink>
                    </div>
                </footer>
            </nav>
        </div>
    );
}

export default Navbar;