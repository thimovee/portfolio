"use client"
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import slugify from 'slugify'

const Header = () => {
    const links = [
        { name: "home" },
        { name: "portfolio" },
        { name: "over mezelf" },
        { name: "blog" }
    ]

    const path = usePathname();

    return (
        <header className='backdrop-blur-md bg-[#00000099] !box-border flex justify-between items-center px-5 medium:p-2.5 py-2.5 shadow-[0px_1px_0px_0px_#ffffff26] medium:shadow-[0px_0px_0px_1px_#ffffff26] medium:rounded-[20px] border-border medium:m-5 medium:my-5 large:mx-[50px] xlarge:min-w-[1380px] xlarge:max-w-[1380px] xlarge:p-2.5 xlarge:mx-auto'>
            <div className='flex gap-2.5'>
                <Link href="/" className='active:scale-90 duration-300 relative w-7.5 medium:w-10 h-7.5 medium:h-10'>
                    <Image fill className='rounded-lg object-cover' src='/logo.png' alt='Logo' />
                </Link>
                <div className='flex flex-col text-xs leading-3.5 medium:text-sm medium:leading-5'>
                    <div className="font-bold">Thimo van Ewijk</div>
                    <p className='text-secondary'>Web Developer</p>
                </div>
            </div>
            <div className='flex gap-2 medium:hidden px-2.5 py-3.5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="white">
                    <rect width="20" height="2" fill="white" />
                    <rect y="10" width="20" height="2" fill="white" />
                </svg>
            </div>
            <ul className='tracking-tight capitalize hidden medium:flex gap-5 font-medium text-sm leading-6 medium:text-base medium:leading-6 text-secondary'>
                {links.map((link, i) => (
                    <li className='active:scale-95 hover:scale-105 hover:text-white duration-200' key={i}>
                        <Link className={cn(path.includes(slugify(link.name)) && "text-white", link.name === "home" && path === "/" && "text-white", link.name === "contact" && "bg-red-500 rounded-larger", "px-4 py-2.5")} href={link.name === "home" ? "/" : `/${slugify(link.name)}`}>{link.name}</Link>
                    </li>
                ))}
                <div className='w-[87px] flex items-center relative group'>
                    <div className={cn(path === "/contact" && "opacity-0", "animated-border-box-glow group-hover:opacity-0 duration-900 after:duration-[900ms] before:duration-[900ms]")}></div>
                    <Link href="/contact" className={cn(path === "/contact" && "text-white after:bg-purple !bg-[#FFFFFF80] before:opacity-0", "duration-200 active:scale-90 leading-[26px] after:hover:bg-purple hover:before:opacity-0 after:duration-[900ms] before:duration-100 hover:text-white animated-border-box hover:bg-[#FFFFFF80] bg-[#2E2E2E] text-center  items-center flex justify-center")}>
                        Contact
                    </Link>
                </div>
            </ul>
        </header >
    )
}

export default Header