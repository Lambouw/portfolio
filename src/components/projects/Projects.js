import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
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
import fmmg from '../../assets/images/FMMG.png';
import redditcl from '../../assets/images/reddit-client.png';

const Projects = () => {
    const { lang, toggleLang } = useContext(LangContext);

    return (
        <div className='projects white' >
            { lang === 'eng' ? <h2>Projects</h2> : <h2>Projekte</h2> }
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
                    <NavLink to='/portfolio/projects/1' >
                        <div className='project-container' >
                            <img className='img-container' src={fmmg} alt='fmmg-image' />
                            <div className='description' >
                                <h4>Football Manager Mission Generator</h4>
                                <div className='icon-container' >
                                    <img className='icon' src={html5} alt='html5' ></img>
                                    <img className='icon' src={css3} alt='css3' ></img>
                                    <img className='icon' src={javascript} alt='javascript' ></img>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide' >
                    <NavLink to='/portfolio/projects/2' >
                        <div className='project-container' >
                                <img className='img-container' src={redditcl} alt='' />
                                <div className='description' >
                                    <h4>Reddit Client</h4>
                                    <div className='icon-container' >
                                        <img className='icon' src={html5} alt='html5' ></img>
                                        <img className='icon' src={css3} alt='css3' ></img>
                                        <img className='icon' src={javascript} alt='javascript' ></img>
                                        <img className='icon' src={react} alt='react' ></img>
                                    </div>
                                </div>
                            </div>   
                    </NavLink>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;