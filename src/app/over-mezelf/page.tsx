import React, { FC } from 'react'
import AnimatedWhenVisible from '@/components/AnimateOnView'
import { icons } from "@/components/ui/Icons";

const page: FC = () => {
    return (
        <div className='py-[38px] medium:py-[76px] large:pb-10 px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-8xl xlarge:mx-auto w-full mx-auto large:mx-0 flex justify-center'>
            <div className='w-full tracking-tight flex flex-col text-left medium:text-center  xlarge:w-full'>
                <AnimatedWhenVisible>
                    <h1 className='mx-auto text-center tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>Over mezelf</h1>
                </AnimatedWhenVisible>
                <div className='mt-12 large:mt-14 w-full  gap-12 large:gap-0 flex flex-col large:flex-row large:justify-between'>
                    <AnimatedWhenVisible delay={0.10}>
                        <div className="w-full max-h-[400px] h-[400px] medium:max-h-[500px] medium:h-[500px] medium:w-3/5 medium:mx-auto large:mx-0 large:aspect-[350/400] large:w-auto large:h-[400px] bg-blue-500 rounded-[20px]">

                        </div>
                    </AnimatedWhenVisible>
                    <AnimatedWhenVisible className="w-full text-left large:max-w-[60%]" delay={0.2}>
                        <p className='font-medium text-secondary text-base  '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                            <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.<br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                        </p>
                    </AnimatedWhenVisible>
                </div>
                <AnimatedWhenVisible variant="fadeInFromBottom" className='bg-[#101010] items-center rounded-[20px] my-16 px-9 py-5 gap-12 flex flex-col medium:flex-row medium:gap-0 medium:justify-between '>
                    <AnimatedWhenVisible variant="fadeInToRight" className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>10+</h4>
                        <p className='leading-7 text-base text-secondary font-medium tracking-[-0.5px]'>
                            Years of Experience
                        </p>
                    </AnimatedWhenVisible>
                    <AnimatedWhenVisible delay={0.10} variant="fadeInToRight" className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>72+</h4>
                        <p className='leading-7 text-base  text-secondary font-medium tracking-[-0.5px]'>
                            Projects completed
                        </p>
                    </AnimatedWhenVisible>
                    <AnimatedWhenVisible delay={0.20} variant="fadeInToRight" className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>95%</h4>
                        <p className='leading-7 text-base  text-secondary font-medium tracking-[-0.5px]'>
                            Client satisfction
                        </p>
                    </AnimatedWhenVisible>
                    <AnimatedWhenVisible delay={0.30} variant="fadeInToRight" className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>15</h4>
                        <p className='leading-7 text-base  text-secondary font-medium tracking-[-0.5px]'>
                            Design awards
                        </p>
                    </AnimatedWhenVisible>
                </AnimatedWhenVisible>
                <div className='flex flex-col text-left'>
                    <AnimatedWhenVisible>
                        <h5 className='text-[32px] mb-8 leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Ervaring</h5>
                    </AnimatedWhenVisible>
                    <AnimatedWhenVisible className='flex flex-col medium:flex-row medium:justify-between text-secondary'>
                        <div className='mb-6 text-base  large:leading-7'>2020 - Present</div>
                        <div className='flex flex-col medium:w-3/5'>
                            <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>Self-employed</h6>
                            <div className='leading-7 mt-1 mb-8'>Freelance Designer</div>
                            <p className='text-base  large:leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </AnimatedWhenVisible>
                </div>
                <AnimatedWhenVisible aria-hidden='true' className='bg-[#ffffff26] w-full h-px my-8'> </AnimatedWhenVisible>
                <AnimatedWhenVisible className='text-left flex flex-col medium:flex-row medium:justify-between text-secondary'>
                    <div className='mb-6 text-base  large:leading-7'>2020 - Present</div>
                    <div className='flex flex-col medium:w-3/5'>
                        <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>Self-employed</h6>
                        <div className='leading-7 mt-1 mb-8'>Freelance Designer</div>
                        <p className='text-base  large:leading-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </AnimatedWhenVisible>
                <AnimatedWhenVisible aria-hidden='true' className='bg-[#ffffff26] w-full h-px my-8'> </AnimatedWhenVisible>
                <AnimatedWhenVisible className='text-left'>
                    <div className='flex flex-col medium:flex-row medium:justify-between text-secondary'>
                        <div className='mb-6 text-base  large:leading-7'>2020 - Present</div>
                        <div className='flex flex-col medium:w-3/5'>
                            <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>Self-employed</h6>
                            <div className='leading-7 mt-1 mb-8'>Freelance Designer</div>
                            <p className='text-base  large:leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </AnimatedWhenVisible>
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
                <div className='relative  pt-24 flex flex-col gap-12 large:gap-14'>
                    <AnimatedWhenVisible>
                        <h5 className='text-[32px] leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Technologieën</h5>
                        <p className='text-left my-8 text-secondary text-base '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className='flex flex-wrap gap-2'>
                            {icons.map((icon, index) => (
                                <AnimatedWhenVisible delay={index * 0.05} key={index} className='px-3 py-1.5 rounded-md bg-[#101010] flex gap-1 items-center'>
                                    <div className='h-10  bg-[#101010]' style={{ display: 'inline-flex', alignItems: 'center' }}>
                                        {React.cloneElement(icon.icon, { style: { width: '20px', height: '20px' } })}
                                    </div>
                                    <span className='font-semibold capitalize text-sm'>{icon.name}</span>
                                </AnimatedWhenVisible>
                            ))}
                        </div>
                    </AnimatedWhenVisible>
                </div>
            </div >
        </div >
    );
}

export default page;