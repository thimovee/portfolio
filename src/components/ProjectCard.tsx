import Image from "next/image";
import { FC } from "react"

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="mt-[78px] medium:mt-0 tracking-tight text-white inset-0 relative w-full aspect-[670/430] medium:aspect-[670/400]">
            <Image className="object-cover rounded-2xl" src={project.thumbnailUrl} alt={project.title} fill />
            <div aria-hidden className="medium:rotate-180 large:rotate-0 absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)49.7159%,rgba(0,0,0,0.75)100%)] rounded-2xl" />
            <div className="absolute left-0 -top-[78px] medium:left-5 medium:top-5 large:top-auto large:bottom-5   items-start flex flex-col">
                <h2 className="text-[21px] leading-8 font-semibold">{project.title}</h2>
                <p className="text-sm leading-6 medium:text-base large:text-lg text-secondary font-medium">{project.role} ({new Date(project.date).getFullYear()}) </p>
            </div>
        </div>
    );
}

export default ProjectCard;