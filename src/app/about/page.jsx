import AboutContents from '@/components/AboutContents';
import React from 'react';
import { Headland_One } from "next/font/google";

const headland=Headland_One({weight:['400'],subsets:['latin']})

const getTime=async()=>{
    const res=await fetch('http://localhost:3000/time',{cache:'no-store'});
    const data=await res.json()
    return data.currentTime; 
}

export const metadata = {
    title: "About",
    description: "About Page",
    keywords:['about','about page']
  };

const AboutPage =async () => {
    const currentTime=await getTime();
    return (
        <div className={`${headland.className} min-h-screen px-12 py-24`}>
<h6 className='text-3xl'>About Page</h6>    
<h3 className='text-3xl mt-12'>Time :{currentTime}</h3>        
<AboutContents/>            
        </div>
    );
};

export default AboutPage;