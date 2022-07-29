import React, { useContext } from 'react';
import { LangContext } from "../../App";

import ger from '../../assets/images/flagde.png';
import eng from '../../assets/images/flaguk.svg';

const ToggleLang = () => {
    const { lang, toggleLang } = useContext(LangContext);
    
    let img;
    if (lang === 'eng') {
        img = <img onClick={() => {toggleLang()}} src={ger} alt='ger flag' aria-label='ger-mode-switch' ></img>
    } else {
        img = <img onClick={() => {toggleLang()}} src={eng} alt='eng flag' aria-label='eng-mode-switch' ></img>
    }

    return (
        <div className='lang' >
            {img}     
        </div>
    );
};

export default ToggleLang;