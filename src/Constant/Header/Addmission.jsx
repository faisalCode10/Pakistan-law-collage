import React from 'react'
import styleSheet from '../styles/addmission.module.css'
import { HeaderIcons } from '../../assets/index';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from "react-icons/md";

const Addmission = () => {
  return (
    <div className={styleSheet.MainDiv}>
    <div className={styleSheet.card}>
      <img src={HeaderIcons.Cardaddmiiionimage} alt='image'/>
      <h3>  Virtual Tour</h3>
      <p>Explore our beautiful<br/> campus</p>
      <h3><Link to="#">WELCOME <MdArrowRightAlt  style={{fontSize:"30px", verticalAlign: "middle"}}/></Link></h3>
   

    </div>
    <div className={styleSheet.APPLY}> 
    <h3> APPLY</h3>
    <h4><Link to="#"> JD ADMISSIONS</Link></h4>
    <h4><Link to="#">GRADUATE ADMISSIONS</Link></h4>
    <h4 style={{textAlign:'justify'}}><Link to="#">NONDISCRIMINATION, TITLE IX &<br/><span style={{marginLeft:"10px"}}>CLERY ACT STATEMENTS</span></Link></h4>
   
    </div>
    <div className={styleSheet.RESOURCES_SUPPORT}> 
    <h3>   FINANCIAL AID</h3>
    <h4><Link to="#"> FINANCIAL AID SUPPORT</Link></h4>
    <h4><Link to="#"> EVENT CALENDAR</Link></h4>
    <h4><Link to="#"> PROSPECTIVE & ADMITTED STUDENTS</Link></h4>
    <h4><Link to="#"> FINANCIAL AID FORMS & FAQS</Link></h4></div>

    <div className={styleSheet.LIBRARY}> 
    <h3>    VISIT</h3>
    <h4><Link to="#"> VIRTUAL TOUR</Link></h4>
    <h4><Link to="#"> VISIT & DIRECTIONS</Link></h4>
    <h4><Link to="#"> OUR SCHOOL & LOCATION</Link></h4>
    <h4><Link to="#"> NEW HAVEN & THE REGION</Link></h4>
  
    </div>
  </div>
  )
}

export default Addmission
