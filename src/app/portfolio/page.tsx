import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import Projects from '@/lib/projects'
const page = () => {
    return (
        <div className='py-[38px] medium:py-[76px]  large:pb-10 px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-8xl xlarge:mx-auto w-full mx-auto large:mx-0 flex justify-center'>
            <div className='w-full tracking-tight flex flex-col text-left medium:text-center  xlarge:w-full gap-11 medium:gap-14'>
                <h1 className='mx-auto text-center tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>Projectgallerij</h1>
                <div className='w-full grid grid-cols-1 gap-12 medium:gap-5 medium:grid-cols-2'>
                    {Projects.map((project) => (
                        <ProjectCard project={project} key={project.slug} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page