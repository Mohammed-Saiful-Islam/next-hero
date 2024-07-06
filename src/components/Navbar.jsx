'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathName=usePathname();
  const router=useRouter();
  const links=[
    {
      title:'Home',
      path:'/'
      },
    {
    title:'About',
    path:'/about'
    },
    {
    title:'Services',
    path:'/services'
    },
    {
    title:'Contacts',
    path:'/contacts'
    },
    {
    title:'Blogs',
    path:'/blogs'
    },
    {
    title:'Categories',
    path:'/categories'
    },
    {
    title:'Dashboard',
    path:'/dashboard'
    },
    {
    title:'Login',
    path:'/login'
    },
    {
    title:'Posts',
    path:'/posts'
    },
    {
    title:'Meals',
    path:'/meals'
    },
    {
    title:'Gallery',
    path:'/gallery'
    }
  ];

  const handler=()=>{
    router.push('/login')
  };

  if(pathName.includes('dashboard'))
  return(
<div className='bg-black'>
  Dashboard Layout
</div>
    )

    return (
        <nav className="bg-black px-6 py-4 flex justify-between items-center">
        <h6 className='text-3xl'>
          Next <span className='text-white'>Hero</span>
        </h6>
        <ul className="flex gap-6">
          {
            links?.map((link)=><Link className={`${pathName===link.path&&'text-white'}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
        </ul>
        <button onClick={handler} className='bg-gray-400 text-cyan-100 p-4'>Login</button>
      </nav>
    );
};

export default Navbar;