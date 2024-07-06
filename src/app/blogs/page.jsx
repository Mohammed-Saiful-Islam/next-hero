import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div className='p-24'>
{
    blogs.map((blog)=>(
        <div key={blog.slug} className='border-2 p-12'>
<h3>{blog.title}</h3>
<h3>{blog.description}</h3>
<button className='bg-red-600 p-3'><Link href={`/blogs/${blog.slug}`}>View Details</Link></button>
        </div>
    ))
}
        </div>
    );
};


const blogs=[
    {
        "slug": "intro-to-programming",
        "title": "Introduction to Programming",
        "description": "A beginner's guide to the fundamentals of programming."
    },
    {
        "slug": "web-development-trends-2024",
        "title": "Web Development Trends in 2024",
        "description": "An overview of the latest trends and technologies in web development."
    },
    {
        "slug": "mastering-python",
        "title": "Mastering Python",
        "description": "Advanced techniques and best practices for Python programming."
    },
    {
        "slug": "data-science-for-beginners",
        "title": "Data Science for Beginners",
        "description": "An introductory course on data science and its applications."
    },
    {
        "slug": "cybersecurity-essentials",
        "title": "Cybersecurity Essentials",
        "description": "Key concepts and practices for protecting digital information."
    }
]


export default BlogsPage;