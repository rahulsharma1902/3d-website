"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const CaseSliderHead = () => {
  return (

    <section className="case_slider-heading-text bg-brown py_100">
    <div className="container" >
        <div className="slider_txt">
            <div className="row">
                <div className="col-lg-4">
                    <div className="slider_hd b_col" data-aos="fade-up">
                        <h2>Home page</h2>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="slider_ryt_txt">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="inner_hd rck_slt " data-aos="fade-up">
                                    <p className="mb-0 b_col size_20">
                                        Advertising Solutions for Your Business – Get Real Results!
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="ryt_txt" data-aos="fade-up">
                                    <p className="mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only five centuries, but also
                                        the leap into electronic typesetting, remaining essentially unchanged. It
                                        was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software
                                        like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
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

export default CaseSliderHead;