"use client"
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";


interface AnimateOnViewProps {
    children: React.ReactNode;
    variant?: string;
    delay?: number;
    className?: string;
    isFooter?: boolean;
}

const AnimateOnView: FC<AnimateOnViewProps> = ({ children, variant, className, delay, isFooter }) => {

    const animationVariant = variant ? variant : "fadeInFromBottom";

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start(animationVariant);
        }
    }, [controls, inView, animationVariant]);

    const initialY = animationVariant === "fadeInFromBottom" ? isFooter ? 50 : 140 : 0;
    const initialX = animationVariant === "fadeInToLeft" ? 140 : animationVariant === "fadeInToRight" ? -140 : 0;
    return (
        <motion.div
            className={cn(className)}
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3, delay: delay ? delay : 0 }}
            variants={{
                fadeInFromBottom: { opacity: 1, y: 0, transition: { duration: 1, delay: delay ? delay : 0, ease: [0.250, 0.100, 0.250, 1] } },
                fadeInToRight: { opacity: 1, x: 0, transition: { duration: 1, delay: delay ? delay : 0, ease: [0.250, 0.100, 0.250, 1] } },
                fadeInToLeft: { opacity: 1, x: 0, transition: { duration: 1, delay: delay ? delay : 0, ease: [0.250, 0.100, 0.250, 1] } },
                fadeIn: { opacity: 1, transition: { duration: 1, delay: delay ? delay : 0, ease: [0.250, 0.100, 0.250, 1] } },
                hidden: { opacity: 0, y: initialY, x: initialX },
            }}
        >
            {children}
        </motion.div>
    );
}

export default AnimateOnView;