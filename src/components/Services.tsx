import React from 'react'
import AnimatedWhenVisible from './AnimateOnView'
const Services = () => {
    return (
        <div className='pt-24 flex flex-col gap-12 large:gap-14'>
            <AnimatedWhenVisible>
                <h5 className='text-[32px] leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Services</h5>
            </AnimatedWhenVisible>
            <div className='grid grid-cols-1 gap-4 medium:gap-5 large:grid-cols-3 font-semibold text-secondary text-xl medium:text-[22px] medium:leading-8'>
                <AnimatedWhenVisible className='bg-[#101010] p-5 medium:p-[30px] rounded-[20px] flex gap-5 medium:gap-8'>
                    <span>01</span>
                    <span>Web Development</span>
                </AnimatedWhenVisible>
                <AnimatedWhenVisible delay={0.10} className='bg-[#101010] p-5 medium:p-[30px] rounded-[20px] flex gap-5 medium:gap-8'>
                    <span>02</span>
                    <span>
                        Web Design
                    </span>
                </AnimatedWhenVisible>
                <AnimatedWhenVisible delay={0.20} className='bg-[#101010] p-5 medium:p-[30px] rounded-[20px] flex gap-5 medium:gap-8'>
                    <span>03</span>
                    <span>E-commerce</span>
                </AnimatedWhenVisible>
            </div>
        </div>
    )
}

export default Services