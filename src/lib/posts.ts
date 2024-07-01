import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkToc from 'remark-toc'
import remarkSlug from 'remark-slug'
const postsDirectory = path.join(process.cwd(), 'blogposts')
const authorsDirectory = path.join(process.cwd(), 'authors')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            intro: matterResult.data.intro,
            date: matterResult.data.date,
            thumbnail: matterResult.data.thumbnail,
            postAuthor: matterResult.data.postAuthor,
        }
        return blogPost
    });
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

// export function getAllAuthors() {
//     const fileNames = fs.readdirSync(authorsDirectory);
//     const allAuthors = fileNames.map((fileName) => {
//         const id = fileName.replace(/\.md$/, '');
//         const fullPath = path.join(authorsDirectory, fileName);
//         const fileContents = fs.readFileSync(fullPath, 'utf8');
//         const matterResult = matter(fileContents);
//         const author = {
//             id,
//             name: matterResult.data.name,
//             avatar: matterResult.data.avatar,
//             role: matterResult.data.role,
//         }
//         return author
//     });
//     return allAuthors;
// }

export function getSingleAuthor(id: string) {
    const fullPath = path.join(authorsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const author = {
        id,
        name: matterResult.data.name,
        avatar: matterResult.data.avatar,
        role: matterResult.data.role,
    }
    return author;
}


export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        // @ts-ignore
        .use(remarkSlug)
        .use(html)
        .use(remarkToc, { maxDepth: 3, parents: ['div', 'root'], skip: 'delta', prefix: 'user-content-', heading: 'Inhoudsopgave' })
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        intro: matterResult.data.intro,
        date: matterResult.data.date,
        contentHtml,
        thumbnail: matterResult.data.thumbnail,
        postAuthor: matterResult.data.postAuthor,

    }

    return blogPostWithHTML
}