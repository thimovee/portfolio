'use client'
import { BsMoonFill } from 'react-icons/bs'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    return (
        <nav className="lg:mx-[308px] h-[50px] mt-[18px] flex justify-between font-semibold">
            <div className="flex items-center">
                <Image src="" className="w-[50px] h-[50px] rounded-full cursor-zoom-in" width={50} height={50} />
                <div className="text-[18px] ml-4 leading-6 cursor-pointer">Thimo van Ewijk</div>
            </div>
            <div className="flex items-center">
                <ul className="flex mr-[55px] text-[16px] leading-6">
                    <li className="cursor-pointer hover:text-gray-500 hover:scale-105 transform transition duration-300">About</li>
                    <li className="cursor-pointer mx-[55px] hover:text-gray-500 hover:scale-105 transform transition duration-300">Portfolio</li>
                    <li className="cursor-pointer hover:text-gray-500 hover:scale-105 transform transition duration-300">Resume</li>
                </ul>
                <button className="mr-6 w-[138px] h-[50px] bg-[#424050] rounded-xl leading-[19.36px]">Contact me</button>
                <button className="w-[50px] h-[50px] bg-[#292B36] rounded-[7.5px]"><BsMoonFill className="w-[25px] h-[25px] mx-auto hover:rotate-12 duration-700 ease-in-out transition" /></button>
            </div>
        </nav>
    )
}