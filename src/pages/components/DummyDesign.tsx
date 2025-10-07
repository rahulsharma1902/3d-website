"use client";
import Image from "next/image";
// import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import React, { useRef, useEffect, useState } from 'react';

const DummyDesign = () => {
  return (
    // <section
    //   className="dummy bg-brown py_120 position-relative"
    //   ref={sectionRef}
    // >
    //   <div className="dummy-list">
    //     {[
    //       {
    //         title: "Hardware Design and Development",
    //         text: "“Start your journey toward powerful hardware solutions today!”",
    //       },
    //       {
    //         title: "Software and Platform Development",
    //         text: "“Let us build the software your hardware dreams of!”",
    //       },
    //       {
    //         title: "Mechanical and Electrical Engineering",
    //         text: "“Solve your most complex engineering needs with Trailblazer!”",
    //       },
    //       {
    //         title: "Industrial & Packaging Design",
    //         text: "“Create designs that captivate and endure!”",
    //       },
    //       {
    //         title: "Manufacturing Automation and Production",
    //         text: "“Scale smarter with our production automation expertise!”",
    //       },
    //       {
    //         title: "Mobile App Development",
    //         text: "“Build an app that transforms how users interact with your products!”",
    //       },
    //     ].map((item, index) => (
    //       <div
    //         className="dummy-list-items"
    //         key={index}
    //         ref={(el) => (dummyItemsRef.current[index] = el)}
    //       >
    //         <div className="container">
    //           <div className="row align-items-center g-4 fd">
    //             <div className="col-lg-6">
    //               <div className="dummy-text-1">{item.text}</div>
    //               <div className="dummy-text-2">
    //                 <h2>{item.title}</h2>
    //               </div>
    //               <div className="dummy-text-3">
    //                 <p>
    //                   We provide innovative solutions tailored to your needs.
    //                 </p>
    //               </div>
    //               <div className="dummy-text-4">
    //               <a href="" className="hdr-btn mt_42 text-body">
    //                         <span className="arrow">
    //                           <i className="fa-solid fa-chevron-right"></i>
    //                           </span>
    //                           <span className="view-more-txt-upr">View More</span>
    //                   <span className="view-more-txt-btm">View More</span>
    //                     </a>
    //                 {/* <a href="#" className="hdr-btn mt_42 text-body">
    //                   <span className="view-more-txt-upr">View More</span>
    //                   <span className="view-more-txt-btm">View More</span>
    //                 </a> */}
    //               </div>
    //             </div>
    //             <div className="col-lg-6">
    //               <div className="img-dummy-bg position-absolute top-0 end-0">
    //                 <div className="inner-dummy-img">
    //                   <Image
    //                     className="img-fluid"
    //                     src="/img/dummyimg.png"
    //                     alt="Dummy Image"
    //                     width={1400}
    //                     height={700}
    //                     style={{ width: "100%", height: "auto" }}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>

    <section className="dummy bg-brown py_120 position-relative">
      <div className="container" >
        <div className="row align-items-center g-4 fd">
          <div className="col-lg-6">
            <div className="dummy-text-1" data-aos="fade-up">
              "Plan Your Vision Online with Our Website architecture Administrations"
            </div>
            <div className="dummy-text-2" data-aos="fade-up">
              <h2>Dummy Deisgn</h2>
            </div>
            <div className="dummy-text-3" data-aos="fade-up">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </div>
            <div className="dummy-text-4" data-aos="fade-up">
            <div className='view-more-btn'>
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
          <div className="col-lg-6">
            <div className="img-dummy-bg position-absolute top-0 end-0" data-aos="fade-up">
              <div className="inner-dummy-img">
                <Image
                  className="img-fluid"
                  src="/img/dummyimg.png"
                  alt="Dummy Image"
                  width={1400}
                  height={700}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DummyDesign;
