import React from 'react';

const LoadingScreen = () => {
    return (
        // <Html center>
        <>
            <div className="page-loader">
                <div className="page-loader-wrp">
                    {/* Logo */}
                    <div className="logo">
                        <img
                            src="/icons/logo.svg" // Path to your logo in the public/icons directory
                            alt="Logo"
                            style={{ width: '100px' }} // Adjust the size of the logo as needed
                        />
                    </div>

                    {/* Loader Box */}
                    <div className="loader-box">
                        {/* Text Zero */}
                        <div className="text-zero">
                            <p>000</p>
                        </div>

                        {/* Progress Loader */}
                        <div className="progress-load">
                            {/* Moving Loader Image */}
                            <div className="move-loader-img">
                                <img
                                    src="/icons/hello.svg" // Path to your moving loader icon
                                    alt="Moving Loader"
                                    style={{ width: '50px' }} // Adjust the size of the moving loader image
                                />
                            </div>

                            {/* Loading Box */}
                            <div className="loading-box">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles for the loading screen */}
            <style jsx>{`
        .page-loader {
          padding: 20px;
          padding-bottom: 0;
        }

        .loader-box {
          text-align: center;
        }

        .loading-box {
          border: 1px solid #000;
          border-radius: 10px;
          max-width: 350px;
          margin: auto;
        }

        .loading-box p {
          margin: 0;
          padding: 5px;
        }

        .progress-load {
          max-width: 350px;
          margin: auto;
          position: relative;
          padding-top: 90px;
        }

        .move-loader-img {
          position: absolute;
          top: 0;
          left: 0;
          transform: translate(-33px);
        }

        .text-zero p {
          margin: 0;
          font-size: 100px;
        }
      `}</style>
      </>
        // </Html>
    );
};

export default LoadingScreen;
