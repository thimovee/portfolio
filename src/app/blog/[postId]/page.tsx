import { getPostData, getSingleAuthor, getSortedPostsData } from '@/lib/posts'
import { ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import BlogCard from '@/components/BlogCard'
import AnimateOnView from '@/components/AnimateOnView'

export function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params
    const post = posts.find(post => post.id === postId)
    if (!post) {
        return {
            title: 'Artikel niet gevonden'
        }
    }

    return {
        title: post.title,
        description: post.intro,
        openGraph: {
            title: post.title,
            description: post.intro,
            publishedTime: post.date,
            type: "article",
            // url: absoluteUrl(`/blog/${post.slug}`),
            images: [
                {
                    url: post.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    }
}

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params
    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, id, intro, contentHtml, thumbnail, postAuthor } = await getPostData(postId)
    const author = getSingleAuthor(postAuthor)


    const allPostsExceptCurrent = posts.filter(post => post.id !== id);



    // const jsonLd: WithContext<BlogPosting> = {
    //     '@context': "https://schema.org",
    //     "@type": "BlogPosting",
    //     "headline": title,
    //     "description": description,
    //     "image": {
    //         "@type": "ImageObject",
    //         "url": thumbnail,
    //         "width": "1920",
    //         "height": "1080"
    //     },
    //     "author": {
    //         "@type": "Person",
    //         "name": "thimo",
    //         "url": "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
    //     },
    //     "publisher": {
    //         "@type": "Organization",
    //         "name": "Slimsale",
    //         "logo": {
    //             "@type": "ImageObject",
    //             "url": "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
    //             "width": "320",
    //             "height": "320"
    //         }
    //     },
    //     "datePublished": date,
    //     "dateModified": date
    // }

    return (
        <div className='flex flex-col gap-24 px-5 medium:px-7.5 large:px-[60px] xlarge:px-0 xlarge:max-w-8xl xlarge:mx-auto w-full mx-auto large:mx-0'>
            <article className="  flex flex-col justify-center  prose-h2:font-semibold prose-h2:text-2xl prose-h2:mb-3 prose-strong:font-semibold prose-invert prose-h3:font-semibold prose-h3:text-xl prose-h3:mb-3 mt-20 items-center">
                {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /> */}
                <AnimateOnView>
                    <h1 className="text-left text-ellipsis mb-12 text-primary w-full text-4xl font-medium medium:text-5xl large:text-6xl medium:text-center ">
                        {title}
                    </h1>
                </AnimateOnView>
                <section className='w-full'>
                    <AnimateOnView delay={0.10}>
                        <figure className='w-full'>
                            <div className="relative w-full aspect-[2/1]">
                                <Image
                                    aria-label="blogpost thumbnail"
                                    className="rounded-md object-cover"
                                    title={title}
                                    fill
                                    loading="lazy"
                                    src={`/images/${thumbnail}`}
                                    alt={title}
                                />
                            </div>
                        </figure>
                    </AnimateOnView>
                    <div className='my-24  text-primary text-base xl:mx-auto xl:max-w-[750px] flex flex-col gap-24'>
                        <AnimateOnView>
                            {intro}
                        </AnimateOnView>
                        <AnimateOnView>
                            <div
                                className='text-white/60 prose-li:underline prose-li:underline-offset-4 font-light prose-ul:bg-neutral-950 prose-h6:text-primary prose-h6:text-2xl prose-h6:font-medium prose-h6:mb-4 prose-ul:flex prose-ul:flex-col prose-ul:gap-4 prose-ul:p-6 prose-ul:text-slate-200 prose-li:marker:text-white prose-ul:rounded-[20px] prose-ul:list-inside prose-ul:list-disc prose-h2:mt-20 prose-h2:text-primary prose-h3:mt-20 prose-h3:text-primary'
                                dangerouslySetInnerHTML={{ __html: contentHtml }}
                            />
                        </AnimateOnView>
                    </div>
                </section>
            </article>
            <div className='flex flex-col gap-12'>
                {allPostsExceptCurrent.length !== 0 && (
                    <>
                        <AnimateOnView>
                            <h4 className='text-primary text-5xl font-medium text-center'>Andere artikelen</h4>
                        </AnimateOnView>
                        <AnimateOnView className='grid grid-cols-1 medium:grid-cols-2 large:grid-cols-3 gap-6'>
                            {allPostsExceptCurrent.slice(0, 3).map((post) => (
                                <div key={post.id} className='large:last:flex'>
                                    <BlogCard post={post} />
                                </div>
                            ))}
                        </AnimateOnView>
                    </>
                )}
                <AnimateOnView className='mx-auto'>
                    <Link className='bg-neutral-900/75 px-6 py-3 max-w-fit rounded-full' href="/blog">
                        Bekijk alles
                    </Link>
                </AnimateOnView>
            </div>
        </div>
    );
}