"use client"; // Required for Next.js client-side rendering

import React, { useState } from "react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    { question: "How long does it take to develop a product with Trailblazer Innovations?", answer: "Thanks to our proprietary framework, Helios, we cut development time significantly. We are often able to complete projects within half the time of similar projects in traditional methods." },
    { question: "Can you work with small budget startups?", answer: "We help start-ups create low-cost solutions specially tailor-made for themselves to induce innovation without strain of financial burden." },
    { question: "What industries do you serve?", answer: "We have experience across a wide range of industries, including aerospace, healthcare, IoT, wearables, construction, agriculture, and consumer products." },
    { question: "How does Helios improve the development process?", answer: "Helios comes with a big library with pre-tested modular components we use to efficiently build complex systems and reduce risk." },
    { question: "Do you provide support after project completion?", answer: "Yes, we offer ongoing support and maintenance, ensuring your product remains optimal and continues to run smoothly even after launch." },
  ];

  return (
    <section className="faq-sec bg-brown py_120">
      <div className="container">
        <div className="any-question" data-aos="fade-up">
          <h2 className="rwb text-center mb-50">
          Do You Have Any Questions? We Tried
to Answer Most of Them!
          </h2>
        </div>
        <div className="lorem-boxs pt_55 mx-auto">
          <div className="accordion accordian-box border_none" data-aos="fade-up">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`accordion-item border_t ${activeIndex === index ? "active" : ""}`}
              >
                <h2 className="accordion-header fs-22">
                  <button
                    className={`accordion-button background fnt ${
                      activeIndex === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body background">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
