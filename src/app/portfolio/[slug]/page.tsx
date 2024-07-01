import { notFound } from 'next/navigation'
import Image from 'next/image'
import Projects from '@/lib/projects'
import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'
import React from 'react'
import AnimateOnView from '@/components/AnimateOnView'

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
                <AnimateOnView>
                    <h1 className='mx-auto text-center leading-8 tracking-[-1px] medium:tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>{project?.title}</h1>
                </AnimateOnView>
            </div>
            <AnimateOnView delay={0.20} className='relative w-full aspect-[1360/952]'>
                <Image className='object-cover rounded-2xl' src={project!.thumbnailUrl} alt={project!.title} fill />
            </AnimateOnView>
            <AnimateOnView className='w-full large:w-[700px] large:mx-auto xlarge:w-[800px] flex flex-col gap-7'>
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
                    <h4 className='text-xl medium:text-2xl font-semibold'>
                        Technologieën gebruikt
                    </h4>
                    <p className='leading-7 text-secondary font-medium'>
                        {project?.technologies.map((technology, index) => (
                            <span key={index}>{technology}{index !== project?.technologies.length - 1 ? ', ' : ''}</span>
                        ))}
                    </p>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-xl medium:text-2xl font-semibold'>Beschrijving</h4>
                    <p className='leading-7 text-secondary font-medium'>{project?.description}</p>
                </div>
            </AnimateOnView>
            <div className='relative w-full bg-[#090909] grid-flow-col grid grid-rows-2 gap-10 rounded-[20px] aspect-[1360/952]'>
                <AnimateOnView className="bg-red-500  w-full">laptop image here</AnimateOnView>
                <AnimateOnView className="bg-blue-500  w-full"> phone images here</AnimateOnView>
            </div>
        </div>
    )
}