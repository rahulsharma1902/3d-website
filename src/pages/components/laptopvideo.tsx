"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const LaptopVideo = () => {
  return (

<section className="laptop-img">
        <div className="container" data-aos="fade-up">
            <div className="img-laptop">
                {/* <img src="assets/images/laptopimg.png" class="img-fluid" alt="laptop"> */}
                <Image 
  className="img-fluid" 
  src="/img/laptop-img.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
            </div>
        </div>
    </section>


    );
};

export default LaptopVideo;