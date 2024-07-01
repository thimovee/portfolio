import { type MetadataRoute } from "next"
import { getSortedPostsData } from "@/lib/posts"
import Projects from "@/lib/projects"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allPosts = getSortedPostsData()
    const absoluteUrl = (path: string) => `http://localhost:3000${path}`

    const postsRoutes = allPosts.map((post) => ({
        url: absoluteUrl(`/blog/${post.id}`),
        lastModified: new Date().toISOString(),
    }))

    const projectRoutes = Projects.map((project) => ({
        url: absoluteUrl(`/portfolio/${project.slug}`),
        lastModified: new Date().toISOString(),
    }))

    const routes = [
        "",
        "/portfolio",
        "/contact",
        "/offerte-berekenen",
        "/blog",
        "/over-mezelf",
    ].map((route) => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }))

    return [
        ...routes,
        ...postsRoutes,
        ...projectRoutes,
    ]
}