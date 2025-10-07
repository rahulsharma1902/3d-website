"use client";  // Add this at the top

import React from 'react';
import Image from 'next/image';
import StarRating from "./StarRating";

const BlogDetail = () => {
    return (

        <section className="page-2 bg-brown  ">
            <div className="container">
                <div className="p6-img d-flex justify-content-between pt_50" data-aos="fade-up">
                    <div className="img-circle">
                        <Image className="img-fluid"
                            src="/img/circlepersen-2.png"
                            alt="Laptop Image"
                            width={1000}
                            height={1000}
                            style={{ width: "60px", height: "auto" }}
                        />
                        {/* <img src="assets/images/circlepersen-2.png" className="img-fluid" alt="person"> */}
                    </div>
                    <div className="pern-ifno">
                        <div className="p-info-1">Bence Peeters</div>
                        <p>copywriter</p>
                    </div>
                </div>

                <div className="laptop-imgp6 pt_50 " data-aos="fade-up">
                    <Image className="img-fluid"
                        src="/img/laptopimg-p6.png"
                        alt="Laptop Image"
                        width={1000}
                        height={1000}
                        style={{ width: "100%", height: "auto" }}
                    />
                    {/* <img src="assets/images/laptopimg-p6.png" className="img-fluid" alt="laptop"> */}
                </div>

                <div className="row mt-50" data-aos="fade-up">
                    <div className="col-xl-8  bs">
                        <div className="inner-para-p6">
                            <p className="para-p6col"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                            </p>

                            <p className="para-p6col">centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum. </p>

                            <p className="para-p6col">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? </p>

                            <p className="para-p6col">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat </p>
                        </div>
                        <h2 className="fs_80 mt-50">
                            what is lorem ipsum?
                        </h2>
                        <p className="p6-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets.</p>
                        <div className="ai_path blog-detail-img">
                            <Image className="img-fluid"
                                src="/img/ai_path.png"
                                alt="Laptop Image"
                                width={1000}
                                height={1000}
                                style={{ width: "100%", height: "auto" }}
                            />
                            {/* <img src="assets/images/ai_path.png" className="img-fluid" alt="path"> */}
                        </div>
                        <p className="text-center mt-5">What is the path?</p>
                        <div className="inner-para-p6 pt-3">
                            <p className="para-p6col"> Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                            </p>

                            <p className="para-p6col">centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum. </p>

                            <p className="para-p6col">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? </p>

                            <p className="para-p6col">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat&nbsp;</p>
                        </div>
                        <div className="inner-para-p6 p-0">
                            <p className="para-p6col"> Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                            </p>

                            <p className="para-p6col">centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum. </p>

                            <p className="para-p6col">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? </p>

                            <p className="mb_120">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                                consequatur, vel illum qui dolorem eum fugiat&nbsp;</p>
                        </div>
                        <div className="h3-w">
                            <h3 className="fstyle ">Need to understand our clients' opinion </h3>
                        </div>
                        <p className="para-part-p6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only
                            five </p>
                        <div className="ai_path blog-detail-img">
                            <Image className="img-fluid"
                                src="/img/ardinoe.png"
                                alt="Laptop Image"
                                width={1000}
                                height={1000}
                                style={{ width: "100%", height: "auto" }}
                            />
                            {/* <img src="assets/images/ardinoe.png" className="pt_75 img-fluid" alt="path"> */}
                        </div>
                        <p className="text-center fc pt-4 lyt_col">Principles of heuristic evaluation</p>
                        <div className="para-same-box mt-4 ">
                            <h3 className="fstyle fs_39">Visibility of System Status</h3>
                            <p className="w_915 mt-3">The principle of visibility of system status emphasizes the importance of
                                keeping users informed about what is happening within the system. This can be achieved
                                through clear and timely feedback, such as progress indicators, status messages, or
                                notifications. By ensuring that users are always aware of the system's status, designers can
                                reduce confusion and help users feel more in control.</p>
                        </div>
                        <div className="para-same-box mt-4 ">
                            <h3 className="fstyle fs_39">Match Between System and the Real World</h3>
                            <p className="w_915 mt-4">This principle stresses the need for the system to speak the user's language,
                                using words, phrases, and concepts that are familiar to the user rather than technical
                                jargon. The system should follow real-world conventions, making information appear naturally
                                and logically. This approach helps users understand the interface more efficiently and
                                reduces the cognitive load..</p>
                        </div>
                        <div className="para-same-box mt-4  ">
                            <h3 className="fstyle fs_39">User Control and Freedom</h3>
                            <p className="w_915 ">Users should be free to navigate and control the system as they see fit. This
                                principle includes providing users with easily accessible exit points, undo and redo
                                options, and the ability to backtrack without encountering penalties. By offering user
                                control and freedom, designers can prevent frustration and empower users to interact with
                                the system on their own terms.</p>
                        </div>
                        <div className="para-same-box mt-4 ">
                            <h3 className="fstyle fs_39 ">Consistency and Standards</h3>
                            <p className="w_915 mt-4">Consistency in design ensures that users do not have to wonder whether
                                different words, situations, or actions mean the same thing. The system should follow
                                platform conventions and maintain uniformity in design elements, such as color schemes,
                                typography, and layout. Heuristic reviews help ensure adherence to consistency and
                                standards, allowing users to predict outcomes and improving the overall user experience.</p>
                        </div>
                        <div className="para-same-box mt-4 ">
                            <h3 className="fstyle fs_39">Error Prevention</h3>
                            <p className="w_915 mt-3">Designers should strive to prevent errors before they occur. This can be
                                achieved by eliminating error-prone conditions or providing users with a confirmation option
                                before they commit to an action. Effective error prevention reduces the likelihood of user
                                mistakes and enhances the system's reliability.</p>
                        </div>
                        <div className="para-same-box mt-4 ">
                            <h3 className="fstyle fs_39">Benefits of Heuristic Evaluation</h3>
                            <p className="w_915 mt-3">Heuristic evaluation offers a range of benefits that significantly enhance the
                                design and usability of digital products and systems. These benefits can be broadly
                                categorized into five key areas: cost-effectiveness, early problem detection, expert-driven
                                insights, versatility, and improved user experience.
                            </p>
                        </div>
                        <div className="ai_path blog-detail-img mt_40">
                            <Image className="img-fluid"
                                src="/img/aiprocresser.png"
                                alt="Laptop Image"
                                width={1000}
                                height={1000}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className="hight-light-points mt-4">
                            <p className="span-p">Cost-Effectiveness</p>
                            <p>
                                One of the primary advantages of heuristic evaluation is its cost-effectiveness. Unlike user
                                testing, which requires recruiting participants and conducting extensive sessions, heuristic
                                assessment can be performed by a small group of usability experts. This method reduces the
                                need for large budgets and resources while still providing valuable insights into a
                                product's usability. Additionally, identifying and fixing usability issues early in the
                                design process prevents costly redesigns later, saving time and money.
                            </p>
                        </div>
                        <div className="hight-light-points mt-4 ">

                            <p className="span-p mt_35">Early Problem Detection</p>
                            <p>

                                Heuristic analysis allows for the early detection of usability issues, often before the
                                product reaches the user testing phase. By applying established heuristic principles,
                                evaluators can identify potential problems during the design stage, enabling designers to
                                address these issues proactively. This early intervention ensures that major usability flaws
                                are resolved before they impact the user experience, leading to a more refined and
                                user-friendly final product.

                            </p>
                        </div>
                        <div className="hight-light-points mt-4">

                            <p className="span-p">Expert-Driven Insights</p>
                            <p>
                                Experts in usability and UX heuristics design drive the insights provided by heuristic
                                evaluation. These experts bring experience and knowledge to the evaluation process, enabling
                                them to identify subtle usability issues that designers or developers might overlook. The
                                feedback from these experts is invaluable for refining the design, as it highlights areas
                                where the product can be improved to meet user needs and expectations better.

                            </p>
                        </div>
                        <div className="hight-light-points mt-4">

                            <p className="span-p">Versatility
                            </p>
                            <p>

                                Heuristic evaluation UX is a versatile tool that can be applied across various products,
                                systems, and industries. Heuristic principles can be adapted to suit the specific context,
                                whether evaluating a digital interface, a physical product, or a complex system. This
                                versatility makes heuristic assessment an essential method for UX designers, allowing them
                                to apply the same rigorous usability standards across different projects.


                            </p>
                        </div>
                        <div className="hight-light-points mt-4">

                            <p className="span-p">Expert-Driven Insights</p>
                            <p>
                                Experts in usability and UX heuristics design drive the insights provided by heuristic
                                evaluation. These experts bring experience and knowledge to the evaluation process, enabling
                                them to identify subtle usability issues that designers or developers might overlook. The
                                feedback from these experts is invaluable for refining the design, as it highlights areas
                                where the product can be improved to meet user needs and expectations better.

                            </p>
                        </div>
                        <div className="hight-light-points mt-4">
                            <p className="span-p">
                                Improved User Experience
                            </p>
                            <p>The ultimate goal of heuristic analysis is to improve the user experience. By ensuring that
                                the design adheres to established usability principles, heuristic assessment helps create
                                intuitive, efficient, and enjoyable products. This focus on usability enhances the overall
                                user experience and contributes to the product's success in the market. A well-designed
                                product that meets user needs is more likely to achieve higher user satisfaction, increased
                                adoption, and long-term success.

                            </p>
                        </div>

                        <div className="para-same-box mt-4 bl pb-5 ">
                            <h3 className="fstyle fs_39 ">Conclusion</h3>
                            <p className="w_915 pb_56 m-0">The ultimate goal of heuristic analysis is to improve the user
                                experience. By ensuring that the design adheres to established usability principles,
                                heuristic assessment helps create intuitive, efficient, and enjoyable products. This focus
                                on usability enhances the overall user experience and contributes to the product's success
                                in the market. A well-designed product that meets user needs is more likely to achieve
                                higher user satisfaction, increased adoption, and long-term success.
                            </p>
                        </div>
                        <div className="star-img my-5">
                            <StarRating />
                            <div className="star-image-img">
                                <Image className="img-fluid"
                                    src="/img/p6-chip.png"
                                    alt="Laptop Image"
                                    width={300}
                                    height={200}
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>


                        <div className="col-xl-4 sb">
                            <div className="p6-h">
                                <h3 className="fstyle">Table of contents</h3>

                                <div className="p6-p">
                                    <p>What Is a Heuristic Evaluation?</p>
                                    <p>Importance of Heuristic Evaluation in UX Design</p>
                                    <p>Critical Principles of Heuristic Evaluation</p>
                                    <p> <u>Benefits of Heuristic Evaluation</u></p>
                                    <p>Conclusion</p>
                                </div>


                                <div className="ads-img mt-50">
                                    <div className="need-box">
                                        <div className="fstyle text-center lfs"> <h3>Need a design
                                            expert?</h3></div>

                                        <div className="ctct-btn mt_42">
                                        <a href="" className="cta hdr-btn bg-btn">
                            <span className='bg-btn-txt'> Contact Us</span>
                            <span className='bg-btn-txt-btm'> Contact Us</span>
                        </a>
                                            {/* <a href="" className="cta p6-btn hdr-btn">
                                                Contact Us
                                            </a> */}
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

export default BlogDetail;