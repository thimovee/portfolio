import Link from 'next/link'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { FaCodepen } from 'react-icons/fa'

export default function Navbar() {
    return (
        <footer className="w-[1250px] h-[60px] mx-auto border-t-2 border-[#424050] my-12 flex justify-between">
            <div className="my-auto text-[16px] leading-6 font-normal">© 2023 Thimo van Ewijk</div>
            <div className="flex my-auto">
                <IoIosMail className="w-9 h-9 mr-5" />
                <FaCodepen className="w-9 h-9 mr-5" />
                <BsGithub className="w-9 h-9 mr-5" />
                <BsLinkedin className="w-9 h-9" />
            </div>
        </footer>
    )
}