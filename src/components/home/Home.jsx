import React, { useContext } from "react";

import './Home.css';

import { LangContext } from "../../App";

function Home() {
    const { lang } = useContext(LangContext);

    if (lang === 'eng') {
        return (
            <div className='home-wrapper' >    
                <div className='home' >    
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
            </div>
        );
    } else {
        return (
            <div className='home-wrapper' >  
                <div className='home' >    
                    <div className='hero'>
                        <div className='name'>Hallo, ich bin Malte Lindemann.</div>
                        <div className='description' >
                            Auf meiner Seite könnt ihr mich kennen lernen und meine bisherigen Projekte sehen. 
                            Ich studiere im Master Maschinenbau an der Uni Stuttgart. 
                            Unten sind meine Social Media Accounts verlinkt.
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
            </div>
        );
    }
}

export default Home;