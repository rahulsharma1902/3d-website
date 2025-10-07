"use client";  // Add this at the top

import React from 'react';
// import { Html } from '../../../node_modules/next/document';
import Image from 'next/image';

const DurationCol = () => {
  return (

    <section className="duration_sec bg-brown pb_100">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="screen_dv b_col" data-aos="fade-up">
                    <div className="screen-t-dv b_col">
                        <p>
                            Average duration
                        </p>
                    </div>
                    <div className="screen_num">
                        <h2>
                            5 minute
                        </h2>
                    </div>
                    <div className="screen_txt ">
                        <p className="rck_slt size_20">
                            It's significantly longer than you can rearward in dummy ;- )
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="result_dv">
                    <div className="b_col" data-aos="fade-up">
                        <div className="result-t-dv">
                            <p>
                                Unique visitors in 3 months
                            </p>
                        </div>
                        <div className="result_num">
                            <h2>
                                47.000
                            </h2>
                        </div>
                        <div className="result_txt ">
                            <p className="rck_slt size_20">
                                The results
                            </p>
                        </div>
                    </div>

                    <div className="result_content" data-aos="fade-up">
                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It
                            has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    );
};

export default DurationCol;