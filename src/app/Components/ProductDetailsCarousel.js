'use client';

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductDetailsCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='py-4'>
      <Swiper
        style={{
          '--swiper-navigation-color': 'black',
          '--swiper-pagination-color': 'black',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-60 mb-4"
      >
          <SwiperSlide>
            <div className='flex h-full items-center justify-center'>
               <img src="/assets/p1.png" className="w-10/12 md:w-6/12 object-cover cursor-pointer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full items-center justify-center'>
               <img src="/assets/p2.png" className="w-10/12 md:w-6/12 object-cover cursor-pointer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full items-center justify-center'>
               <img src="/assets/p3.png" className="w-10/12 md:w-6/12 object-cover cursor-pointer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex h-full items-center justify-center'>
               <img src="/assets/p4.png" className="w-10/12 md:w-6/12 object-cover cursor-pointer" />
            </div>
          </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
          <SwiperSlide>
            <img src="/assets/p1.png" className="w-full object-cover cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/p2.png" className="w-full object-cover cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/p3.png" className="w-full object-cover cursor-pointer" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/p4.png" className="w-full object-cover cursor-pointer" />
          </SwiperSlide>      
        </Swiper>
    </div>
  )
}

export default ProductDetailsCarousel
