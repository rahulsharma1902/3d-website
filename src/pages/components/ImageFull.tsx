"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const ImageFull = () => {
  return (

<section className="fill-image bg-brown">
        <div className="container" >
            <div className="img-laptop" data-aos="fade-up">
                {/* <img src="assets/images/laptopimg.png" class="img-fluid" alt="laptop"> */}
                <Image 
  className="img-fluid" 
  src="/img/objective.png" 
  alt="Laptop Image"  width={1700} height={900}
  style={{ width: '100%', height: 'auto' }} 
/>
            </div>
        </div>
    </section>


    );
};

export default ImageFull;