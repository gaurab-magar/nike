import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import Link from 'next/link';

const Menu = ({showCategoryMenu , setShowCategoryMenu }) => {
    const data = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", link: "/contact" },
    ];
    const subMenu = [
        { id: 5, name: "Jordan", doc_count:11 },
        { id: 6, name: "Sneakers",  doc_count:8 },
        { id: 7, name: "Running Shoes", doc_count:64 },
        { id: 8, name: "Football Shoes", doc_count:107 },

    ]
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
        {data.map((item)=>{
            return(
                <React.Fragment key={item.id}>
                    {
                        !!item.subMenu ? (
                                    <li className='relative cursor-pointer flex items-center gap-2'
                                        onMouseEnter={()=> setShowCategoryMenu(true)}
                                        onMouseLeave={()=> setShowCategoryMenu(false)}>
                                        {item.name}
                                        <FaChevronDown size={14} />
                                        {showCategoryMenu && (
                                            <ul className='p-2 bg-white absolute top-6 left-0 min-w-[250px] px-1 text-black shadow-md'>
                                                {subMenu.map((submenu) => {
                                                    return(
                                                        <Link key={submenu.id} href={`/category/${[2]}`} onClick={()=> setShowCategoryMenu(false)} >
                                                            <li className=' h-12 flex justify-between items-center p-3 hover:bg-black/[0.03] rounded-md'>
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
                        <li className='cursor-pointer'>
                            <Link href={item.link}>
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

export default Menu