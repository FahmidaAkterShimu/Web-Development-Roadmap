import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    const blogs = [
        {
            "id": 1,
            "title": "Understanding React Basics",
            "author": "Fahmida Akter",
            "date": "2026-04-01",
            "category": "Web Development",
            "content": "React is a JavaScript library used to build user interfaces. It allows developers to create reusable components and manage application state efficiently.",
            "image": "https://example.com/images/react-basics.jpg"
        },
        {
            "id": 2,
            "title": "Getting Started with Next.js",
            "author": "Fahmida Akter",
            "date": "2026-04-02",
            "category": "Frontend",
            "content": "Next.js is a powerful React framework that supports server-side rendering and static site generation, making applications faster and SEO-friendly.",
            "image": "https://example.com/images/nextjs-guide.jpg"
        },
        {
            "id": 3,
            "title": "What is Server-Side Rendering?",
            "author": "Fahmida Akter",
            "date": "2026-04-03",
            "category": "Web Concepts",
            "content": "Server-side rendering (SSR) is the process of rendering web pages on the server instead of the client, improving performance and SEO.",
            "image": "https://example.com/images/ssr.jpg"
        },
        {
            "id": 4,
            "title": "Introduction to Tailwind CSS",
            "author": "Fahmida Akter",
            "date": "2026-04-04",
            "category": "CSS",
            "content": "Tailwind CSS is a utility-first CSS framework that allows developers to style applications quickly using predefined classes.",
            "image": "https://example.com/images/tailwind.jpg"
        }
    ];

    return (
        <div>
            <h2 className='text-3xl font-bold mb-4'>Blogs</h2>

            {
                blogs.map(blog =>
                    <div key={blog.id}>
                        <h3 className='text-2xl font-bold mb-2'>{blog.title}</h3>
                        <Link href="/">Show details</Link>
                    </div>
                )
            }
        </div>
    );
};

export default BlogsPage;