'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard'

const RelatedProducts = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
            }
            }
  return (
    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
        <div className='text-2xl font-bold mb-5'>Your Might also like </div>
        <Carousel responsive={responsive}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Carousel>
    </div>
  )
}

export default RelatedProducts