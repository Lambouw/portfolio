import React from "react";
import { NavLink, Link } from 'react-router-dom';
import Footer from '../footer/Footer';

import './Home.css';

function Home() {
    return (
        <div className='home white' >    
            <div className='hero'>
                <div className='name'>Hi, I’m Malte Lindemann.</div>

                <div className='description' >
                    Welcome to my Website, here you can get to know me and watch my previous projects. 
                    My name is Malte Lindemann, currently studying my masters in mechanical engineering at the university of Stuttgart. 
                    Below you can find a link to all of my socials.
                </div>
            </div>

            <div className='btns-socials' >
                <a className='btn-socials' href='https://www.linkedin.com/in/malte-lindemann-b9533b209/' target='_blank' rel='external' >
                    LinkedIn
                </a>
                <a className='btn-socials' href='https://github.com/Lambouw' target='_blank' rel='external' >
                    GitHub
                </a>
                <a className='btn-socials' href='https://instagram.com/malte.lm' target='_blank' rel='external' >
                    Instagram
                </a>
            </div>
        </div>
    );
}

export default Home;