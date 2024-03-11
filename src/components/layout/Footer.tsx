import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='py-8 items-center w-full flex flex-col medium:flex-row medium:justify-between medium:px-7.5 large:px-15 xlarge:px-0 xlarge:w-8xl xlarge:mx-auto gap-5 text-secondary'>
            <p className='text-sm tracking-tight leading-4.5 font-medium text-secondary'>
                Thimo van Ewijk &copy; 2023 - {new Date().getFullYear()}.
            </p>
            <div className='flex gap-8 text-larger leading-5'>
                <a className='hover:text-white hover:scale-110 duration-500' href="/" target='_blank'>
                    <FaLinkedinIn />
                </a>
                <a className='hover:text-white hover:scale-110 duration-500' href="/" target='_blank'>
                    <FaInstagram />
                </a>
                <a className='hover:text-white hover:scale-110 duration-500' href="/" target='_blank'>
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}

export default Footer