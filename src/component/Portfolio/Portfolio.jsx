import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import Sidebar from '../../img/sidebar.png'
import MusicApp from "../../img/musicapp.png"
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'

const Portfolio = () => {
  return (
   <div className="portfolio" id='Portfolio'>
    {/* Heading */}
    <span>Recent Projects</span>
    <span>Portfolio</span>
    <Swiper
    spaceBetween={30}
    slideActiveClass='red'
    slidesPerView={3}
    grabCursor={true}
    className='portfolio-slider'>
      <SwiperSlide><img src={Sidebar} alt="" /></SwiperSlide>
      <SwiperSlide><img src={MusicApp} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Ecommerce} alt="" /></SwiperSlide>
      <SwiperSlide><img src={HOC} alt="" /></SwiperSlide>
      ...
    </Swiper>
    </div>
   
  )
}

export default Portfolio
