import React from 'react'
import Wrapper from '../Components/Wrapper'
import Cartitem from '../Components/Cartitem'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='my-4 py-4 w-full mx-auto'>
        <Wrapper>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Shopping Cart
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-12 py-10'>
                <div className='flex-[2]'>
                    <div className="text-lg font-bold">
                        Cart Items
                    </div>
                    <Cartitem />
                    <Cartitem />
                    <Cartitem />
                </div>
                <div className='flex-[1]'>
                    <div className="text-lg font-bold">Summary</div>
                    <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                        <div className="flex justify-between">
                            <div className="uppercase text-md md:text-lg font-medium text-black">
                                Subtotal
                            </div>
                            <div className="text-md md:text-lg font-medium text-black">
                                &#8377;400.00
                            </div>
                        </div>
                        <div className="text-sm md:text-md py-5 border-t mt-5">
                            The subtotal reflects the total price of
                            your order, including duties and taxes,
                            before any applicable discounts. It does
                            not include delivery costs and
                            international transaction fees.
                        </div>
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
                <Image src={'/assets/empty-cart.jpg'} width={300} height={300} className='w-[300px] md:w-[400px]' />
                <span className='text-xl font-bold'>Your cart is empty</span>
                <span className='text-center mt-4'>
                    Looks like you have not added anything in youe cart.<br/>
                    Go ahead and explore top categories.
                </span>
                <Link href={'/'} className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'>
                    Continue Shopping
                </Link>
            </div>
        </Wrapper>
    </div>
  )
}

export default page