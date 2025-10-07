// src/components/Footer.tsx

import React from "react";
import Image from "next/image";
import logo from "../assets/img/sitelogo.svg"; // Import the logo image

const Footer: React.FC = () => {
  return (
    <footer className="footer" >
      {/* Main Content Section */}
      <div className="container" >
        <div className="footer-heading">
          <h2 className="text-white">Let’s Talk Business</h2>
        </div>

        {/* Contact Form */}
        <form className="footer-form d-flex flex-wrap">
          {/* Name Input */}
          <div className="form-group me-3 flex-grow-1">
            <label htmlFor="name" className="form-label text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control mb-3"
              placeholder="Enter your name"
            />

            {/* Service Buttons */}
            <div className="button-group mb-3">
              <button type="button" className="btn btn-secondary me-2">
                UI/UX Design
              </button>
              <button type="button" className="btn btn-secondary me-2">
                Brand Identity
              </button>
              <button type="button" className="btn btn-secondary">
                Illustrations
              </button>
            </div>
            <div className="button-group">
              <button type="button" className="btn btn-secondary me-2">
                Motion Design
              </button>
              <button type="button" className="btn btn-secondary">
                Web Development
              </button>
            </div>
          </div>

          {/* Email and Question Section */}
          <div className="form-group flex-grow-1">
            <label htmlFor="email" className="form-label text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control mb-3"
              placeholder="Enter your email"
            />

            <label htmlFor="question" className="form-label text-white mb-2">
              Question
            </label>
            <textarea
              id="question"
              className="form-control mb-3"
              rows={4}
              placeholder="Type your question here"
            ></textarea>

            {/* File Upload and Submit Button */}
            <div className="d-flex justify-content-between align-items-center">
              <label className="btn btn-upload">
                <i className="fa fa-paperclip me-2"></i>
                <span>Attach File</span>
                <input
                  type="file"
                  className="d-none"
                  name="booking_attachment"
                />
              </label>
              <button type="submit" className="btn btn-primary">
                Send Request
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Bottom Section */}
      <div className="container-fluid mt-5">
        <div className="row border-bottom pb-4">
          {/* Contact Info */}
          <div className="col-lg-6 d-flex justify-content-center mb-3 mb-lg-0">
            <div className="contact-info">
              <p className="text-white me-4">+123 456 7890</p>
              <p className="text-white">info@trailblazer.com</p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="col-lg-6">
            <ul className="footer-nav d-flex justify-content-end flex-wrap">
              <li className="footer-item">
                <a href="#" className="text-white">Trailblazer</a>
              </li>
              <li className="footer-item">
                <a href="#" className="text-white">Services</a>
              </li>
              <li className="footer-item">
                <a href="#" className="text-white">About Us</a>
              </li>
              <li className="footer-item">
                <a href="#" className="text-white">Cases</a>
              </li>
              <li className="footer-item">
                <a href="#" className="text-white">Industries</a>
              </li>
              <li className="footer-item">
                <a href="#" className="text-white">Blog</a>
              </li>
              <li className="footer-item">
                <a href="#" className="text-white">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer End Section */}
        <div className="row mt-4">
          <div className="col-lg-4 text-center text-white mb-3 mb-lg-0">
            &copy; Trailblazer Studio, 2017-2024. All rights reserved.
          </div>
          <div className="col-lg-4 text-center text-white mb-3 mb-lg-0">
            Privacy Policy
          </div>
          <div className="col-lg-4">
            <ul className="social-links d-flex justify-content-center">
              <li className="me-3">
                <a href="#" className="text-white">Facebook</a>
              </li>
              <li className="me-3">
                <a href="#" className="text-white">Behance</a>
              </li>
              <li className="me-3">
                <a href="#" className="text-white">Dribbble</a>
              </li>
              <li>
                <a href="#" className="text-white">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
