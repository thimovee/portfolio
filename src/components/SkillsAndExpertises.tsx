"use client"
import React, { useEffect, useRef } from 'react'
import ExpertiseCard from './ExpertiseCard'
import Expertises from '@/lib/skillAndExpertise'
import { useScroll } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Link from 'next/link'
import AnimateOnView from './AnimateOnView'

const SkillsAndExpertises = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <>
            <section className="h-fit relative pt-6 tracking-tight grid grid-cols-1 medium:grid-cols-2 medium:gap-7.5">
                <AnimateOnView className='medium:sticky h-fit top-[100px] flex flex-col mb-12 gap-12'>
                    <div className='text-base text-secondary font-medium px-4 py-2 rounded-full border border-[#ffffff26] max-w-fit'>Skills & Expertise</div>
                    <h4 className=" z-[999999] text-3.5xl tracking-tighter medium:text-[38px] medium:leading-[48px]  font-semibold">Mijn persoonlijke vaardigheden en expertises</h4>
                    <Link className="hidden bg-white medium:bg-[#ffffff12] medium:block text-center w-full medium:w-fit  font-semibold text-[17px] tracking-tight leading-none py-3 px-5 rounded-full" href="/portfolio">
                        <span className="text-[#7218e5] medium:text-transparent medium:bg-gradient-to-l medium:from-gradient-start medium:to-gradient-end medium:bg-clip-text ">Meer over mij</span>
                    </Link>
                </AnimateOnView>
                <AnimateOnView delay={0.50}>
                    <div className='relative flex flex-col' ref={container}>
                        {Expertises.map((expertise, i) => {
                            const targetScale = 1 - ((Expertises.length - i) * 0.03);
                            return <ExpertiseCard expertise={expertise} key={expertise.title} order={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                        })}
                    </div>
                </AnimateOnView>
            </section>
            <Link className="mb-24 medium:hidden bg-white medium:bg-[#ffffff12] mt-12 block text-center w-full medium:w-fit medium:mx-auto  font-semibold text-[17px] tracking-tight leading-none py-3 px-5 rounded-full" href="/portfolio">
                <span className="text-[#7218e5] medium:text-transparent medium:bg-gradient-to-l medium:from-gradient-start medium:to-gradient-end medium:bg-clip-text ">
                    Meer over mij
                </span>
            </Link>
        </>
    )
}

export default SkillsAndExpertises