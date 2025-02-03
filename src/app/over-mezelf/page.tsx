import React, { FC } from 'react'
import AnimatedWhenVisible from '@/components/AnimateOnView'
import { icons } from "@/components/ui/Icons";
import Image from 'next/image';
import Education from '@/components/Education';
import Services from '@/components/Services';

const page: FC = () => {
    return (
        <div className='py-[38px] medium:py-[76px] large:pb-10 px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-7xl xlarge:mx-auto w-full mx-auto large:mx-0 flex justify-center'>
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
                            Ik ben Thimo van Ewijk, 19 jaar oud en ik woon in Tiel. Mijn passie voor programmeren begon in 2020 toen ik op het mbo bij ROC Nijmegen begon. Ik heb drie jaar op deze school gezeten en koos voor het versnelde traject, wat me in staat stelde mijn studie sneller af te ronden. Dit jaar ben ik verder gegaan met de hbo-opleiding HAN ICT, waar ik vol enthousiasme aan begonnen ben.<br /><br />Naast mijn studie ben ik altijd op zoek naar nieuwe uitdagingen en mogelijkheden om mijn kennis en vaardigheden uit te breiden. In mijn vrije tijd ben ik graag bezig met het ontwikkelen van mijn eigen projecten, van kleine applicaties tot het verkennen van nieuwe programmeertalen. Buiten de wereld van programmeren geniet ik van verschillende hobby&apos;s. Ik kijk vaak films, fiets en fitness, en ook game ik soms wel eens online met wat vrienden.
                        </p>
                    </AnimatedWhenVisible>
                </div>
                <AnimatedWhenVisible variant="fadeInFromBottom" className='bg-[#101010] items-center rounded-[20px] my-16 px-9 py-5 gap-12 flex flex-col medium:flex-row medium:gap-0 medium:justify-between '>
                    <AnimatedWhenVisible variant="fadeInToRight" className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>4+</h4>
                        <p className='leading-7 text-base text-secondary font-medium tracking-[-0.5px]'>
                            Jaar Ervaring
                        </p>
                    </AnimatedWhenVisible>
                    <AnimatedWhenVisible delay={0.20} variant="fadeInToRight" className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>20+</h4>
                        <p className='leading-7 text-base  text-secondary font-medium tracking-[-0.5px]'>
                            Persoonlijke Projecten
                        </p>
                    </AnimatedWhenVisible>
                    <AnimatedWhenVisible delay={0.30} variant="fadeInToRight" className='max-w-fit flex flex-col items-center'>
                        <h4 className='bg-gradient-to-t from-gradient-start to-gradient-end inline-block text-transparent bg-clip-text font-bold text-5xl leading-[60px] medium:text-4xl medium:leading-[60px] large:leading-[60px] large:text-5xl tracking-tight'>8</h4>
                        <p className='leading-7 text-base  text-secondary font-medium tracking-[-0.5px]'>
                            Beheerste Programmeertalen
                        </p>
                    </AnimatedWhenVisible>
                </AnimatedWhenVisible>
                <div className='flex flex-col text-left'>
                    <AnimatedWhenVisible>
                        <h5 className='text-[32px] mb-8 leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Ervaring</h5>
                    </AnimatedWhenVisible>
                    <AnimatedWhenVisible className='flex flex-col medium:flex-row medium:justify-between text-secondary'>
                        <div className='mb-6 text-base  large:leading-7'>feb. 2023 - jun. 2023</div>
                        <div className='flex flex-col medium:w-3/5'>
                            <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>
                                IDsignage
                            </h6>
                            <div className='leading-7 mt-1 mb-8'>Software Developer</div>
                            <p className='text-base  large:leading-7'>
                                Bij IDsigange heb ik mijn afstudeerstage gelopen als Software Developer. Hier heb ik gewerkt aan het ontwikkelen van een fullstack ecommerce platform voor het verkopen van digital signage templates. Ik heb hier veel ervaring opgedaan met het werken in een professionele omgeving en heb mijn vaardigheden verder kunnen ontwikkelen.
                            </p>
                        </div>
                    </AnimatedWhenVisible>
                </div>
                <AnimatedWhenVisible aria-hidden='true' className='bg-[#ffffff26] w-full h-px my-8'> </AnimatedWhenVisible>
                <AnimatedWhenVisible className='text-left flex flex-col medium:flex-row medium:justify-between text-secondary'>
                    <div className='mb-6 text-base  large:leading-7'>aug. 2021 - feb. 2022</div>
                    <div className='flex flex-col medium:w-3/5'>
                        <h6 className='text-white font-semibold text-xl leading-[30px] medium:text-[21px] medium:leading-[31px]'>Ziekenhuis Rivierenland</h6>
                        <div className='leading-7 mt-1 mb-8'>Sharepoint Beheerder</div>
                        <p className='text-base  large:leading-7'>
                            Tijdens mijn stage bij Ziekenhuis Rivierenland heb ik als SharePoint Beheerder gewerkt. In deze rol was ik verantwoordelijk voor het beheren en onderhouden van de SharePoint-omgeving van het ziekenhuis. Deze ervaring heeft me waardevolle inzichten gegeven in het werken binnen een groot team, het continu verwerken van feedback, en het effectief omgaan met SharePoint.
                        </p>
                    </div>
                </AnimatedWhenVisible>
                <Education />
                <div className='relative  pt-24 flex flex-col gap-12 large:gap-14'>
                    <AnimatedWhenVisible>
                        <h5 className='text-[32px] leading-[42px] tracking-[-1.5px] medium:text-[38px] medium:leading-[48px] large:text-5xl large:leading-[58px] text-left font-semibold'>Technologieën</h5>
                        <p className='text-left my-8 text-secondary text-base '>
                            In de loop van mijn studie en persoonlijke projecten heb ik een breed scala aan technologieën en programmeertalen geleerd en toegepast. Mijn focus ligt voornamelijk op het ontwikkelen van webapplicaties, waar ik zowel frontend als backend vaardigheden heb kunnen ontwikkelen. Hier is een overzicht van de technologieën waar ik mee heb gewerkt:
                        </p>
                        <div className='grid grid-cols-3 gap-10'>
                            <div>a</div>
                            <div>b</div>
                            <div>c</div>
                        </div>
                    </AnimatedWhenVisible>
                </div>
            </div >
        </div >
    );
}

export default page;