"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    const path = usePathname()
    return (
        <div className='tracking-tight px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-8xl xlarge:mx-auto w-full mx-auto flex flex-col'>
            {path !== "/contact" && <div className='bg-[linear-gradient(to_bottom,_#3c0096,_#5924af,_#753fc9,_#915ae4,_#ac75ff)] mt-24 flex flex-col items-center px-8 py-14 medium:p-7.5 large:px-8 large:py-14 border border-border rounded-[20px]'>
                <h5 className='max-w-[600px]  text-center text-4xl large:text-5xl font-semibold'>
                    Een vraag of een project?
                </h5>
                <p className='max-w-[600px]  text-center text-sm large:base leading-[27px] text-secondary mt-[30px] large:mt-6 mb-12 large:mb-14'>
                    Ik ben altijd op zoek naar nieuwe uitdagingen en projecten. Neem contact met me op en ik zal zo snel mogelijk reageren.
                </p>
                <Link className='bg-black text-white px-12 py-6 tracking-tighter font-semibold text-[32px] leading-[42px] medium:text-5xl large:text-[64px] large:leading-[74px] leading rounded-full' href='/contact'>Contact</Link>
            </div>}
            <footer className='py-8 items-center w-full flex flex-col medium:flex-row medium:justify-between medium:px-7.5 large:px-15 xlarge:px-0 xlarge:w-8xl xlarge:mx-auto gap-5 text-secondary'>
                <p className='text-sm tracking-tight leading-4.5 font-medium text-secondary'>
                    Thimo van Ewijk &copy; 2023 - {new Date().getFullYear()}.
                </p>
                <div className='flex gap-8 text-larger leading-5'>
                    <a className='hover:text-white hover:scale-110 duration-500' href="https://www.linkedin.com/in/thimo-van-ewijk-43a1122a5/" target='_blank' rel='noreferrer'>
                        <FaLinkedinIn />
                    </a>
                    <a className='hover:text-white hover:scale-110 duration-500' href="https://github.com/thimovee" target='_blank' rel='noreferrer'>
                        <FaGithub />
                    </a>
                </div>
            </footer>
        </div >
    )
}

export default Footer