"use client";  // Add this at the top

import React from 'react';
// import { Html } from '../../../node_modules/next/document';
import Image from 'next/image';

const ImageTextGrid = () => {
  return (

    <section className="question  bg-brown">
    <div className="container">
        <div className="info-box" >
            <div className="row mb_67">
                <div className="col-lg-6 ">
                    <div className="box-imgpara d-flex">
                        <div className="img-part" data-aos="fade-up">
                        <Image 
  className="img-fluid" data-aos="fade-up"
  src="/img/earth-person.png" 
  alt="Laptop Image"  width={160} height={170}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                        <div className="info-detail" data-aos="fade-up">
                            <div className="info-h5">
                                <h5 >Speed and Efficiency</h5>
                            </div>
                            <div className="info-para">At Trailblazer Innovations, we know that time plays an important role in any competitive market. That is why we apply our very own Helios framework to speed up all development procedures. Helios assembles modular, customizable components to facilitate very fast assembly of complex systems and hence has drastically reduced time-to-market for any ideas. Not only that, but now, your vision is realized faster than before, thanks to our efficient processes.</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="box-imgpara d-flex">
                        <div className="img-part" data-aos="fade-up">
                        <Image 
  className="img-fluid" data-aos="fade-up"
  src="/img/graph.png" 
  alt="Laptop Image"  width={160} height={170}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                        <div className="info-detail" data-aos="fade-up">
                            <div className="info-h5">
                                <h5 >Cost-Effective Solutions</h5>
                            </div>
                            <div className="info-para">Now you can innovate without spending a fortune. In fact, because our Helios framework taps into a huge library of pre-built hardware and software components, we remove redundancy in development. This saves time and money, letting us then create solutions that are high-quality, scalable, and budget-friendly without sacrificing either performance or customization.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 ">
                    <div className="box-imgpara d-flex">
                        <div className="img-part">
                        <Image 
  className="img-fluid" data-aos="fade-up"
  src="/img/person.png" 
  alt="Laptop Image"  width={160} height={170}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                        <div className="info-detail" data-aos="fade-up">
                            <div className="info-h5 pb_0">
                                <h5>Custom-Made for You</h5>
                            </div>
                            <div className="info-para">We believe that every project is unique, and so are the requirements. That's why we take the time to understand your vision, market demands, and specific challenges. From initial concept to final product, our solutions are fully customized to align with your goals, ensuring the end result is not only functional but also impactful, innovative, and ready to disrupt the market.</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="box-imgpara d-flex">
                        <div className="img-part">
                        <Image 
  className="img-fluid" data-aos="fade-up"
  src="/img/threeperson.png" 
  alt="Laptop Image"  width={160} height={170}
  style={{ width: '100%', height: 'auto' }} 
/>
                        </div>
                        <div className="info-detail" data-aos="fade-up">
                            <div className="info-h5">
                                <h5>Technical Expertise</h5>
                            </div>
                            <div className="info-para">It is grounded in both deep technical experience and a spirit of creative problem-solving. Trailblazer Innovations has engineers, designers, and developers who have successfully solved some of the toughest technical challenges faced by any company in the world by using ingenuity. And from designing the hardware, writing the software to integrate into the whole system, it ensures that we work towards precision, reliability, and excellence.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    );
};

export default ImageTextGrid;