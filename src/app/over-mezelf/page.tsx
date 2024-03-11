import InfiniteCarousel from '@/components/InfiniteCarousel'
import { icons } from '@/components/ui/Icons'
import React from 'react'
const page = () => {


    return (
        <div className='py-[38px] medium:py-[76px]  large:pb-10 px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-8xl xlarge:mx-auto w-full mx-auto large:mx-0 flex justify-center'>
            <div className='w-full tracking-tight flex flex-col text-left medium:text-center  xlarge:w-full'>
                <h1 className='mx-auto text-center tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>Over mezelf</h1>
                <div className='mt-12 large:mt-14 w-full  gap-12 large:gap-0 flex flex-col large:flex-row large:justify-between'>
                    <div className="relative w-full max-h-[400px] h-[400px] medium:max-h-[500px] medium:h-[500px] medium:w-3/5 medium:mx-auto large:mx-0 large:aspect-[350/400] large:w-auto large:h-[400px] bg-blue-500 rounded-[20px]">afbeelding van mezelf</div>
                    <p className='font-medium text-left text-secondary text-base medium:text-[17px] w-full large:max-w-[60%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                        <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                </div>
                <div className='bg-[#101010] items-center rounded-[20px] my-24 px-9 py-5 gap-12 flex flex-col medium:flex-row medium:gap-0 medium:justify-between '>
                    <div className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>10+</h4>
                        <p className='leading-7 text-base medium:text-[17px] text-secondary font-medium tracking-[-0.5px]'>
                            Years of Experience
                        </p>
                    </div>
                    <div className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>72+</h4>
                        <p className='leading-7 text-base medium:text-[17px] text-secondary font-medium tracking-[-0.5px]'>
                            Projects completed
                        </p>
                    </div>
                    <div className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>95%</h4>
                        <p className='leading-7 text-base medium:text-[17px] text-secondary font-medium tracking-[-0.5px]'>
                            Client satisfction
                        </p>
                    </div>
                    <div className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>15</h4>
                        <p className='leading-7 text-base medium:text-[17px] text-secondary font-medium tracking-[-0.5px]'>
                            Design awards
                        </p>
                    </div>
                </div>
                <div className='flex flex-col text-left'>
                    <h5 className='text-[32px] mb-8 leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Ervaring</h5>
                    <div className='flex flex-col medium:flex-row medium:justify-between text-secondary'>
                        <div className='mb-6 text-base large:text-[17px] large:leading-7'>2020 - Present</div>
                        <div className='flex flex-col medium:w-3/5'>
                            <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>Self-employed</h6>
                            <div className='leading-7 mt-1 mb-8'>Freelance Designer</div>
                            <p className='text-base large:text-[17px] large:leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div aria-hidden='true' className='bg-[#ffffff26] w-full h-px my-8' />
                <div className='text-left'>
                    <div className='flex flex-col medium:flex-row medium:justify-between text-secondary'>
                        <div className='mb-6 text-base large:text-[17px] large:leading-7'>2020 - Present</div>
                        <div className='flex flex-col medium:w-3/5'>
                            <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>Self-employed</h6>
                            <div className='leading-7 mt-1 mb-8'>Freelance Designer</div>
                            <p className='text-base large:text-[17px] large:leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div aria-hidden='true' className='bg-[#ffffff26] w-full h-px my-8' />
                <div className='text-left'>
                    <div className='flex flex-col medium:flex-row medium:justify-between text-secondary'>
                        <div className='mb-6 text-base large:text-[17px] large:leading-7'>2020 - Present</div>
                        <div className='flex flex-col medium:w-3/5'>
                            <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>Self-employed</h6>
                            <div className='leading-7 mt-1 mb-8'>Freelance Designer</div>
                            <p className='text-base large:text-[17px] large:leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pt-24 flex flex-col gap-12 large:gap-14'>
                    <h5 className='text-[32px] leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Services</h5>
                    <div className='grid grid-cols-1 gap-4 medium:gap-5 large:grid-cols-3 font-semibold text-secondary text-xl medium:text-[22px] medium:leading-8'>
                        <div className='bg-[#101010] p-5 medium:p-[30px] rounded-[20px] flex gap-5 medium:gap-8'>
                            <span>01</span>
                            <span>Web Design</span>
                        </div>
                        <div className='bg-[#101010] p-5 medium:p-[30px] rounded-[20px] flex gap-5 medium:gap-8'>
                            <span>02</span>
                            <span>Web Development</span>
                        </div>
                        <div className='bg-[#101010] p-5 medium:p-[30px] rounded-[20px] flex gap-5 medium:gap-8'>
                            <span>03</span>
                            <span>Branding</span>
                        </div>
                    </div>
                </div>
                <div className='relative overflow-hidden py-24 flex flex-col gap-12 large:gap-14'>
                    <h5 className='text-[32px] leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Technologieën</h5>
                    <div className='h-[95px] relative rounded-lg'>
                        <InfiniteCarousel hasBackground={true} icons={icons} />
                        <div aria-hidden='true' className='absolute  rounded-xl left-0 top-0 bg-gradient-to-r from-[#101010] via-[#101010]/50 to-transparent w-20 h-full' />
                        <div aria-hidden='true' className='absolute  rounded-xl right-0 top-0 bg-gradient-to-l from-[#101010] via-[#101010]/75 to-transparent w-20 h-full' />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default page