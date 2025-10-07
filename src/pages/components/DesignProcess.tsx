"use client";  // Add this at the top

import React from 'react';
// import { Html } from '../../../node_modules/next/document';
import Image from 'next/image';

const DesignProcess = () => {
  return (

    <section className="design_process bg-brown py_100">
        <div className="container">
            <div className="design_content" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="design_hd b_col">
                            <h3>
                                Design Process
                            </h3>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="design_txt">
                            <p>
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
                                that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                                belongs to those who fail in their duty through weakness of will, which is the same as
                                saying through shrinking from toil and pain. These cases are perfectly simple and easy
                                to distinguish. In a free hour, when our power of choice is untrammelled and when
                                nothing prevents our being able to do what we like best, every pleasure is to be
                                welcomed and every pain avoided. But in certain circumstances and owing to the claims of
                                duty or the obligations of business it will frequently occur that pleasures have to be
                                repudiated and annoyances accepted. The wise man therefore always holds in these matters
                                to this principle of selection: he rejects pleasures to secure other greater pleasures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-laptop mt-50" data-aos="fade-up">
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

export default DesignProcess;