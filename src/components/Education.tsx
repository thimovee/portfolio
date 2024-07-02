import React from 'react'
import Image from 'next/image'
import AnimatedWhenVisible from './AnimateOnView'

const Education = () => {
    return (
        <div className='pt-24 flex flex-col text-left'>
            <AnimatedWhenVisible>
                <h5 className='text-[32px] mb-8 leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Educatie</h5>
            </AnimatedWhenVisible>
            <AnimatedWhenVisible className='flex flex-col text-secondary'>
                <div className='mb-6 text-base  large:leading-7'>2023 - 2026</div>
                <div className='flex flex-col medium:w-3/5'>
                    <div className='flex gap-4 items-center mb-4'>
                        <Image className='bg-white rounded-md' src='/images/HAN.png' width={100} height={100} alt="HAN Logo" />
                        <div className='flex flex-col'>
                            <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>
                                HAN University of Applied Sciences
                            </h6>
                            <div className='leading-7 mt-1'>
                                ICT, HBO-niveau
                            </div>
                        </div>
                    </div>
                    <p className='text-base  large:leading-7'>
                        Begin dit jaar ben ik begonnen aan de opleiding HBO ICT aan de HAN. Ik ben erg enthousiast om mijn kennis en vaardigheden verder te ontwikkelen en te leren over nieuwe technologieën en programmeertalen. Ik kijk ernaar uit om mijn studie af te ronden en mijn carrière als Fullstack Developer voort te zetten.
                    </p>
                </div>
            </AnimatedWhenVisible>
            <AnimatedWhenVisible aria-hidden='true' className='bg-[#ffffff26] w-full h-px my-8'> </AnimatedWhenVisible>
            <AnimatedWhenVisible className='flex flex-col text-secondary'>
                <div className='mb-6 text-base  large:leading-7'>2020 - 2023</div>
                <div className='flex flex-col medium:w-3/5'>
                    <div className='flex gap-4 items-center mb-4'>
                        <Image className='bg-white p-2 rounded-md' src='/images/ROC.svg' width={100} height={100} alt="ROC Logo" />
                        <div className='flex flex-col'>
                            <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>
                                ROC Nijmegen
                            </h6>
                            <div className='leading-7 mt-1'>
                                Software Developer, Mbo-niveau 4
                            </div>
                        </div>
                    </div>
                    <p className='text-base  large:leading-7'>
                        In 2020 ben ik begonnen aan de opleiding MBO ICT aan ROC Nijmegen. Ik heb drie jaar op deze school gezeten en heb mijn studie in een versneld tempo afgerond. Hier heb ik mijn passie voor programmeren ontdekt en heb ik mijn vaardigheden en kennis kunnen ontwikkelen.
                    </p>
                </div>
            </AnimatedWhenVisible>
        </div>
    )
}

export default Education