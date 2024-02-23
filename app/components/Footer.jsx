'use client'
import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
const Footer = () => {
  const [showRules, setShowRules] = useState(false);
  return (
    <>
      {!showRules && (
        <div className="footer">
          <div className="rules" onClick={() => setShowRules(true)}>
            RULES
          </div>
        </div>
      )}
      <div className={showRules ? "mobile-guideline open" : "mobile-guideline"}>
        <h2>RULES</h2>
        <div className="guideline-img">
          <img src="/images/image-rules-bonus.svg" alt="" />
        </div>
        <MdOutlineClose
          className="mobile-close"
          onClick={() => setShowRules(false)}
        />
      </div>
      <div className={showRules ? "rules-bg" : "rules-bg quit"}>
        <div className={showRules ? "guideline open" : "guideline"}>
          <div className="guideline-flex">
            <h2>RULES</h2>
            <MdOutlineClose
              className="close"
              onClick={() => setShowRules(false)}
            />
          </div>
          <div className="guideline-img">
            <img src="/images/image-rules-bonus.svg" alt="" className="beats" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
