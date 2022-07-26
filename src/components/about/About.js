import React, { useContext } from "react";

import { LangContext } from "../../App";

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
    const { lang } = useContext(LangContext);

    if (lang === 'eng') {
        return (
           <div className='about-wrapper' >
               <div className='about'>
                   <div className='header-btn' >
                       <h2>About</h2>
                   </div>
                   <div className='about-text' >
                       My Name is Malte and I'm 25 years old. Currently im studying my masters in the 
                       field of mechanical engineering, but with a specification of digitalization of the producing industries. 
                       During my studies I came across C++ and C#, which inspired me to learn more about software engineering. 
                       While diving deeper into the topic I started to like web development the most. So here I am! 
                       Learning web development, right now focussing on the Front-End and getting more and more Experience.
                   </div>
                   <h3>Skills</h3>
                   <div className='skills' >
                        <div>
                            <img className='skill-img' src={html5} alt='HTML5' ></img>
                            <div>HTML5</div>
                        </div>
                        <div>
                            <img className='skill-img' src={css3} alt='CSS3' ></img>
                            <div>CSS3</div>
                        </div>
                        <div>
                            <img className='skill-img' src={javascript} alt='JavaScript' ></img>
                            <div>JavaScript</div>
                        </div>
                        <div>
                            <img className='skill-img' src={react} alt='react' ></img>
                            <div>React</div>
                        </div>
                        <div>
                            <img className='skill-img' src={jsx} alt='jsx' ></img>
                            <div>JSX</div>
                        </div>
                        <div>
                            <img className='skill-img' src={node} alt='Node' ></img>
                            <div>Node</div>
                        </div>
                        <div>
                            <img className='skill-img' src={webpack} alt='Webpack' ></img>
                            <div>Webpack</div>
                        </div>
                        <div>
                            <img className='skill-img' src={figma} alt='Figma' ></img>
                            <div>Figma</div>
                        </div>
                   </div>
               </div>
           </div>
       );
    } else {
        return (
            <div className='about-wrapper' >
                <div className='about'>
                    <div className='header-btn' >
                        <h2>Über mich</h2>
                    </div>
                    <div className='about-text' >
                        Ich heiße Malte und bin 25 Jahre alt. Ich studiere im Master Maschinenbau an der Uni Stuttgart mit einer Vertiefung in der Digitalisierung von Produktionen. 
                        Durch mein Studium bin ich über C++ und C# gestolpert, was mich inspiriert hat mehr über Softwareentwicklung zu lernen.
                        Während dem tiefern Eintauchen begeisterte mich die Webentwicklung am meisten. Also hab ich mich darauf gestürzt!
                        Mein Fokus liegt auf der Front-End Entwicklung.
                    </div>
                    <h3>Kompetenzen</h3>
                    <div className='skills' >
                        <div>
                            <img className='skill-img' src={html5} alt='HTML5' ></img>
                            <div>HTML5</div>
                        </div>
                        <div>
                            <img className='skill-img' src={css3} alt='CSS3' ></img>
                            <div>CSS3</div>
                        </div>
                        <div>
                            <img className='skill-img' src={javascript} alt='JavaScript' ></img>
                            <div>JavaScript</div>
                        </div>
                        <div>
                            <img className='skill-img' src={react} alt='react' ></img>
                            <div>React</div>
                        </div>
                        <div>
                            <img className='skill-img' src={jsx} alt='jsx' ></img>
                            <div>JSX</div>
                        </div>
                        <div>
                            <img className='skill-img' src={node} alt='Node' ></img>
                            <div>Node</div>
                        </div>
                        <div>
                            <img className='skill-img' src={webpack} alt='Webpack In' ></img>
                            <div>Webpack</div>
                        </div>
                        <div>
                            <img className='skill-img' src={figma} alt='Figma' ></img>
                            <div>Figma</div>
                        </div>
 
                    </div>
                </div>
            </div>
        );
    }   
}

export default About;