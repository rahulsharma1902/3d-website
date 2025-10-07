"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const Blog = () => {
  return (

    <section className="banner blog_banner py_100 bg-brown ">
      <div className="container">
        <div className="divider"></div>
        <div className="row py-4">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner-info-part-1" data-aos="fade-up">
              <div className="info-img">
                <Image className="img-fluid"
                  src="/img/tra-img.png"
                  alt="Laptop Image"
                  width={20}
                  height={20}
                  style={{ width: "100%", height: "auto" }}
                />
                {/* <img src="assets/images/tra-img.png" alt="logo"> */}

              </div>
              <div className="banner-info-2">
                <a href="">Trailblazer * <span className="Services"> Blogger</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner-info-part-2 b_col" data-aos="fade-up">
              Any project in mind ? <br />
              Drop us a line
            </div>
          </div>
        </div>
        <div className="blog_banner_hd" data-aos="fade-up">
          <h1 className="b_col pp_family">
            Web Design Blog
          </h1>
        </div>
        <div className="tab" data-aos="fade-up">
          <a href="blog.html" target="_self" className="btn active" id="all"><span>All</span> <sup>232</sup> </a>
          <a href="fintech.html" target="_self" className="btn" id="Fintech"><span>Fintech</span><sup>14</sup></a>
          <a href="#" target="_self" className="btn" id="SaaS"><span>SaaS</span><sup>4</sup></a>
          <a href="#" target="_self" className="btn" id="Web-design"><span>Web design</span><sup>75</sup></a>
          <a href="#" target="_self" className="btn" id="UX-design"><span>UX design</span><sup>80</sup></a>
          <a href="#" target="_self" className="btn" id="UI-designs"><span>UI designs</span><sup>36</sup></a>
          <a href="#" target="_self" className="btn" id="Product"><span>Product design</span><sup>14</sup></a>
          <a href="#" target="_self" className="btn" id="Estimation"><span>Estimation</span> <sup>7</sup></a>
          <a href="#" target="_self" className="btn" id="Hiring"><span>Hiring</span><sup>6</sup></a>
          <a href="#" target="_self" className="btn" id="Web-dev"><span>Web development</span> <sup>11</sup></a>
          <a href="#" target="_self" className="btn" id="Trends"><span>Trends</span><sup>5</sup></a>
          <a href="#" target="_self" className="btn load_more"><span className='load-more'>...</span></a>
        </div>
        </div>
    </section>


  );
};

export default Blog;