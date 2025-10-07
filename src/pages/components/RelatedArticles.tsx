"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';

const RelatedArticles = () => {
  return (



<section className="Related bg-brown pb_120">
<div className="container">
 <div className="relted" data-aos="fade-up"> 
     <h2 className="fw_300">Related Articles</h2>
 </div>


 <div className="row">
     <div className="col-lg-6 pt_21 ps-0 ">
         <div className="col-inner-photo">
             <div className="img-back bgc" data-aos="fade-up">
             <Image 
  className="img-fluid" 
  src="/img/circlechip.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
                {/* <img src="assets/images/last-chip-p5.png" className="img-fluid" alt=""> */}

                </div>
             <div className="inner-div d-flex  mt-4 justify-content-between align-items-center" data-aos="fade-up">
                 <div className="fc">October 18, 2024</div>
                 <div className="part-2-innerdiv d-flex justify-content-center align-items-center fc"><i className="fa-regular fa-clock"></i>
                     <div className="innerdiv-2 ps-2">13 minutes read</div>
                 </div>
             </div>
             <div className="photo-info" data-aos="fade-up">
                 <h3 className=" tx-pp">
                     Innovative Design Approaches: Creating Conversational User Interfa......
                 </h3>
             </div>
             <div className="inner-div d-flex justify-content-between align-items-center bl" data-aos="fade-up">
                 <div className="part-1-innerdiv part-1-innerdiv-2">#ui design</div>
                 
             </div>
         </div>
     </div>


     <div className="col-lg-6 pt_21 ps-0">
         <div className="col-inner-photo">
             <div className="img-back-2  bgc" data-aos="fade-up">
             <Image 
  className="img-fluid" 
  src="/img/circlechip.png" 
  alt="Laptop Image"  width={1400} height={700}
  style={{ width: '100%', height: 'auto' }} 
/>
                {/* <img src="assets/images/circlechip.png" className="img-fluid" alt=""> */}

                </div>
             <div className="inner-div d-flex  mt-4 justify-content-between align-items-center" data-aos="fade-up">
                 <div className="fc">October 18, 2024</div>
                 <div className="part-2-innerdiv d-flex justify-content-center align-items-center fc"><i className="fa-regular fa-clock"></i>
                     <div className="innerdiv-2 ps-2">13 minutes read</div>
                 </div>
             </div>
             <div className="photo-info pb-2" data-aos="fade-up">
                 <h3 className="h3-rwd ps-1 m-0">
                     Mastering Happy Path UX: A Guide to Delightful User Experiences
                 </h3>
             </div>
             <div className="inner-div  d-flex justify-content-between align-items-center bl" data-aos="fade-up">
                 <div className="part-1-innerdiv part-1-innerdiv-2 ">#UX design</div>
                 
             </div>
             
         </div>
     </div>
 </div>


 <div className="More text-center mt-50" data-aos="fade-up">
     
         <a href="" className="ftr-btn-p5 part-1-innerdiv-2 btn-more ">
             More articles
         </a>
     
 </div>
</div>
</section>


    );
};

export default RelatedArticles;