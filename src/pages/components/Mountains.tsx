"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const Mountains = () => {
  return (

    <section className="mountains bg-brown">
        <div className="container" data-aos="fade-up"data-aos-duration="3000">
            <div className="m-para">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="page-wallpapper mx-auto" data-aos="fade-up">
            <Image 
  className="img-fluid" 
  src="/img/mountains.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
            </div>
        </div>

    </section>


    );
};

export default Mountains;