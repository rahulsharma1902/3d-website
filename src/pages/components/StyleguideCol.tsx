"use client";  // Add this at the top

import React from 'react';
// import { Html } from '../../../node_modules/next/document';
import Image from 'next/image';

const StyleguideCol = () => {
  return (

    <section className="styl_guide w_bg py_100">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="styl_content">
                    <div className="style_hd mb-3 b_col" data-aos="fade-up">
                        <h2>
                            Style Guide
                        </h2>
                    </div>
                    <div className="style_img" data-aos="fade-up">
                    <Image 
  className="img-fluid" 
  src="/img/style_bg.png" 
  alt="Laptop Image"  width={528} height={700}
  style={{ width: '528', height: 'auto' }} 
/>
                        {/* <img src="./assets/img/style_bg.png" alt=" Style Guide"> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="styl_txt">
                    <div className="style_span" data-aos="fade-up">
                        <p className="b_col">Lorem ipsum dummy</p>
                    </div>
                    <div className="txt_hd" data-aos="fade-up">
                        <h5 className="pp_family b_col">
                            Project Goals
                        </h5>
                    </div>
                    <div className="style_para" data-aos="fade-up">
                        <p>
                            On the other hand, we denounce with righteous indignation and dislike men who are so
                            beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
                            that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                            belongs to those who fail in their duty through weakness of will, which is the same as
                            saying through shrinking from toil and pain. These cases are perfectly simple and easy
                            to distinguish. In a free hour, when our power of choice is untrammelled and when
                            nothing prevents</p>

                        <p className="mb-0">
                            Our being able to do what we like best, every pleasure is to be welcomed and every pain
                            avoided. But in certain circumstances and owing to the claims of duty or the obligations
                            of business it will frequently occur that pleasures have to be repudiated and annoyances
                            accepted. The wise man therefore always holds in these matters to this principle of
                            selection: he rejects pleasures to secure other greater pleasures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



    );
};

export default StyleguideCol;