"use client"
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react"
import { Eye, Globe, Plus } from "lucide-react";
import { BsGithub } from "react-icons/bs";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <Link
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            href={`/portfolio/${project.slug}`} className="group rounded-md mt-[78px] group medium:mt-0 tracking-tight text-white inset-0 relative w-full aspect-[670/430] medium:aspect-[670/400]">
            <Image className="object-cover rounded-2xl" src={project.thumbnailUrl} alt={project.title} fill />
            <div
                className="absolute duration-300 w-full h-full hidden md:block  bg-gradient-to-t from-black/60 via-neutral-950/5 group-hover:from-black/70 group-hover:via-black/70 group-hover:to-black/70 to-black rounded-2xl" />
            <div className="w-full h-full group-hover:opacity-0 opacity-100 duration-300 group-hover:pt-20 md:px-5 md:pb-5  items-start flex flex-col">
                <div className="md:group-hover:opacity-0 group-hover:select-none w-full flex flex-col gap-0 md:gap-2 items-start -translate-y-20 md:-translate-y-0 md:mt-auto">
                    <h2 className="text-2xl leading-8 font-semibold">{project.title}</h2>
                    <p className="text-secondary text-sm md:text-base font-medium text-left line-clamp-1">{project.description}</p>
                </div>
            </div>
                <div
                    className="absolute duration-150  rounded-full bg-purple flex gap-2 items-center scale-90 group-hover:scale-100 ease-in top-1/2 left-1/2 -translate-x-1/2 group-hover:translate-y-1/2 translate-y-[60%] opacity-0 group-hover:opacity-100 flex gap-2 px-4 py-2 items-center"
                >
                    <Eye className="w-5 h-5" />
                    <span>
                        Bekijk details
                    </span>

            </div>
        </Link>
    );
}

export default ProjectCard;