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
    <div className='pt-12  medium:pt-[68px] large:pt-[86px] px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-7xl xlarge:mx-auto w-full mx-auto large:mx-0 flex flex-col justify-center'>
      <div className=' text-center items-center w-full tracking-tight flex flex-col xlarge:w-full gap-12 medium:gap-[30px]'>
        <AnimateOnView className="relative z-[1]">
          <span className="relative  max-w-fit text-sm leading-6 large:text-[15px] large:leading-[25px]">
            <div className="bg-black border-[#ffffff26] rounded-full border flex gap-2.5 py-0.5 px-3 items-center">
              <span aria-hidden="true" className="animate-pulse duration-75  w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              <p className="tracking-tight  ">Beschikbaar voor werk</p>
            </div>
          </span>
        </AnimateOnView>
        <AnimateOnView delay={0.10}>
          <h1 className='mx-auto text-center tracking-[-2px] text-5xl large:text-6.5xl large:leading-[82px] xlarge:text-5xl max-w-[1100px] font-semibold'>
            Hallo, ik ben Thimo.<br />Ik ben een Fullstack Developer.
          </h1>
        </AnimateOnView>
        <AnimateOnView delay={0.20}>
          <p className="text-secondary max-w-[900px] text-base font-medium"> Ik ben Thimo van Ewijk, Fullstack Developer in opleiding aan de HAN. Gepassioneerd door webontwikkeling, focus ik me op functionele en gebruiksvriendelijke projecten. Bekijk mijn portfolio en neem gerust contact op! </p>
        </AnimateOnView>
        <div className="mt-12 px-8 md:px-4 justify-center w-full flex gap-4 items-center">
        <AnimateOnView className="max-w-fit" delay={0.30}>
          <Link className="bg-purple block max-w-[260px] text-center w-full font-medium text-base tracking-tight leading-none py-4 px-10 rounded-lg h-12" href="/contact">
            Contacteer mij
          </Link>
          </AnimateOnView>
          <AnimateOnView delay={0.35}>
          <Link className="border-2  border-neutral-800 max-w-[260px]  text-center w-full h-12 py-4 px-10 font-medium text-base tracking-tight flex items-center justify-center rounded-lg" href="/portfolio">
            Bekijk mijn werk
          </Link>
          </AnimateOnView>
        </div>
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
            <Link className="bg-white medium:bg-[#ffffff12] mt-12 block text-center w-full medium:w-fit medium:mx-auto  font-semibold text-base tracking-tight leading-none py-3 px-5 rounded-full" href="/portfolio">
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
