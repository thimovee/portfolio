import BlogPosts from '@/components/Posts'
import { getSortedPostsData } from '@/lib/posts';
import AnimatedWhenVisible from '@/components/AnimateOnView'

import React from 'react'
const page = () => {
    const posts = getSortedPostsData() as BlogPost[];
    return (
        <div className='pt-[38px] medium:pt-[76px]  px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-8xl xlarge:mx-auto w-full mx-auto large:mx-0 flex justify-center'>
            <div className='w-full tracking-tight flex flex-col text-left medium:text-center  xlarge:w-full gap-11 medium:gap-14'>
                <AnimatedWhenVisible >
                    <h1 className='mx-auto text-center tracking-[-2px] text-[32px] medium:text-5xl large:text-6.5xl large:leading-[74px] max-w-[800px] font-semibold'>Blog</h1>
                </AnimatedWhenVisible>
                <AnimatedWhenVisible delay={0.10}>
                    <div>
                        <BlogPosts posts={posts} amount={posts.length} />
                    </div>
                </AnimatedWhenVisible>
            </div>
        </div>
    )
}

export default page