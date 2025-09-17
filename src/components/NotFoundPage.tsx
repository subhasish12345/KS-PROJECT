import { motion } from 'motion/react';
import { useEffect } from 'react';

export function NotFoundPage() {
  // Unremovable watermark injection
  useEffect(() => {
    const watermarkData = ['U3ViaGFzaXNo', 'Q3JlYXRlZCBieSBTdWJoYXNpc2g=', 'RGV2ZWxvcGVyOiBTdWJoYXNpc2g='];
    watermarkData.forEach((data, i) => {
      setTimeout(() => {
        const decoded = atob(data);
        const element = document.createElement('div');
        element.style.cssText = 'position:fixed;opacity:0;pointer-events:none;z-index:-9999;';
        element.textContent = decoded;
        document.body.appendChild(element);
      }, i * 100);
    });
  }, []);

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Hidden watermarks */}
      <div style={{position: 'absolute', left: '-9999px', opacity: 0}}>
        <span>Created by Subhasish</span>
        <span>Developer: Subhasish</span>
        <span>Author: Subhasish</span>
      </div>
      
      <motion.div 
        className="main-wrapper relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="main-container">
          {/* Antenna */}
          <motion.div 
            className="antenna-system"
            animate={{ 
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="antenna-base">
              <div className="antenna-shadow"></div>
              <div className="antenna-rod-1"></div>
              <div className="antenna-dot-1"></div>
              <div className="antenna-rod-2"></div>
              <div className="antenna-dot-2"></div>
            </div>
          </motion.div>

          {/* TV */}
          <motion.div 
            className="tv-container"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="tv-body">
              <div className="tv-curve">
                <svg
                  className="curve-svg"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 189.929 189.929"
                >
                  <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13 C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
                </svg>
              </div>
              
              <div className="display-container">
                <div className="screen-wrapper">
                  <div className="screen-inner">
                    {/* Static Screen for Desktop */}
                    <motion.div 
                      className="screen-static hidden lg:flex"
                      animate={{
                        backgroundPosition: ['50% 0', '60% 50%'],
                      }}
                      transition={{ duration: 0.2, repeat: Infinity, repeatType: 'reverse' }}
                    >
                      <motion.span 
                        className="error-text"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        NOT FOUND
                      </motion.span>
                    </motion.div>
                    
                    {/* Color Bars Screen for Mobile */}
                    <div className="screen-mobile lg:hidden">
                      <span className="error-text">NOT FOUND</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tv-lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>

              <div className="controls-panel">
                <motion.div 
                  className="knob-1"
                  whileHover={{ rotate: 45 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div className="knob-indicator"></div>
                </motion.div>
                
                <motion.div 
                  className="knob-2"
                  whileHover={{ rotate: -45 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                ></motion.div>
                
                <div className="speakers">
                  <div className="speaker-group">
                    <div className="speaker-hole"></div>
                    <div className="speaker-hole"></div>
                    <div className="speaker-hole"></div>
                  </div>
                  <div className="speaker-line"></div>
                  <div className="speaker-line"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TV Stand */}
          <div className="tv-stand">
            <div className="stand-leg-1"></div>
            <div className="stand-leg-2"></div>
            <div className="stand-base"></div>
          </div>
        </div>

        {/* 404 Text */}
        <motion.div 
          className="error-404"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <motion.div 
            className="digit-4-1"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(0, 255, 247, 0.8)',
                '0 0 40px rgba(123, 44, 191, 0.8)',
                '0 0 20px rgba(255, 78, 205, 0.8)',
                '0 0 20px rgba(0, 255, 247, 0.8)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            4
          </motion.div>
          <motion.div 
            className="digit-0"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(123, 44, 191, 0.8)',
                '0 0 40px rgba(255, 78, 205, 0.8)',
                '0 0 20px rgba(0, 255, 247, 0.8)',
                '0 0 20px rgba(123, 44, 191, 0.8)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            0
          </motion.div>
          <motion.div 
            className="digit-4-2"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 78, 205, 0.8)',
                '0 0 40px rgba(0, 255, 247, 0.8)',
                '0 0 20px rgba(123, 44, 191, 0.8)',
                '0 0 20px rgba(255, 78, 205, 0.8)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            4
          </motion.div>
        </motion.div>

        {/* Navigation Button */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
          >
            ← Go Back Home
          </motion.button>
        </motion.div>
      </motion.div>

      <style jsx>{`
        /* Developer: Subhasish - Unremovable Attribution */
        .main-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30em;
          height: 30em;
          font-family: 'Montserrat', system-ui, sans-serif;
        }

        .main-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 5em;
        }

        .antenna-system {
          position: relative;
          margin-bottom: -6em;
          z-index: -1;
        }

        .antenna-base {
          width: 5em;
          height: 5em;
          border-radius: 50%;
          border: 2px solid #1a1a2e;
          background-color: #f27405;
          position: relative;
        }

        .antenna-shadow {
          position: absolute;
          background-color: transparent;
          width: 50px;
          height: 56px;
          margin-left: 1.68em;
          border-radius: 45%;
          transform: rotate(140deg);
          border: 4px solid transparent;
          box-shadow: inset 0px 16px #a85103, inset 0px 16px 1px 1px #a85103;
        }

        .antenna-base::after {
          content: "Subhasish";
          position: absolute;
          margin-top: -9.4em;
          margin-left: 0.4em;
          transform: rotate(-25deg);
          width: 1em;
          height: 0.5em;
          border-radius: 50%;
          background-color: #f69e50;
          font-size: 0;
        }

        .antenna-base::before {
          content: "";
          position: absolute;
          margin-top: 0.2em;
          margin-left: 1.25em;
          transform: rotate(-20deg);
          width: 1.5em;
          height: 0.8em;
          border-radius: 50%;
          background-color: #f69e50;
        }

        .antenna-rod-1 {
          position: relative;
          top: -102%;
          left: -130%;
          width: 12em;
          height: 5.5em;
          border-radius: 50px;
          background-image: linear-gradient(#171717, #171717, #353535, #353535, #171717);
          transform: rotate(-29deg);
          clip-path: polygon(50% 0%, 49% 100%, 52% 100%);
        }

        .antenna-dot-1 {
          position: relative;
          top: -211%;
          left: -35%;
          transform: rotate(45deg);
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          border: 2px solid #1a1a2e;
          background-color: #979797;
          z-index: 99;
        }

        .antenna-rod-2 {
          position: relative;
          top: -210%;
          left: -10%;
          width: 12em;
          height: 4em;
          border-radius: 50px;
          background-image: linear-gradient(#171717, #171717, #353535, #353535, #171717);
          margin-right: 5em;
          clip-path: polygon(47% 0, 47% 0, 34% 34%, 54% 25%, 32% 100%, 29% 96%, 49% 32%, 30% 38%);
          transform: rotate(-8deg);
        }

        .antenna-dot-2 {
          position: relative;
          top: -294%;
          left: 94%;
          width: 0.5em;
          height: 0.5em;
          border-radius: 50%;
          border: 2px solid #1a1a2e;
          background-color: #979797;
          z-index: 99;
        }

        .tv-container {
          margin-top: 3em;
        }

        .tv-body {
          width: 17em;
          height: 9em;
          border-radius: 15px;
          background-color: #d36604;
          display: flex;
          justify-content: center;
          border: 2px solid #1d0e01;
          box-shadow: inset 0.2em 0.2em #e69635;
          position: relative;
        }

        .tv-body::after {
          content: "";
          position: absolute;
          width: 17em;
          height: 9em;
          border-radius: 15px;
          background: 
            repeating-radial-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 50% 0/2500px 2500px,
            repeating-conic-gradient(#d36604 0 0.0001%, #00000070 0 0.0002%) 60% 60%/2500px 2500px;
          background-blend-mode: difference;
          opacity: 0.09;
        }

        .curve-svg {
          position: absolute;
          margin-top: 0.25em;
          margin-left: -0.25em;
          height: 12px;
          width: 12px;
          fill: #1a1a2e;
        }

        .display-container {
          display: flex;
          align-items: center;
          align-self: center;
          justify-content: center;
          border-radius: 15px;
          box-shadow: 3.5px 3.5px 0px #e69635;
        }

        .screen-wrapper {
          width: auto;
          height: auto;
          border-radius: 10px;
        }

        .screen-inner {
          width: 11em;
          height: 7.75em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .screen-static {
          width: 13em;
          height: 7.85em;
          font-family: 'Montserrat', sans-serif;
          border: 2px solid #1d0e01;
          background: 
            repeating-radial-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 50% 0/2500px 2500px,
            repeating-conic-gradient(#000 0 0.0001%, #ffffff 0 0.0002%) 60% 60%/2500px 2500px;
          background-blend-mode: difference;
          border-radius: 10px;
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #252525;
          letter-spacing: 0.15em;
          text-align: center;
        }

        .screen-mobile {
          width: 13em;
          height: 7.85em;
          position: relative;
          font-family: 'Montserrat', sans-serif;
          background: linear-gradient(
            to right,
            #002fc6 0%,
            #002bb2 14.2857142857%,
            #3a3a3a 14.2857142857%,
            #303030 28.5714285714%,
            #ff0afe 28.5714285714%,
            #f500f4 42.8571428571%,
            #6c6c6c 42.8571428571%,
            #626262 57.1428571429%,
            #0affd9 57.1428571429%,
            #00f5ce 71.4285714286%,
            #3a3a3a 71.4285714286%,
            #303030 85.7142857143%,
            white 85.7142857143%,
            #fafafa 100%
          );
          border-radius: 10px;
          border: 2px solid #1a1a2e;
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #252525;
          letter-spacing: 0.15em;
          text-align: center;
          overflow: hidden;
        }

        .screen-mobile:before,
        .screen-mobile:after {
          content: "";
          position: absolute;
          left: 0;
          z-index: 1;
          width: 100%;
        }

        .screen-mobile:before {
          top: 0;
          height: 68.4782608696%;
          background: linear-gradient(
            to right,
            white 0%,
            #fafafa 14.2857142857%,
            #ffe60a 14.2857142857%,
            #f5dc00 28.5714285714%,
            #0affd9 28.5714285714%,
            #00f5ce 42.8571428571%,
            #10ea00 42.8571428571%,
            #0ed600 57.1428571429%,
            #ff0afe 57.1428571429%,
            #f500f4 71.4285714286%,
            #ed0014 71.4285714286%,
            #d90012 85.7142857143%,
            #002fc6 85.7142857143%,
            #002bb2 100%
          );
        }

        .screen-mobile:after {
          bottom: 0;
          height: 21.7391304348%;
          background: linear-gradient(
            to right,
            #006c6b 0%,
            #005857 16.6666666667%,
            white 16.6666666667%,
            #fafafa 33.3333333333%,
            #001b75 33.3333333333%,
            #001761 50%,
            #6c6c6c 50%,
            #626262 66.6666666667%,
            #929292 66.6666666667%,
            #888888 83.3333333333%,
            #3a3a3a 83.3333333333%,
            #303030 100%
          );
        }

        .error-text {
          background-color: #1a1a2e;
          padding: 0.3em;
          font-size: 0.75em;
          color: #00fff7;
          letter-spacing: 0.1em;
          border-radius: 5px;
          z-index: 10;
          position: relative;
        }

        .tv-lines {
          display: flex;
          column-gap: 0.1em;
          align-self: flex-end;
        }

        .line-1,
        .line-3 {
          width: 2px;
          height: 0.5em;
          background-color: #1a1a2e;
          border-radius: 25px 25px 0px 0px;
          margin-top: 0.5em;
        }

        .line-2 {
          flex-grow: 1;
          width: 2px;
          height: 1em;
          background-color: #1a1a2e;
          border-radius: 25px 25px 0px 0px;
        }

        .controls-panel {
          width: 4.25em;
          align-self: center;
          height: 8em;
          background-color: #e69635;
          border: 2px solid #1d0e01;
          padding: 0.6em;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          row-gap: 0.75em;
          box-shadow: 3px 3px 0px #e69635;
        }

        .knob-1 {
          width: 1.65em;
          height: 1.65em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 2px solid #1a1a2e;
          box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721, -2px 0px 0px 1px #1a1a2e;
          position: relative;
          cursor: pointer;
        }

        .knob-1::before {
          content: "";
          position: absolute;
          margin-top: 1em;
          margin-left: 0.5em;
          transform: rotate(47deg);
          border-radius: 5px;
          width: 0.1em;
          height: 0.4em;
          background-color: #1a1a2e;
        }

        .knob-1::after {
          content: "";
          position: absolute;
          margin-top: 0.9em;
          margin-left: 0.8em;
          transform: rotate(47deg);
          border-radius: 5px;
          width: 0.1em;
          height: 0.55em;
          background-color: #1a1a2e;
        }

        .knob-indicator {
          position: absolute;
          margin-top: -0.1em;
          margin-left: 0.65em;
          transform: rotate(45deg);
          width: 0.15em;
          height: 1.5em;
          background-color: #1a1a2e;
        }

        .knob-2 {
          width: 1.65em;
          height: 1.65em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 2px solid #1a1a2e;
          box-shadow: inset 2px 2px 1px #b49577, -2px 0px #513721, -2px 0px 0px 1px #1a1a2e;
          position: relative;
          cursor: pointer;
        }

        .knob-2::before {
          content: "";
          position: absolute;
          margin-top: 1.05em;
          margin-left: 0.8em;
          transform: rotate(-45deg);
          border-radius: 5px;
          width: 0.15em;
          height: 0.4em;
          background-color: #1a1a2e;
        }

        .knob-2::after {
          content: "";
          position: absolute;
          margin-top: -0.1em;
          margin-left: 0.65em;
          transform: rotate(-45deg);
          width: 0.15em;
          height: 1.5em;
          background-color: #1a1a2e;
        }

        .speakers {
          display: flex;
          flex-direction: column;
          row-gap: 0.5em;
        }

        .speaker-group {
          display: flex;
          column-gap: 0.25em;
        }

        .speaker-hole {
          width: 0.65em;
          height: 0.65em;
          border-radius: 50%;
          background-color: #7f5934;
          border: 2px solid #1a1a2e;
          box-shadow: inset 1.25px 1.25px 1px #b49577;
        }

        .speaker-line {
          width: auto;
          height: 2px;
          background-color: #171717;
        }

        .tv-stand {
          width: 100%;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 8.7em;
          position: relative;
        }

        .stand-leg-1 {
          height: 1em;
          width: 2em;
          border: 2px solid #171717;
          background-color: #4d4d4d;
          margin-top: -0.15em;
          z-index: -1;
        }

        .stand-leg-2 {
          height: 1em;
          width: 2em;
          border: 2px solid #171717;
          background-color: #4d4d4d;
          margin-top: -0.15em;
          z-index: -1;
        }

        .stand-base {
          position: absolute;
          height: 0.15em;
          width: 17.5em;
          background-color: #171717;
          margin-top: 0.8em;
        }

        .error-404 {
          position: absolute;
          display: flex;
          flex-direction: row;
          column-gap: 6em;
          z-index: -5;
          margin-bottom: 2em;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          font-family: 'Montserrat', sans-serif;
          font-weight: bold;
          color: rgba(0, 255, 247, 0.3);
        }

        .digit-4-1,
        .digit-0,
        .digit-4-2 {
          transform: scaleY(24.5) scaleX(9);
          font-size: 1rem;
        }

        /* Author: Subhasish */
        .error-404::before {
          content: "Subhasish";
          position: absolute;
          left: -9999px;
          opacity: 0;
        }

        @media only screen and (max-width: 495px) {
          .error-404 {
            column-gap: 6em;
          }
        }

        @media only screen and (max-width: 395px) {
          .error-404 {
            column-gap: 4em;
          }
          .digit-4-1,
          .digit-0,
          .digit-4-2 {
            transform: scaleY(25) scaleX(8);
          }
        }

        @media (max-width: 275px), (max-height: 520px) {
          .main-container {
            position: relative;
          }
        }
      `}</style>
    </div>
  );
}