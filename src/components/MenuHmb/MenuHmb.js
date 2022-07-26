import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'; 

import { LangContext } from "../../App";

import ToggleTheme from '../navbar/ToggleTheme';
import ToggleLang from '../navbar/ToggleLang.js';

import close from '../../assets/images/x.svg';

import './MenuHmd.css';

const MenuHmb = () => {
    const { lang } = useContext(LangContext);

    const closeMenu = () => {
        let hamburger = document.getElementsByClassName("MenuHmb")[0];
        hamburger.style.display = "none";
        console.log("close hamburger menu");
    }
        
    if (lang === 'eng') {   
        return (
            <div className='MenuHmb' >
                <div className='CloseHmb' onClick={closeMenu} >
                    <img src={close} alt='close button' ></img>
                </div>
                <div className='nav-items'>
                    <NavLink className='nav-item li-marg-bot1' to='/portfolio' onClick={closeMenu} >Home</NavLink>
                    <NavLink className='nav-item li-marg-bot1' to='/portfolio/about' onClick={closeMenu} >About</NavLink>
                    <NavLink className='nav-item li-marg-bot2' to='/portfolio/projects' onClick={closeMenu} >Projects</NavLink>
                    <NavLink className='btn-contact' to='/portfolio/contact' onClick={closeMenu} >
                        Contact
                    </NavLink>
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
                        <NavLink to='/portfolio/legal' onClick={closeMenu} >Legal Notice </NavLink> 
                        |
                        <NavLink to='/portfolio/privacy' onClick={closeMenu} > Privacy Policy</NavLink>
                    </div>
                </footer>
            </div>
        );
    } else {
        return (
            <div className='MenuHmb' >
                <div className='CloseHmb' onClick={closeMenu} >
                    <img src={close} alt='close button' ></img>
                </div>
                <div className='nav-items'>
                    <NavLink className='nav-item li-marg-bot1' to='/portfolio' onClick={closeMenu} >Start</NavLink>
                    <NavLink className='nav-item li-marg-bot1' to='/portfolio/about' onClick={closeMenu} >Über mich</NavLink>
                    <NavLink className='nav-item li-marg-bot2' to='/portfolio/projects' onClick={closeMenu} >Projekte</NavLink>
                    <NavLink className='btn-contact' to='/portfolio/contact' onClick={closeMenu} >
                        Kontakt
                    </NavLink>
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
                        <NavLink to='/portfolio/legal' onClick={closeMenu} >Impressum </NavLink> 
                        |
                        <NavLink to='/portfolio/privacy' onClick={closeMenu} > Datenschutz</NavLink>
                    </div>
                </footer>
            </div>
        );
    }
    };

export default MenuHmb;