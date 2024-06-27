import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
        <Link href={'/Product/1'}>
            <div className="shadow-b shadow-md overflow-hidden">
                <img className='w-full max-h-72 object-cover hover:scale-105 transition-all duration-200 ease-in-out' src='/assets/product-1.webp' alt='product Image' />
                <div className='p-4 text-black/[0.9]'>
                    <h2 className='text-lg font-serif'>product Name</h2>
                    <div className='flex items-center py-2'>
                        <span className='text-base font-medium text-gray-500 font-explora'>$ 100.00</span>
                        <span className='text-sm font-medium text-gray-300 ml-2 line-through'>$ 20.00</span>
                        <p className='ml-auto text-base font-medium text-green-400'>20% off</p>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default ProductCard