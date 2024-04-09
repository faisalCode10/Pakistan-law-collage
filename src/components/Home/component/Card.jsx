import React from "react";
import { Link } from "react-router-dom";
import STYLESHEET from "../../../STYLESHEET/Home.module.css";

function Card({ title, imgSource, content, btn }) {
  return (
    <div className={`${STYLESHEET.overLay} `} style={{ backgroundImage: `url(${imgSource})` }}>
      <div className={STYLESHEET.overlayContent}>
        <h2>{title}</h2>
        <p>{content}</p>
        <Link to="/" className={STYLESHEET.btn}>
          {btn}
        </Link>
      </div>
    </div>
  );
}

export default Card;
