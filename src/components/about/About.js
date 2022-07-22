import React from "react";

import './About.css';

import html5 from '../../assets/images/html5.png';
import css3 from '../../assets/images/css3.png';
import javascript from '../../assets/images/javascript.png';
import react from '../../assets/images/react.png';
import jsx from '../../assets/images/jsx.png';
import node from '../../assets/images/node.png';
import webpack from '../../assets/images/webpack.png';
import figma from '../../assets/images/figma.png';


function About() {
    return (
        <div className='about-wrapper' >
            <div className='about'>
                <div className='header-btn' >
                    <div className='hidden' ></div>
                    <h2>About</h2>
                    <a className='btn-cv' href='Lebenslauf.pdf' download='CV_Malte_Lindemann.pdf' target='_blank' >
                        Download CV
                    </a>
                </div>
                <div className='about-text' >
                    My Name is Malte and I'm currently 25 years old. Currently im studying my masters in the 
                    field of mechanical engineering, but with a specification of digitalization of the producing industries. 
                    During my studies I came across C++ and C#, which inspired me to learn more about software engineering. 
                    While diving deeper into the topic I started to like web development the most. So here I am! 
                    Learning web development, right now focussing on the Front-End and getting more and more Experience.
                </div>
                <h3>Skills</h3>
                <div className='skills' >
                    <div>
                        <img className='skill-img' src={html5} alt='HTML5 Icon' ></img>
                        <div>HTML5</div>
                    </div>
                    <div>
                        <img className='skill-img' src={css3} alt='CSS3 Icon' ></img>
                        <div>CSS3</div>
                    </div>
                    <div>
                        <img className='skill-img' src={javascript} alt='JavaScript Icon' ></img>
                        <div>JavaScript</div>
                    </div>
                    <div>
                        <img className='skill-img' src={react} alt='react Icon' ></img>
                        <div>React</div>
                    </div>
                    <div>
                        <img className='skill-img' src={jsx} alt='jsx Icon' ></img>
                        <div>JSX</div>
                    </div>
                    <div>
                        <img className='skill-img' src={node} alt='Node Icon' ></img>
                        <div>Node</div>
                    </div>
                    <div>
                        <img className='skill-img' src={webpack} alt='Webpack Icon' ></img>
                        <div>Webpack</div>
                    </div>
                    <div>
                        <img className='skill-img' src={figma} alt='Figma Icon' ></img>
                        <div>Figma</div>
                    </div>
        
                </div>
            </div>
        </div>
    );
}

export default About;