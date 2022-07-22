import React, { useContext, useEffect } from 'react';
import { ThemeContext } from "../../App";

import moon from '../../assets/images/moon.svg';
import sun from '../../assets/images/sun.svg';

const ToggleTheme = () => {
    const { lang, toggleLang } = useContext(ThemeContext);
    
    let img;
    if (lang === 'eng') {
        img = <img onClick={() => {toggleTheme()}} src={sun} alt='sun icon' aria-label='light-mode-switch' ></img>
    } else {
        img = <img onClick={() => {toggleTheme()}} src={moon} alt='moon icon' aria-label='dark-mode-switch' ></img>
    }

    return (
        <div className='lang' >
            {img}     
        </div>
    );
};

export default ToggleTheme;