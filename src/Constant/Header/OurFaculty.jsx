import React from 'react'
import styleSheet from '../styles/Faculty.module.css'
import { HeaderIcons } from '../../assets/index';
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from "react-icons/md";

function OurFaculty() {
  return (
     <div className={styleSheet.MainDiv}>
    <div className={styleSheet.card}>
      <img src={HeaderIcons.CardFacultyimage} alt='image'/>
      <h3>Faculty News</h3>
      <p>Prominent scholars with<br/> broad expertise</p>
      <h3><Link to="#">READ MORE <MdArrowRightAlt  style={{fontSize:"30px", verticalAlign: "middle"}}/></Link></h3>
   
    </div>

    <div className={styleSheet.RESOURCES_SUPPORT}> 
    <h3>OUR FACULTY</h3>
    <h4><Link to="#"> FACULTY DIRECTORY</Link></h4>
    <h4><Link to="#"> LECTURERS & AFFILIATES</Link></h4>
    <h4><Link to="#"> ADJUNCT & VISITING PROFESSORS</Link></h4></div>

    <div className={styleSheet.LIBRARY}> 




    <h3>SCHOLARSHIP</h3>
    <h4><Link to="#"> FACULTY NEWS</Link></h4>
    <h4><Link to="#"> FACULTY SCHOLARSHIP</Link></h4>
    <h4><Link to="#"> INSIDE LAW SCHOOL PODCAST</Link></h4>
  
    </div>
  </div>  
  )
}

export default OurFaculty
