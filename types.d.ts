type Project = {
    title: string,
    thumbnailUrl: string,
    description: string,
    images: string[],
    slug: string,
    githubUrl: string,
    websiteUrl: string,
    technologies: string[],
}

type BlogPost = {
    id: string,
    title: string,
    intro: string,
    thumbnail: string,
    date: string,
    postAuthor: string,
}

type Author = {
    name: string,
    avatar: string,
}

type Expertise = {
    title: string,
    description: string,
}