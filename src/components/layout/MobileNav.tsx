'use client'
import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import AnimateOnView from "../AnimateOnView";
import Link from "next/link";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('stop-scroll');
        } else {
            document.body.classList.remove('stop-scroll');
        }
    }, [isOpen]);

    return (
        <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={cn(isOpen ? "right-8" : "right-4", 'z-[100] fixed top-4')}>
                {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
            </button>

            {isOpen && (
                <div className='fixed inset-0 z-[90] flex justify-center items-center'>
                    <div className='w-full h-full flex flex-col gap-5'>
                        <ul className='flex flex-col gap-10 bg-black backdrop-blur-xl min-h-screen py-32 px-5 z-[100] w-full'>
                            <AnimateOnView delay={0.10}>
                                <Link onClick={() => setIsOpen(false)} href="/">
                                    <li className={cn('font-semibold border-b pb-6', pathname === '/' ? 'text-white border-white' : "text-neutral-400 border-neutral-700")}>
                                        Home
                                    </li>
                                </Link>
                            </AnimateOnView>
                            <Link onClick={() => setIsOpen(false)} href="/portfolio">
                                <AnimateOnView delay={0.20}>
                                    <li className={cn('font-semibold border-b pb-6', pathname === '/portfolio' ? 'text-white border-white' : "text-neutral-400 border-neutral-700")}>
                                        Portfolio
                                    </li>
                                </AnimateOnView>
                            </Link>
                            <Link onClick={() => setIsOpen(false)} href="/over-mezelf">
                                <AnimateOnView delay={0.30}>
                                    <li className={cn('font-semibold border-b pb-6', pathname === '/over-mezelf' ? 'text-white border-white' : "text-neutral-400 border-neutral-700")}>
                                        Over mezelf
                                    </li>
                                </AnimateOnView>
                            </Link>
                            <Link onClick={() => setIsOpen(false)} href="/blog">
                                <AnimateOnView delay={0.40}>
                                    <li className={cn('font-semibold border-b pb-6', pathname === '/blog' ? 'text-white border-white' : "text-neutral-400 border-neutral-700")}>
                                        Blog
                                    </li>
                                </AnimateOnView>
                            </Link>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};


export default MobileNav;
