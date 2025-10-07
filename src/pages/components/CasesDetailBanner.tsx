"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const CasesDetailBanner = () => {
  return (

    <section className="case_banner banner  bg-brown py_100">
        <div className="container">
            <div className="row py-4">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner-info-part-1" >
                        <div className="info-img" data-aos="fade-up">
                        <Image 
  className="img-fluid"
  src="/img/tra-img.png" 
  alt="Laptop Image"  width={160} height={170}
  style={{ width: '100%', height: 'auto' }} 
/>
                            </div>
                        <div className="banner-info-2" data-aos="fade-up">
                            <a href="">Trailblazer * <span className="Services"> Lorem Ipsum</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="banner-info-part-2 b_col" data-aos="fade-up">
                        Makes Shopify stores, and advance items with informal organizations <span><>>></> </span>
                    </div>
                </div>
            </div>
            <div className="banner-part-3 " data-aos="fade-up">
                <p className="b_col mb-1">Client</p>
                <h1 className="b_col">Finibus </h1>
            </div>
            <div className="banner-part-4">
                <div className="row py-4">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner-info-part-111" data-aos="fade-up">
                            <p className="b_col mb-1">Duration</p>
                            <h2 className="b_col">318 hours </h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner-info-part-211 b_col pp_family" data-aos="fade-up">
                            <p className="b_col mb-1">Release</p>
                            <h2 className="b_col">Oct <span className="slash">-</span> 30 </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-part-5">
                <div className="row fd">
                    <div className="col-lg-6  ">
                        <div className="banner-btn" data-aos="fade-up">
                            <a href className="cta hdr-btn">Visit Website</a>
                        </div>
                    </div>
                    <div className="col-lg-6  ">
                         {/* <div className="banner-inner-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries.
                        </div>  */}
                    </div>
                </div>
            </div>
        </div>
    </section>


  );
};

export default CasesDetailBanner;