import React from 'react'
import STYLESHEET from '../../../STYLESHEET/Home.module.css'
import { HeaderIcons } from "../../../assets/index";
import { Link } from "react-router-dom";


function Image_Wth_Text({ image,content }) {
  return (
    
    <Link className={STYLESHEET.CardWithTExt}>
      <img src={image} alt="img" />
       <p>{content}</p>
    </Link>
  
  )
}

export default Image_Wth_Text
