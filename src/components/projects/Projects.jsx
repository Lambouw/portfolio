import React, { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { LangContext } from "../../App";

import './Projects.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper';

import html5 from '../../assets/images/html5.png';
import css3 from '../../assets/images/css3.png';
import javascript from '../../assets/images/javascript.png';
import react from '../../assets/images/react.png';
import site from '../../assets/images/arrow-up-right.svg';
import github from '../../assets/images/github.svg';

const Projects = () => {
    const { lang } = useContext(LangContext);

    if (lang === 'eng') {
        return (
            <div className='projects' >
                <h2>Projects</h2>
                <Swiper
                    className='swiper mySwiper'
                    navigation={true}
                    pagination={{
                        type: 'bullets',
                    }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='swiper-slide' >
                            <div className='project-container' >
                                <div className='img-wrapper fmmg' >
                                    <div className='description' >
                                        <p>This app randomly generates a FIFA 22 manager career mode mission</p>
                                        <div >
                                            <a href='https://lambouw.github.io/Football-Manager-Mission-Generator' aria-label='site link' target='_blank' ><button className='btn-project' ><img src={site} alt='site' ></img></button></a>
                                            <a href='https://github.com/Lambouw/Football-Manager-Mission-Generator' aria-label='github link' target='_blank' ><button className='btn-project' ><img src={github} alt='github' ></img></button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='title'  >
                                    <h4>Football Manager Mission Generator</h4>
                                    <div className='icon-container' >
                                        <img className='icon' src={html5} alt='html5' ></img>
                                        <img className='icon' src={css3} alt='css3' ></img>
                                        <img className='icon' src={javascript} alt='javascript' ></img>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide' >
                            <div className='project-container' >
                            <div className='img-wrapper portfolio' >
                                    <div className='description' >
                                        <p>My first portfolio website</p>
                                        <div className='buttons' >
                                            <a href='https://www.maltelindemann.com' aria-label='site link' target='_blank' ><button className='btn-project' ><img src={site} alt='site' ></img></button></a>
                                            <a href='https://github.com/Lambouw/portfolio' aria-label='github link' target='_blank' ><button className='btn-project' ><img src={github} alt='github' ></img></button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='title' >
                                    <h4>Portfolio Website</h4>
                                    <div className='icon-container' >
                                        <img className='icon' src={html5} alt='html5' ></img>
                                        <img className='icon' src={css3} alt='css3' ></img>
                                        <img className='icon' src={javascript} alt='javascript' ></img>
                                        <img className='icon' src={react} alt='react' ></img>
                                    </div>
                                </div>
                            </div>   
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    } else {
        return (
            <div className='projects white' >
                <h2>Projekte</h2>
                <Swiper
                    className='swiper mySwiper'
                    navigation={true}
                    pagination={{
                        type: 'bullets',
                    }}
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='swiper-slide' >
                            <div className='project-container' >
                                <div className='img-wrapper fmmg' >
                                    <div className='description' >
                                        <p>Diese App generiert eine zufällige Mission für den FIFA 22 Manager Modus</p>
                                        <div >
                                            <a href='https://lambouw.github.io/Football-Manager-Mission-Generator' aria-label='site link' target='_blank' ><button className='btn-project' ><img src={site} alt='site' ></img></button></a>
                                            <a href='https://github.com/Lambouw/Football-Manager-Mission-Generator' aria-label='github link' target='_blank' ><button className='btn-project' ><img src={github} alt='github' ></img></button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='title'  >
                                    <h4>Football Manager Mission Generator</h4>
                                    <div className='icon-container' >
                                        <img className='icon' src={html5} alt='html5' ></img>
                                        <img className='icon' src={css3} alt='css3' ></img>
                                        <img className='icon' src={javascript} alt='javascript' ></img>
                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide' >
                            <div className='project-container' >
                            <div className='img-wrapper portfolio' >
                                    <div className='description' >
                                        <p>Meine erste Portfolio Webseite</p>
                                        <div className='buttons' >
                                            <a href='https://www.maltelindemann.com' aria-label='site link' target='_blank' ><button className='btn-project' ><img src={site} alt='site' ></img></button></a>
                                            <a href='https://github.com/Lambouw/portfolio' aria-label='github link' target='_blank' ><button className='btn-project' ><img src={github} alt='github' ></img></button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='title' >
                                    <h4>Portfolio Webseite</h4>
                                    <div className='icon-container' >
                                        <img className='icon' src={html5} alt='html5' ></img>
                                        <img className='icon' src={css3} alt='css3' ></img>
                                        <img className='icon' src={javascript} alt='javascript' ></img>
                                        <img className='icon' src={react} alt='react' ></img>
                                    </div>
                                </div>
                            </div>   
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }   

    return (
        <div className='projects white' >
            <h2>Projects</h2>
            <Swiper
                className='swiper mySwiper'
                navigation={true}
                pagination={{
                    type: 'bullets',
                }}
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='swiper-slide' >
                        <div className='project-container' >
                            <div className='img-wrapper fmmg' >
                                <div className='description' >
                                    <p>This app randomly generates a FIFA 22 manager career mode mission</p>
                                    <div className='buttons' >
                                        <a href='https://lambouw.github.io/Football-Manager-Mission-Generator' aria-label='site link' target='_blank' ><button className='btn-project' ><img src={site} alt='site' ></img></button></a>
                                        <a href='https://github.com/Lambouw/Football-Manager-Mission-Generator' aria-label='github link' target='_blank' ><button className='btn-project' ><img src={github} alt='github' ></img></button></a>
                                    </div>
                                </div>
                            </div>
                            <div className='title'  >
                                <h4>Football Manager Mission Generator</h4>
                                <div className='icon-container' >
                                    <img className='icon' src={html5} alt='html5' ></img>
                                    <img className='icon' src={css3} alt='css3' ></img>
                                    <img className='icon' src={javascript} alt='javascript' ></img>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' >
                        <div className='project-container' >
                        <div className='img-wrapper portfolio' >
                                <div className='description' >
                                    <p>My first portfolio website</p>
                                    <div className='buttons' >
                                        <a href='https://www.maltelindemann.com' aria-label='site link' target='_blank' ><button className='btn-project' ><img src={site} alt='site' ></img></button></a>
                                        <a href='https://github.com/Lambouw/portfolio' aria-label='github link' target='_blank' ><button className='btn-project' ><img src={github} alt='github' ></img></button></a>
                                    </div>
                                </div>
                            </div>
                            <div className='title' >
                                <h4>Portfolio Website</h4>
                                <div className='icon-container' >
                                    <img className='icon' src={html5} alt='html5' ></img>
                                    <img className='icon' src={css3} alt='css3' ></img>
                                    <img className='icon' src={javascript} alt='javascript' ></img>
                                    <img className='icon' src={react} alt='react' ></img>
                                </div>
                            </div>
                        </div>   
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;