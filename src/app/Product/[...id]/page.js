import ProductDetailsCarousel from '@/app/Components/ProductDetailsCarousel'
import RelatedProducts from '@/app/Components/RelatedProducts';
import Wrapper from '@/app/Components/Wrapper'
import Link from 'next/link';
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";

const page = () => {
  return (
    <div className='w-full md:py-12'>
        <Wrapper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 overflow-hidden'>
                    <ProductDetailsCarousel />
                </div>
                <div className='flex-[1] py-3'>
                    <div className="text-[34px] font-semibold mb-2 leading-tight">
                        Jordan 4
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-lg font-semibold mb-5">
                        Nke air jordan 4
                    </div>
                    <p className="mr-2 text-lg font-semibold">
                        MRP : &#8377;s 700.00
                    </p>
                    <div className="text-md font-medium text-black/[0.5]">
                        incl. of taxes
                    </div>
                    <div className="text-md font-medium text-black/[0.5] mb-20">
                        {`(Also includes all applicable duties)`}
                    </div>
                    <div className='mb-10'>
                        <div className='flex justify-between mb-2'>
                            <div className='text-md font-semibold'>Select Size</div>
                            <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                Select Guide
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 6</div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 7</div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 8</div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 9</div>
                        <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 10</div>
                        <div disabled className='border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50'>UK 11</div>
                    </div>
                    <div className='text-red-600 mt-1'>
                        Size Selection is required
                    </div>
                    <div className='py-4 my-4'>
                        <Link href={'/Cart'}>
                            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                                Add to Cart
                            </button>
                        </Link>
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                    </div>
                    <div>
                        <div className="text-lg font-bold mb-5">
                            Product Details
                        </div>
                        <div className="text-md mb-5">
                            <p>
                                ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget
                                dignissim aliquam, nunc nunc ultricies nunc, eu lacinia
                                ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget
                                dignissim aliquam, nunc nunc ultricies nunc, eu lacinia
                                <br />
                                <br />
                                ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget
                                dignissim aliquam, nunc nunc ultricies nunc, eu lacinia                            
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts />
        </Wrapper>
    </div>
  )
}

export default page