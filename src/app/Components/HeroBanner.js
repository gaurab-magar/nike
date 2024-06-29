'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const HeroBanner = () => {
  return (
    <section>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{delay:2000,
            disableOnInteraction:false}}
            modules={[Autoplay]}
            className="mySwiper h-[15rem] md:h-[28rem]"
            >
            <SwiperSlide>
                <img src="/assets/slide-3.png" alt="hero-banner-1"
                className="w-full h-full object-cover" />
                <button className='absolute bottom-3 left-0 px-[15px] md:px-[40px] py-[10px] md:py-[20px] bg-white/[0.5] text-black font-bold text-sm md:text-lg uppercase cursor-pointer hover:opacity-90'>Shop now</button>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/slide-2.png" alt="hero-banner-2"
                className="w-full h-full object-cover" />
                <button className='absolute bottom-3 left-0 px-[15px] md:px-[40px] py-[10px] md:py-[20px] bg-white/[0.5] text-black font-bold text-sm md:text-lg uppercase cursor-pointer hover:opacity-90'>Shop now</button>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/slide-1.png" alt="hero-banner-2"
                className="w-full h-full object-cover" />
                <button className='absolute bottom-3 left-0 px-[15px] md:px-[40px] py-[10px] md:py-[20px] bg-white/[0.5] text-black font-bold text-sm md:text-lg uppercase cursor-pointer hover:opacity-90'>Shop Now</button>
            </SwiperSlide>         
        </Swiper>
    </section>
  )
}

export default HeroBanner