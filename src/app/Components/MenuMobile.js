import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import Link from 'next/link';

const MenuMobile = ({showCategoryMenu , setShowCategoryMenu, setMobileMenu }) => {
    const data = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 8, name: "Contact", link: "/contact" },
    ];
    const subMenu = [
        { id: 4, name: "Jordan", doc_count:11 },
        { id: 5, name: "Sneakers",  doc_count:8 },
        { id: 6, name: "Running Shoes", doc_count:64 },
        { id: 7, name: "Football Shoes", doc_count:107 },

    ]
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black '>
        {data.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                    {
                        !!item.subMenu ? (
                                    <li className='relative cursor-pointer flex flex-col py-4 px-5 border-b'
                                        onClick={()=> setShowCategoryMenu(!showCategoryMenu)}>
                                        <div className='flex justify-between items-center'>
                                            {item.name}
                                            <FaChevronDown size={14} />
                                        </div>
                                        {showCategoryMenu && (
                                            <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                                                {subMenu.map((submenu) => {
                                                    return(
                                                        <Link key={submenu.id} href='/' onClick={()=>{
                                                            setShowCategoryMenu(false)
                                                            setMobileMenu(false)
                                                         } } >
                                                            <li className='py-4 px-8 border-t flex justify-between'>
                                                                {submenu.name}
                                                                <span className='text-xs text-gray-500 opacity-50'>{submenu.doc_count}</span>
                                                            </li>
                                                        </Link>
                                                    )
                                                })}
                                            </ul>
                                        )}
                                    </li>
                        ):(
                        <li className='py-4 px-5 border-b'>
                            <Link href={item.link} onClick={()=>setMobileMenu(false)}>
                                {item.name}
                            </Link>
                        </li>
                        )
                    }
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default MenuMobile;