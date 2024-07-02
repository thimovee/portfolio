"use client"
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react"
import { motion } from "framer-motion";
import { Globe, Plus } from "lucide-react";
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
            href={`/portfolio/${project.slug}`} className="group rounded-md  mt-[78px] group medium:mt-0 tracking-tight text-white inset-0 relative w-full aspect-[670/430] medium:aspect-[670/400]">
            <Image className="object-cover rounded-2xl" src={project.thumbnailUrl} alt={project.title} fill />
            <motion.div
                animate={{ opacity: isHovering ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full h-full hidden md:block  bg-gradient-to-t from-black/60 via-neutral-950/5 group-hover:from-black/70 group-hover:via-black/70 group-hover:to-black/70 to-black rounded-2xl" />
            <div className="w-full h-full md:px-5 md:pb-5  items-start flex flex-col">
                <div className="md:group-hover:opacity-0 group-hover:select-none w-full flex flex-col gap-0 md:gap-2 items-start -translate-y-20 md:-translate-y-0 md:mt-auto">
                    <h2 className="text-2xl leading-8 font-semibold">{project.title}</h2>
                    <p className="text-secondary text-sm md:text-base font-medium text-left line-clamp-1">{project.description}</p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 h-full w-full  flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 10 }}
                    transition={{ duration: 0.5, ease: "backInOut" }}
                    className="flex gap-5 items-center"
                >
                    <span className="hidden md:flex bg-purple px-4 py-2 rounded-full">
                        Bekijk details
                    </span>
                </motion.div>

            </div>
        </Link>
    );
}

export default ProjectCard;