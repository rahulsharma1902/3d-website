"use client"; // Required for client-side rendering in Next.js

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../assets/img/sitelogo.svg";

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY >= 60) {
        header?.classList.add("fixed");
      } else {
        header?.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <header id="header" className="main-header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid p-0">
            <a className="navbar-brand" href="/">
              <Image
                src={logo}
                alt="Site Logo"
                className="logo img-fluid"
                width={130}
                height={50}
                priority
              />
            </a>
            <div className="nav-button">
              <button
                className="nav-btn rounded"
                onClick={toggleMenu}
              >
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <a href="/contact" className="cta hdr-btn bg-btn hdr-btn">
              <span className="bg-btn-txt">Contact Us</span>
                  <span className="bg-btn-txt-btm">Contact Us</span>
                
              </a>
            </div>
            <div
              className={`header-menu ${menuVisible ? "visible" : "hidden"}`}
            >
              <div className="menu">
                <button
                  className="close-btn"
                  onClick={closeMenu}
                >
                  Close
                </button>
                <div className="menu-bg"></div>
                <div className="container con">
                  <div className="inner-container">
                  <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="inner-list-1">
                         <ul
                      className={`menu-items big-ul p-0 m-0 ${
                        menuVisible ? "fade-in" : "fade-out"
                      }`}>                        
                            <li className="big-size">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1">G</span>
                                    <span className="first-1">A</span>
                                    <span className="first-1">P</span>
                                    <span className="first-1">S</span>
                                    <span className="first-1">Y</span>
                                  </span>
                                </span>
                                <span className="letter-2nd">
                                  <span className="down-words">
                                    <span className="first-2">G</span>
                                    <span className="first-2">A</span>
                                    <span className="first-2">P</span>
                                    <span className="first-2">S</span>
                                    <span className="first-2">Y</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="big-size">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1">S</span>
                                    <span className="first-1">E</span>
                                    <span className="first-1">R</span>
                                    <span className="first-1">V</span>
                                    <span className="first-1">I</span>
                                    <span className="first-1">C</span>
                                    <span className="first-1">E</span>
                                    <span className="first-1">S</span>
                                  </span>
                                </span>
                                <span className="letter-2nd">
                                  <span className="down-words">
                                    <span className="first-2">S</span>
                                    <span className="first-2">E</span>
                                    <span className="first-2">R</span>
                                    <span className="first-2">V</span>
                                    <span className="first-2">I</span>
                                    <span className="first-2">C</span>
                                    <span className="first-2">E</span>
                                    <span className="first-2">S</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="big-size">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1">H</span>
                                    <span className="first-1">O</span>
                                    <span className="first-1">M</span>
                                    <span className="first-1">E</span>
                                  </span>
                                </span>
                                <span className="letter-2nd">
                                  <span className="down-words">
                                    <span className="first-2">H</span>
                                    <span className="first-2">O</span>
                                    <span className="first-2">M</span>
                                    <span className="first-2">E</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="big-size">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1">A</span>
                                    <span className="first-1">B</span>
                                    <span className="first-1">O</span>
                                    <span className="first-1">U</span>
                                    <span className="first-1">T</span>
                                    <span className="first-1"> </span>
                                    <span className="first-1">U</span>
                                    <span className="first-1">S</span>
                                  </span>
                                </span>
                                <span className="letter-2nd">
                                  <span className="down-words">
                                    <span className="first-2">A</span>
                                    <span className="first-2">B</span>
                                    <span className="first-2">O</span>
                                    <span className="first-2">U</span>
                                    <span className="first-2">T</span>
                                    <span className="first-2"> </span>
                                    <span className="first-2"> U</span>
                                    <span className="first-2"> S</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="big-size">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1">C</span>
                                    <span className="first-1">A</span>
                                    <span className="first-1">S</span>
                                    <span className="first-1">E</span>
                                    <span className="first-1">S</span>
                                  </span>
                                </span>
                                <span className="letter-2nd">
                                  <span className="down-words">
                                    <span className="first-2">C</span>
                                    <span className="first-2">A</span>
                                    <span className="first-2">S</span>
                                    <span className="first-2">E</span>
                                    <span className="first-2">S</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="big-size">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1">I</span>
                                    <span className="first-1">N</span>
                                    <span className="first-1">D</span>
                                    <span className="first-1">U</span>
                                    <span className="first-1">S</span>
                                    <span className="first-1">T</span>
                                    <span className="first-1">R</span>
                                    <span className="first-1">I</span>
                                    <span className="first-1">E</span>
                                    <span className="first-1">S</span>
                                  </span>
                                </span>
                                <span className="letter-2nd">
                                  <span className="down-words">
                                    <span className="first-2">I</span>
                                    <span className="first-2">N</span>
                                    <span className="first-2">D</span>
                                    <span className="first-2">U</span>
                                    <span className="first-2">S</span>
                                    <span className="first-2">T</span>
                                    <span className="first-2">R</span>
                                    <span className="first-2">I</span>
                                    <span className="first-2">E</span>
                                    <span className="first-2">S</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="big-size">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1">B</span>
                                    <span className="first-1">L</span>
                                    <span className="first-1">O</span>
                                    <span className="first-1">G</span>
                                  </span>
                                </span>
                                <span className="letter-2nd">
                                  <span className="down-words">
                                    <span className="first-2">B</span>
                                    <span className="first-2">L</span>
                                    <span className="first-2">O</span>
                                    <span className="first-2">G</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="big-size">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1">C</span>
                                    <span className="first-1">O</span>
                                    <span className="first-1">N</span>
                                    <span className="first-1">T</span>
                                    <span className="first-1">A</span>
                                    <span className="first-1">C</span>
                                    <span className="first-1">T</span>
                                  </span>
                                </span>
                                <span className="letter-2nd">
                                  <span className="down-words">
                                    <span className="first-2">C</span>
                                    <span className="first-2">O</span>
                                    <span className="first-2">N</span>
                                    <span className="first-2">T</span>
                                    <span className="first-2">A</span>
                                    <span className="first-2">C</span>
                                    <span className="first-2">T</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="innner-list-2">
                          <p className="col">Our social</p>
                           <ul
                      className={`menu-items p-0 small-ul m-0 ${
                        menuVisible ? "fade-in" : "fade-out"
                      }`}>      
                            <li className="s-li">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1 first-1-1">F</span>
                                    <span className="first-1 first-1-1">A</span>
                                    <span className="first-1 first-1-1">C</span>
                                    <span className="first-1 first-1-1">E</span>
                                    <span className="first-1 first-1-1">B</span>
                                    <span className="first-1 first-1-1">O</span>
                                    <span className="first-1 first-1-1">O</span>
                                    <span className="first-1 first-1-1">K</span>
                                  </span>
                                </span>
                                <span className="letter-2nd-2 ">
                                  <span className="down-words">
                                    <span className=" first-2-2">F</span>
                                    <span className=" first-2-2">A</span>
                                    <span className=" first-2-2">C</span>
                                    <span className=" first-2-2">E</span>
                                    <span className=" first-2-2">B</span>
                                    <span className=" first-2-2">O</span>
                                    <span className=" first-2-2">O</span>
                                    <span className=" first-2-2">K</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="s-li">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1 first-1-1">B</span>
                                    <span className="first-1 first-1-1">E</span>
                                    <span className="first-1 first-1-1">H</span>
                                    <span className="first-1 first-1-1">A</span>
                                    <span className="first-1 first-1-1">N</span>
                                    <span className="first-1 first-1-1">C</span>
                                    <span className="first-1 first-1-1">E</span>
                                  </span>
                                </span>
                                <span className="letter-2nd-2 ">
                                  <span className="down-words">
                                    <span className="first-2-2">B</span>
                                    <span className="first-2-2">E</span>
                                    <span className="first-2-2">H</span>
                                    <span className="first-2-2">A</span>
                                    <span className="first-2-2">N</span>
                                    <span className="first-2-2">C</span>
                                    <span className="first-2-2">E</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="s-li">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1 first-1-1">D</span>
                                    <span className="first-1 first-1-1">R</span>
                                    <span className="first-1 first-1-1">I</span>
                                    <span className="first-1 first-1-1">B</span>
                                    <span className="first-1 first-1-1">B</span>
                                    <span className="first-1 first-1-1">B</span>
                                    <span className="first-1 first-1-1">L</span>
                                    <span className="first-1 first-1-1">E</span>
                                  </span>
                                </span>
                                <span className="letter-2nd-2 ">
                                  <span className="down-words">
                                    <span className=" first-2-2">D</span>
                                    <span className=" first-2-2">R</span>
                                    <span className=" first-2-2">I</span>
                                    <span className=" first-2-2">B</span>
                                    <span className=" first-2-2">B</span>
                                    <span className=" first-2-2">B</span>
                                    <span className=" first-2-2">L</span>
                                    <span className=" first-2-2">E</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                            <li className="s-li">
                              <a href="" className="text-container">
                                <span className="letter-1st text">
                                  <span className="upwords-up">
                                    <span className="first-1 first-1-1">I</span>
                                    <span className="first-1 first-1-1">N</span>
                                    <span className="first-1 first-1-1">S</span>
                                    <span className="first-1 first-1-1">T</span>
                                    <span className="first-1 first-1-1">A</span>
                                    <span className="first-1 first-1-1">G</span>
                                    <span className="first-1 first-1-1">R</span>
                                    <span className="first-1 first-1-1">A</span>
                                    <span className="first-1 first-1-1">G</span>
                                  </span>
                                </span>
                                <span className="letter-2nd-2 ">
                                  <span className="down-words">
                                    <span className="first-2-2">I</span>
                                    <span className="first-2-2">N</span>
                                    <span className="first-2-2">S</span>
                                    <span className="first-2-2">T</span>
                                    <span className="first-2-2">A</span>
                                    <span className="first-2-2">G</span>
                                    <span className="first-2-2">R</span>
                                    <span className="first-2-2">A</span>
                                    <span className="first-2-2">G</span>
                                  </span>
                                </span>
                              </a>
                            </li>
                          </ul>
                          <p className="col">GET IN TOUCH</p>
                          <div className="phone-email">
                            <p className="f_s_style"><a href="" className="f_s_style text-container">
                              <span className="letter-1st text">
                                <span className="upwords-up">
                                  <span className="first-1 first-1-1">I</span>
                                  <span className="first-1 first-1-1">N</span>
                                  <span className="first-1 first-1-1">F</span>
                                  <span className="first-1 first-1-1">O</span>
                                  <span className="first-1 first-1-1">@</span>
                                  <span className="first-1 first-1-1">G</span>
                                  <span className="first-1 first-1-1">A</span>
                                  <span className="first-1 first-1-1">P</span>
                                  <span className="first-1 first-1-1">S</span>
                                  <span className="first-1 first-1-1">Y</span>
                                  <span className="first-1 first-1-1">S</span>
                                  <span className="first-1 first-1-1">T</span>
                                  <span className="first-1 first-1-1">U</span>
                                  <span className="first-1 first-1-1">D</span>
                                  <span className="first-1 first-1-1">I</span>
                                  <span className="first-1 first-1-1">O</span>
                                  <span className="first-1 first-1-1">.</span>
                                  <span className="first-1 first-1-1">C</span>
                                  <span className="first-1 first-1-1">O</span>
                                  <span className="first-1 first-1-1">M</span>
                                </span>
                              </span>
                              <span className="letter-2nd-2 ">
                                <span className="down-words">
                                  <span className="first-2-2">I</span>
                                  <span className="first-2-2">N</span>
                                  <span className="first-2-2">F</span>
                                  <span className="first-2-2">O</span>
                                  <span className="first-2-2">@</span>
                                  <span className="first-2-2">G</span>
                                  <span className="first-2-2">A</span>
                                  <span className="first-2-2">P</span>
                                  <span className="first-2-2">S</span>
                                  <span className="first-2-2">Y</span>
                                  <span className="first-2-2">S</span>
                                  <span className="first-2-2">T</span>
                                  <span className="first-2-2">U</span>
                                  <span className="first-2-2">D</span>
                                  <span className="first-2-2">I</span>
                                  <span className="first-2-2">O</span>
                                  <span className="first-2-2">.</span>
                                  <span className="first-2-2">C</span>
                                  <span className="first-2-2">O</span>
                                  <span className="first-2-2">M</span>
                                </span>
                              </span>
                            </a></p>
                            <p className="f_s_style"><a href="" className="f_s_style text-container">
                              <span className="letter-1st text">
                                <span className="upwords-up">
                                  <span className="first-1 first-1-1">+</span>
                                  <span className="first-1 first-1-1">1</span>
                                  <span className="first-1 first-1-1"> </span>
                                  <span className="first-1 first-1-1">9</span>
                                  <span className="first-1 first-1-1">0</span>
                                  <span className="first-1 first-1-1">9</span>
                                  <span className="first-1 first-1-1"> </span>
                                  <span className="first-1 first-1-1">8</span>
                                  <span className="first-1 first-1-1">1</span>
                                  <span className="first-1 first-1-1">7</span>
                                  <span className="first-1 first-1-1"> </span>
                                  <span className="first-1 first-1-1">2</span>
                                  <span className="first-1 first-1-1">5</span>
                                  <span className="first-1 first-1-1">8</span>
                                  <span className="first-1 first-1-1">0</span>
                                </span>
                              </span>
                              <span className="letter-2nd-2 ">
                                <span className="down-words">
                                  <span className="first-2-2">+</span>
                                  <span className="first-2-2">1</span>
                                  <span className="first-2-2"> </span>
                                  <span className="first-2-2">9</span>
                                  <span className="first-2-2">0</span>
                                  <span className="first-2-2">9</span>
                                  <span className="first-2-2"> </span>
                                  <span className="first-2-2">8</span>
                                  <span className="first-2-2">1</span>
                                  <span className="first-2-2">7</span>
                                  <span className="first-2-2"> </span>
                                  <span className="first-2-2">2</span>
                                  <span className="first-2-2">5</span>
                                  <span className="first-2-2">8</span>
                                  <span className="first-2-2">0</span>
                                </span>
                              </span>
                            </a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
