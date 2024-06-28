import ProductCard from '@/app/Components/ProductCard'
import Wrapper from '@/app/Components/Wrapper'
import React from 'react'

const page = () => {
  return (
    <div className='w-full md:py-12'>
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                <h2 className='uppercase'>Jordan Shoes</h2>
            </div>
        </div>
        <section id="product" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 py-4 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </Wrapper>
    </div>
  )
}

export default page