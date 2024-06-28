'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductDetailsCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='w-full'>
        <>
      <Swiper
        style={{
          '--swiper-navigation-color': 'black',
          '--swiper-pagination-color': 'black',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src='/assets/p1.png' className='w-full h-96 object-cover '/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/p2.png" className='w-full h-96 object-cover' />
        </SwiperSlide>       
        <SwiperSlide>
          <img src="/assets/p3.png" className='w-full h-96 object-cover' />
        </SwiperSlide>       
        <SwiperSlide>
          <img src="/assets/p4.png" className='w-full h-96 object-cover' />
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
          <img src='/assets/p1.png' className=' w-30'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/p2.png" className=' w-30'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/p3.png" className=' w-30'/>
        </SwiperSlide>       
        <SwiperSlide>
          <img src="/assets/p4.png" className=' w-30'/>
        </SwiperSlide> 
      </Swiper>
    </>
    </div>
  )
}

export default ProductDetailsCarousel
