import InfiniteCarousel from "@/components/InfiniteCarousel";
import ProjectCard from "@/components/ProjectCard";
import SkillsAndExpertises from "@/components/SkillsAndExpertises";
import { icons } from "@/components/ui/Icons";
import Projects from "@/lib/projects";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";
import { getSortedPostsData } from "@/lib/posts";
import BlogPosts from "@/components/Posts";


export default function Home() {
  const posts = getSortedPostsData()
  return (
    <div className='pt-12  medium:pt-[68px] large:pt-[86px] px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-8xl xlarge:mx-auto w-full mx-auto large:mx-0 flex flex-col justify-center'>
      <div className=' text-center items-center w-full tracking-tight flex flex-col xlarge:w-full gap-12 medium:gap-[30px]'>
        <AnimateOnView>
          <span className="relative  max-w-fit text-sm leading-6 large:text-[15px] large:leading-[25px]">
            <div className="bg-black border-[#ffffff26] rounded-full border flex gap-2.5 py-0.5 px-3 items-center z-[99999999999]">
              <span aria-hidden="true" className="animate-pulse duration-75 z-20 w-2.5 h-2.5 bg-[#a866ff] rounded-full"></span>
              <p className="tracking-tight z-20 ">Beschikbaar voor werk</p>
            </div>
            <div className="absolute -inset-1 rounded-md blur-xl bg-gradient-to-br from-indigo-500/25 via-indigo-800/25 to-violet-600/25 -z-10" />
          </span>
        </AnimateOnView>
        <AnimateOnView delay={0.10}>
          <h1 className='mx-auto text-center tracking-[-2px] text-5xl large:text-6.5xl large:leading-[82px] xlarge:text-7xl max-w-[1100px] font-semibold'>
            Hallo, ik ben Thimo.<br />Ik ben een Fullstack Developer.
          </h1>
        </AnimateOnView>
        <AnimateOnView delay={0.20}>
          <p className="text-secondary max-w-[900px] text-base medium:text-[17px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </AnimateOnView>
        <AnimateOnView delay={0.30} className="flex gap-4 items-center">
          <Link className="bg-purple block text-center w-full medium:w-fit medium:mx-auto  font-medium text-[17px] tracking-tight leading-none py-3 px-5 rounded-lg" href="/contact">
            Contacteer mij
          </Link>
          <Link className="border  border-border block text-center w-full medium:w-fit medium:mx-auto  font-medium text-[17px] tracking-tight leading-none py-3 px-5 rounded-lg" href="/portfolio">
            Bekijk mijn werk
          </Link>
        </AnimateOnView>
      </div>
      <AnimateOnView delay={0.40} className='relative overflow-hidden pt-20 flex flex-col gap-12 large:gap-14'>
        <div className='relative rounded-lg'>
          <InfiniteCarousel hasBackground={false} icons={icons} />
          <div aria-hidden='true' className='absolute  rounded-xl left-0 top-0 bg-gradient-to-r from-black via-[#1black/50 to-transparent w-20 h-full' />
          <div aria-hidden='true' className='absolute  rounded-xl right-0 top-0 bg-gradient-to-l from-black via-black/75 to-transparent w-20 h-full' />
        </div>
      </AnimateOnView>
      <section className="pb-24 mt-10">
        <AnimateOnView delay={0.50} className='w-full tracking-tight text-left medium:text-center  xlarge:w-full'>
          <div className='w-full grid grid-cols-1 gap-12 medium:gap-5 medium:grid-cols-2'>
            {Projects.slice(0, 4).map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
          <AnimateOnView variant="fadeIn">
            <Link className="bg-white medium:bg-[#ffffff12] mt-12 block text-center w-full medium:w-fit medium:mx-auto  font-semibold text-[17px] tracking-tight leading-none py-3 px-5 rounded-full" href="/portfolio">
              <span className="text-[#7218e5] medium:text-transparent medium:bg-gradient-to-l medium:from-gradient-start medium:to-gradient-end medium:bg-clip-text ">Bekijk alle projecten</span>
            </Link>
          </AnimateOnView>
        </AnimateOnView>
      </section>
      <SkillsAndExpertises />
      <section className="mt-32 flex flex-col gap-8">
        <div className="w-full flex justify-between items-center">
          <h4 className=" z-[999999] text-3.5xl tracking-tighter medium:text-[38px] medium:leading-[48px]  font-semibold">
            Laatste artikelen
          </h4>
          <Link href="/blog" className="text-primary text-base font-medium">
            Bekijk alles
          </Link>
        </div>
        <BlogPosts posts={posts} amount={4} />
      </section>
    </div >
  );
}
