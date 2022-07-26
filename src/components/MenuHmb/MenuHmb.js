import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'; 

import ToggleTheme from '../navbar/ToggleTheme';
import ToggleLang from '../navbar/ToggleLang.js';

import close from '../../assets/images/x.svg';

import './MenuHmd.css';

const MenuHmb = () => {
    const closeMenu = () => {
        let hamburger = document.getElementsByClassName("MenuHmb")[0];
        hamburger.style.display = "none";
        console.log("close hamburger menu");
    }
    
    return (
        <div className='MenuHmb' >
            <div className='CloseHmb' onClick={closeMenu} >
                <img src={close} alt='close button' ></img>
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
        </div>
    );
};

export default MenuHmb;