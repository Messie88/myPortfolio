import React, {useEffect, useRef, useState} from "react";

import $ from "jquery";

import { TweenMax, Power3, TimelineLite } from "gsap";

import './projects.scss';

import About from "../../images/about.jpg";
import About2 from "../../images/contact.jpeg";
import About3 from "../../images/portfolio2.jpeg";

// SwiperJS
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

//Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);





const Projects = () => {

    var title1 = useRef(null);
    var title2 = useRef(null);
    var title3 = useRef(null);
    var titleSpan1 = useRef(null);
    var titleSpan2 = useRef(null);
    var titleSpan3 = useRef(null);
    var num1 = useRef(null);
    var num2 = useRef(null);
    var num3 = useRef(null);

    useEffect(() => {
        TweenMax.from([title1, title2, title2,
             titleSpan1, titleSpan2, titleSpan3, 
             num1, num2, num3], 1.5, {
            y: 200
        })
    });


    return (
        <div id="projects">
            <div id="project-text">
                <h1>Projects</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Est, ipsum deleniti! Autem, at. Blanditiis, ab minima dicta,
                     quod iste quae aperiam distinctio assumenda</p>
           </div>
           <div className="project-content">
               <Swiper
                 spaceBetween={0}
                 initialSlide={0}
                 effect= {'slide'}
                 slidesPerView={1}
                 centeredSlides={true}
                 lazy={true}
                 pagination={{
                    type:'progressbar'
                 }}
                 grabCursor= {true}
                 onSwiper={(swiper) => console.log(swiper)}
                 onSlideChange={(swiper) => {
                 const activeSlide = swiper.activeIndex + 1;
                 $('.active-slide').html(activeSlide)
                 
                 }}
                >
                 <SwiperSlide>
                    <div className="custom">
                        <div className="title">
                            <div className="up">
                                <h3 ref={ el => title1=el}>Crown</h3>
                            </div>
                            <div className="down">
                                <h3 ref={ el => titleSpan1=el}>Clothing</h3>
                            </div>
                        </div>
                        
                        <img src={About} alt=""/>
                        <div className="num">
                            <h6><span ref={ el => num1=el}>01</span></h6>
                        </div>
                        
                    </div>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className="custom">
                        <div className="title">
                            <div className="up">
                                <h3 ref={ el => title2=el}>Crown</h3>
                            </div>
                            <div className="down">
                                <h3 ref={ el => titleSpan2=el}>Clothing</h3>
                            </div>
                        </div>>
                        
                        <img src={About2} alt=""/>
                        <div className="num">
                            <h6><span ref={ el => num2=el}>02</span></h6>
                        </div>
                    </div>>
                 </SwiperSlide>
                 <SwiperSlide>
                    <div className="custom">
                        <div className="title">
                            <div className="up">
                                <h3 ref={ el => title3=el}>Crown</h3>
                            </div>
                            <div className="down">
                                <h3 ref={ el => titleSpan3=el}>Clothing</h3>
                            </div>
                        </div>>
                        
                        <img src={About3} alt=""/>
                        <div className="num">
                            <h6><span ref={ el => num3=el}>03</span></h6>
                        </div>
                    </div>>

                 </SwiperSlide>
               </Swiper>
              
               <div className="progress">
                    <div className="active-slide"><h3>1</h3></div>
                    <h6>03</h6>
                </div>
           </div>

        </div>
    );
};

export default Projects;