"use client"
import { sendEmail } from "@/app/_actions/email";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react"

interface ExpertiseCardProps {
    expertise: Expertise;
    order: number;
    targetScale: number;
    progress: MotionValue<number>;
    range: number[];
}

const ExpertiseCard: FC<ExpertiseCardProps> = ({ expertise, order, targetScale, progress, range }) => {

    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);
    const randomHex = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    return (
        <div ref={container} className="h-fit max-h-[220px] mt-8 first:mt-0 flex items-center justify-center sticky top-[100px]">
            <motion.div
                style={{ backgroundColor: randomHex(), scale, top: `calc(${order * 0}px)` }}
                className="flex gap-8 p-7.5 duration-300 relative -top-3/4 w-[660px] h-[220px] rounded-[20px]"
            >
                <span>0{order + 1}</span>
                <div className="flex flex-col gap-5">
                    <h5>{expertise.title}</h5>
                    <p className="text-secondary font-medium">{expertise.description}</p>
                </div>
            </motion.div>
        </div>
    );
}

export default ExpertiseCard;