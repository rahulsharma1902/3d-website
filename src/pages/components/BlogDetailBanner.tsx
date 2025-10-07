"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const BlogDetailBanner = () => {
  return (

    <section className="banner  bg-brown">
        <div className="container" >
            <div className="row py-4 bl">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner-info-part-1" data-aos="fade-up">
                        <div className="info-img">
                        <Image 
  className="img-fluid" 
  src="/img/tra-img.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
</div>
                        <div className="banner-info-2" data-aos="fade-up">
                            <a href="">Trailblazer * <span className="Services"> Blog</span></a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="banner-part-3 " data-aos="fade-up">
                <h1 className="tc m-0">At vero eos et accusamus et iusto odio </h1>
            </div>
            <div className="banner-part-4 bn bl ">
                <div className="row">
                    <div className="col-lg-6  ">
                        <div className="banner-btn" data-aos="fade-up">
                            <a href="" className="ftr-btn-p5 ">
                                UX Design<sup>81</sup>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6  ">
                        <div className="banner-inner-text ms-auto w-rwd mx">
                            <div className="inner-div d-flex  justify-content-between align-items-center" data-aos="fade-up">
                                <div className="fc">October 18, 2024</div>
                                <div className="part-2-innerdiv d-flex justify-content-center align-items-center fc"><i
                                        className="fa-regular fa-clock"></i>
                                    <div className="innerdiv-2 ps-2">13 minutes read</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


  );
};

export default BlogDetailBanner;