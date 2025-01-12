// import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';

const getPosts=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data=await res.json();
    return data;
}
 
export const metadata = {
    title:"Posts",    description: "Posts Page",
    keywords:['posts','posts page']
  };


const PostPage =async () => {
    const postData=await getPosts();
    return (
        <div className='h-screen'>
<h6 className='text-center'>All Posts:{postData.length}</h6>
<div className='grid grid-cols-4 gap-6'>
    {
        postData?.slice(0,20)?.map(({title,body,id})=>(
            <div key={id} className='border-2 p-6'>
<h6>Title: {title}</h6>
<h6>Description: {body}</h6>
<button className='bg-red-400 px-4 py-2'><Link href={`/posts/${id}`}>See Details</Link></button>
            </div>
        ))
    }
</div>
        </div>
    );
};

export default PostPage;