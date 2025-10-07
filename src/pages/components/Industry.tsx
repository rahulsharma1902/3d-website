"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const Industry = () => {
    return (
        <section className="dol_sec bg-brown">
            <div className="container pt_50 pb_50" data-aos="fade-up" 
  data-aos-delay="100" 
  data-aos-duration="2000" 
  data-aos-easing="ease-in-out-back">
                <div className="dol_hd b_col" data-aos="fade-up">
                    <h2>Doloremque</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="dol_bg" data-aos="fade-up">
                            <Image
                                className="img-fluid"
                                src="/img/dol1.png"
                                alt="Laptop Image" width={1400} height={700}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dol_content" >
                            <div className="dol-content-hd-txt" data-aos="fade-up">
                            <h4 className="pc_family b_col">
                                Trailblazer Configuration has a long history of giving first rate plan administrations to
                                the medical care industry.
                            </h4>
                            <p className="mb-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets.
                            </p>
                            </div>
                            <div className="dol_list row">
                                <div className="col-lg-6">
                                    <ul className="mb-0" data-aos="fade-up">
                                        <li className="b_col">
                                            Lorem Ipsum dummy
                                            printing
                                        </li>
                                        <li className="b_col">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="mb-0" data-aos="fade-up">
                                        <li className="b_col">
                                            Sed ut perspiciatis
                                        </li>
                                        <li className="b_col">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='view-more-btn' data-aos="fade-up">
                            <a href="" className="hdr-btn mt_40 text-body">
                            <span className="arrow">
                              <i className="fa-solid fa-chevron-right"></i>
                              </span>
                              <span className='view-more-txt'>
                              <span className="view-more-txt-upr">View More</span>
                      <span className="view-more-txt-btm">View More</span>
                      </span>
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Industry;