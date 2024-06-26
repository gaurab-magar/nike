'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import Wrapper from './Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import { CiHeart } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import HeadRoomWrap from './HeadRoomWrap';
import MenuMobile from './MenuMobile';

const Header = () => {
  const [mobileMenu , setMobileMenu] = useState(false);
  const [showCategoryMenu , setShowCategoryMenu] = useState(false);
  return (
    <HeadRoomWrap>
      <nav>
        <div className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-30 sticky top-0 transition-transform duration-200 shadow-md`}>
            <Wrapper className={'flex items-center justify-between'}>
              <Link href={'/'}>
                <Image src={'/assets/logo.svg'} alt='headerimg' className='w-12' width={50} height={40}></Image>
              </Link>
              <Menu showCategoryMenu={showCategoryMenu} setShowCategoryMenu={setShowCategoryMenu} />
              {mobileMenu && 
              <MenuMobile showCategoryMenu={showCategoryMenu} setShowCategoryMenu={setShowCategoryMenu} setMobileMenu={setMobileMenu} />
              }
              <div className='flex items-center gap-1 text-black'>
                <div className='relative cursor-pointer text-2xl w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05]'>
                  <CiHeart />
                  <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>3</div>
                </div>
                <div className='relative cursor-pointer text-2xl w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05]'>
                  <BsCartDash />
                  <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>3</div>
                </div>
                <div className='w-8 md:hidden h-8 md:h-12 ml-2 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
                  {mobileMenu ? (
                    <IoMdClose className='text-[18px]'
                    onClick={()=> setMobileMenu(false)}/>
                  ):(
                    <RxHamburgerMenu className='text-[18px]'
                    onClick={()=> setMobileMenu(true)}/>
                  )}
                </div>
              </div>
            </Wrapper>
        </div>
      </nav>
    </HeadRoomWrap>
  )
}

export default Header