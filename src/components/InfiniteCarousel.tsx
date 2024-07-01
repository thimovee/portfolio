"use client"
import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue } from "framer-motion";
import { FC, useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { useInView } from "react-intersection-observer";

interface InfiniteCarouselProps {
    icons: {
        name: string;
        icon: JSX.Element;
    }[];
    hasBackground: boolean;
    delay?: number;
}

const InfiniteCarousel: FC<InfiniteCarouselProps> = ({ icons, hasBackground, delay }) => {
    const fastSpeed = 50;
    const slowSpeed = 100;

    const [duration, setDuration] = useState(fastSpeed);
    const [ref, inView] = useInView();
    const [measureRef, { width }] = useMeasure();

    const xTranslate = useMotionValue(0);
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        const finalPosition = -width / 2 - 50;

        if (inView && mustFinish) {
            controls = animate(xTranslate, [xTranslate.get(), finalPosition], {
                ease: "linear",
                delay: delay ? delay : 0,
                duration: duration * (1 - xTranslate.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else if (inView) {
            controls = animate(xTranslate, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        } else {
            xTranslate.set(0);
        }
        return controls?.stop;
    }, [xTranslate, width, duration, rerender, mustFinish, inView, delay]);

    useEffect(() => {
        if (inView) {
            setMustFinish(true);
            setDuration(fastSpeed);
        }
    }, [inView]);

    return (
        <div className={cn("h-[115px]  rounded-xl w-full", hasBackground ? "bg-[#101010]" : "")} ref={ref}>
            <motion.div
                className="absolute left-0  rounded-[20px] pt-[30px] pb-[50px] flex gap-[100px]"
                ref={measureRef}
                style={{ x: xTranslate }}
            >
                {[...icons, ...icons].map((icon, index) => (
                    <div key={index} className='group border border-neutral-900 relative h-[40px]  bg-[#090909] p-1.5 rounded-md aspect-square flex items-center justify-center'>
                        {icon.icon}
                        <span className="opacity-0 duration-300 group-hover:opacity-100 group-hover:-bottom-5 -bottom-8 absolute capitalize text-secondary text-xs">{icon.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteCarousel;
