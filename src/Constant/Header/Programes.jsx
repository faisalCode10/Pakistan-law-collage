import React from 'react'
import styleSheet from '../styles/programes.module.css'
import { HeaderIcons } from '../../assets/index';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from "react-icons/md";
function Programes() {
  return (
    <div className={styleSheet.MainDiv}>
      <div className={styleSheet.card}>
        <img src={HeaderIcons.Cardprogramsimage} alt='image'/>
        <h3>Programmes</h3>
        <p>Discover your passion</p>
        <h3><Link to="#"> ACADEMICS <MdArrowRightAlt  style={{fontSize:"30px", verticalAlign: "middle"}}/></Link></h3>

      </div>
      <div className={styleSheet.STUDY_LAW_AT_PCL}> 
      <h3>STUDY LAW AT PCL</h3>
      <h4><Link to="#"> DEGREE PROGRAMMES</Link></h4>
      <h4><Link to="#"> CERTIFICATES & DIPLOMAS</Link></h4>
      <h4><Link to="#"> AREAS OF STUDY</Link></h4>
      <h4><Link to="#"> CLINICAL LEARNING</Link></h4>
      </div>
      <div className={styleSheet.RESOURCES_SUPPORT}> 
      <h3> RESOURCES & SUPPORT</h3>
      <h4><Link to="#"> ACADEMIC CALENDAR</Link></h4>
      <h4><Link to="#"> EVENT CALENDAR</Link></h4>
      <h4><Link to="#"> ACADEMIC SUPPORT & RESOURCES</Link></h4>
      <h4><Link to="#"> ALUMNI & STUDENT PROFILES</Link></h4></div>

      <div className={styleSheet.LIBRARY}> 
      <h3>  LIBRARY</h3>
      <h4><Link to="#"> ACADEMIC CALENDAR</Link></h4>
      <h4><Link to="#"> ONLINE RESOURCES & DATABASES</Link></h4>
      <h4><Link to="#"> ACADEMIC SUPPORT & RESOURCES</Link></h4>
      </div>
    </div>
  )
}

export default Programes
