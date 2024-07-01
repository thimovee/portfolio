import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import Projects from '@/lib/projects'
import AnimateOnView from '@/components/AnimateOnView'

const page = () => {
    return (
        <div className='pt-[38px] medium:pt-[76px]  px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-8xl xlarge:mx-auto w-full mx-auto large:mx-0 flex justify-center'>
            <div className='w-full tracking-tight flex flex-col text-left medium:text-center  xlarge:w-full gap-11 medium:gap-14'>
                <AnimateOnView>
                    <h1 className='mx-auto text-center tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>Projectgallerij</h1>
                </AnimateOnView>
                <AnimateOnView delay={0.10} className='w-full grid grid-cols-1 gap-12 medium:gap-5 medium:grid-cols-2'>
                    {Projects.map((project) => (
                        <ProjectCard project={project} key={project.slug} />
                    ))}
                </AnimateOnView>
            </div>
        </div>
    )
}

export default page