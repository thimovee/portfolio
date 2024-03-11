import { notFound } from 'next/navigation'
import Image from 'next/image'
import Projects from '@/lib/projects'
import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'
import React from 'react'

export function generateStaticParams() {
    const projects = Projects
    return projects.map((project) => ({
        slug: project.slug
    }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const projects = Projects
    const { slug } = params
    const project = projects.find(project => project.slug === slug)
    if (!project) {
        return {
            title: 'Project niet gevonden'
        }
    }
    return {
        title: project.title,
    }
}

export default async function Post({ params }: { params: { slug: string } }) {
    const projects = Projects
    const { slug } = params
    if (!projects.find(project => project.slug === slug)) {
        return notFound()
    }

    const project = projects.find(project => project.slug === slug)

    return (
        <div className='mt-12 px-5 medium:px-0 medium:max-w-[600px] medium:mx-auto large:mx-0 large:px-15 large:max-w-full xlarge:mx-auto large:w-full xlarge:max-w-8xl xlarge:px-0 medium:mt-24 tracking-tight flex flex-col gap-12 large:gap-14 '>
            <div className='gap-2.5 flex flex-col items-center'>
                <h1 className='mx-auto text-center leading-8 tracking-[-1px] medium:tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>{project?.title}</h1>
                <p className="text-sm leading-6 medium:text-base large:text-lg text-secondary font-medium">{project?.role} ({new Date(project!.date).getFullYear()}) </p>
            </div>
            <div className='relative w-full aspect-[1360/952]'>
                <Image className='object-cover rounded-2xl' src={project!.thumbnailUrl} alt={project!.title} fill />
            </div>
            <div className='w-full large:w-[700px] large:mx-auto xlarge:w-[800px] flex flex-col gap-7'>
                <div className='flex flex-col'>
                    <h4 className='text-xl medium:text-2xl font-semibold'>Links</h4>
                    <div className='leading-7 flex gap-4 text-secondary font-medium'>
                        <a href={project?.websiteUrl} target='_blank' rel='noreferrer noopener' className='hover:text-secondary_purple duration-300 group flex gap-1 items-center'>
                            Website
                            <GoArrowUpRight className='group-hover:-translate-y-1 w-5 h-5 duration-300 group-hover:translate-x-1' />
                        </a>
                        <a href={project?.githubUrl} target='_blank' rel='noreferrer noopener' className='hover:text-secondary_purple duration-300 group flex gap-1 items-center'>
                            GitHub
                            <GoArrowUpRight className='group-hover:-translate-y-1 w-5 h-5 duration-300 group-hover:translate-x-1' />
                        </a>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-xl medium:text-2xl font-semibold'>Tijdsduur</h4>
                    <p className='leading-7 text-secondary font-medium'>{project?.duration}</p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-xl medium:text-2xl font-semibold'>Services verleend</h4>
                    <p className='leading-7 text-secondary font-medium'>
                        {project?.providedServices.map((service, index) => (
                            <span key={index}>{service}{index !== project?.providedServices.length - 1 ? ', ' : ''}</span>
                        ))}
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-xl medium:text-2xl font-semibold'>
                        Technologieën gebruikt
                    </h4>
                    <p className='leading-7 text-secondary font-medium'>
                        {project?.technologies.map((technology, index) => (
                            <span key={index}>{technology}{index !== project?.technologies.length - 1 ? ', ' : ''}</span>
                        ))}
                    </p>
                </div>
                <h3 className='leading-8 tracking-[-1px] medium:tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] font-semibold'>Probleem</h3>
                <p className='leading-7 text-secondary font-medium'>
                    {project?.problem.split('\n').map((p, i) => (
                        <React.Fragment key={i}>
                            {p}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <div className='relative w-full bg-[#090909] grid-flow-col grid grid-rows-2 gap-10 rounded-[20px] aspect-[1360/952]'>
                <div className="bg-red-500  w-full">laptop image here</div>
                <div className="bg-blue-500  w-full"> phone images here</div>
            </div>
            <div className='w-full large:w-[700px] large:mx-auto xlarge:w-[800px] flex flex-col gap-7'>
                <h3 className='leading-8 tracking-[-1px] medium:tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] font-semibold'>Oplossing</h3>
                <p className='leading-7 text-secondary font-medium'>
                    {project?.solution.split('\n').map((p, i) => (
                        <React.Fragment key={i}>
                            {p}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    )
}