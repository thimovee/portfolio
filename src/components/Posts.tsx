import { FC } from "react"
import BlogCard from "./BlogCard";

interface BlogPostsProps {
    posts: BlogPost[];
    amount: number;
}

const BlogPosts: FC<BlogPostsProps> = ({ posts, amount }) => {
    return (
        <section className="text-white animate-fade-right grid grid-cols-1 medium:grid-cols-2 large:grid-cols-3 gap-4">
            {posts.length > 0 ? posts.slice(0, amount).map((post) => (
                <BlogCard key={post.id} post={post} />
            )) : (
                <h2 className="text-background text-xl font-medium text-center mt-28 mb-40">Geen blogposts gevonden.</h2>
            )}
        </section>
    );
}

export default BlogPosts;