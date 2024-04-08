import React, { useState } from "react";
import { Link } from "react-router-dom";
import STYLESHEET from "../../../STYLESHEET/Home.module.css";

function Card({ title, imgSource, content, btn }) {

  return (
    <>
      <img src={imgSource} alt="" className={STYLESHEET.cardImg} />
        <div className={STYLESHEET.overlay}>
          <div className={STYLESHEET.overlayContent}>
            <h2>{title}</h2>
            <p>{content}</p>
            <Link to="" className={STYLESHEET.btn}>
              {btn}
            </Link>
          </div>
        </div>
    
    </>
  );
}

export default Card;
