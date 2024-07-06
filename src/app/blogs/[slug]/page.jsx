import React from 'react';

const page = ({params}) => {
    console.log(params.slug);
    const{title,description}=blogs.find((blog)=>blog.slug==params.slug);
    return (
        <div className='h-screen'>
<h5>{title}</h5>
<h5>{description}</h5>
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

export default page;