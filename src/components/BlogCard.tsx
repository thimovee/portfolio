import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";

interface BlogCardProps {
    post: BlogPost;
    isHero?: boolean;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
    return (
        <Link key={post.id} href={`/blog/${post.id}`}>
            <article className="p-6 group justify-start relative border border-border rounded-[20px] group active:scale-95  w-full flex flex-col transition duration-300 ease-in-out border-neutral-800">
                <div className="relative h-80 medium:h-72 large:h-56">
                    <Image src={`/images/${post.thumbnail}`} alt={post.title} fill className="group-hover:scale-105 duration-300 object-cover rounded-[10px] border border-border" />
                </div>
                <h3 className="text-left mt-6 mb-4 line-clamp-2 text-white/90 text-xl">{post.title}</h3>
                <div className="flex items-center justify-between">
                    <time className="text-neutral-500 text-sm">{formatDate(post.date)}</time>
                    <p className="text-neutral-500 group-hover:text-white duration-300 text-sm flex gap-1 items-center relative">
                        Lees meer
                        <BsArrowRight className="w-4 h-4" />
                        <span aria-hidden className="absolute h-0.5 w-0 duration-300 group-hover:w-full bg-purple -bottom-1" />
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default BlogCard;