import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css';

export const metadata = {
    title:"Meals",    description: "Meals Page",
    keywords:['meals','meals page']
  };

const MealsPage = () => {
    return (
        <div className='p-12'>
Meals Page        
<h1 className='text-3xl font-semibold'>Choose Your Meals</h1>
<p className={`${styles.font_tomato} ${styles.text_large} `}>Choose meals of you choice by searching......</p>    
<Meals/>
        </div>
    );
};

export default MealsPage;