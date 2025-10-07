"use client"; // Add this at the top

import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  // State to manage active tabs for both sections
  const [activeDesignTab, setActiveDesignTab] = useState(0);
  const [activePriceTab, setActivePriceTab] = useState(0);

  // Data for the tabs
  const designTabs = ["UI / UX designs", "Brand identity", "Illustrations", "Motion design", "Web development"];
  const priceTabs = ["$1-1000", "$1000-$5000", "$5000-$10 000", "I don't know"];

  return (
    <section className="banner bg-brown">
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="banner-info-part-1" >
              <div className="info-img" data-aos="fade-up">
                <Image
                  className="img-fluid"
                  src="/img/tra-img.png"
                  alt="Laptop Image"
                  width={1400}
                  height={700}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="banner-info-2" data-aos="fade-up">
                <a href="">
                  Trailblazer * <span className="Services"> Services</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6">
            <div className="banner-info-part-2 ps-3" data-aos="fade-up">
              Contacts
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="banner-contact-button-tabs py_100">
          <div className="banner-part-3 tx-pf" data-aos="fade-up">
            <h2 className="tx-pf">At vero eos et accusamus et iusto odio</h2>
          </div>

          {/* Design Tabs */}
          <div className="banner-part-p5 banner-part-p8 mt-4 pb-5" data-aos="fade-up">
            {designTabs.map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`ftr-btn-p5 pw ${activeDesignTab === index ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveDesignTab(index);
                }}
              >
                {tab}
              </a>
            ))}
          </div>

          <div className="banner-part-3 pt-2" data-aos="fade-up">
            <h2 className="tx-pf my-5 my_10">At vero eos et accusamus et iusto odio</h2>
          </div>

          {/* Price Tabs */}
          <div className="banner-part-p5 pb-5" data-aos="fade-up">
            {priceTabs.map((tab, index) => (
              <a
                key={index}
                href="#"
                className={`ftr-btn-p5 pw ${activePriceTab === index ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActivePriceTab(index);
                }}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
