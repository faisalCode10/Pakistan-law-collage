import React, { useState } from 'react';
import { HeaderIcons } from '../../assets/index';
import HeaderStyle from '../../STYLESHEET/header.module.css'
import { FaUser } from 'react-icons/fa'
import { RiFindReplaceLine } from "react-icons/ri";
import { TbArrowBadgeDownFilled } from "react-icons/tb";
import { MdArrowRight } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import Programes from './Programes';
import Addmission from './Addmission'
import OurFaculty from './OurFaculty';
import StudentLife from './StudentLife';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false); 
  const [isVisible_Programes, setIsVisible_Programes] = useState(false); // Initial state changed to false
  const [isVisible_Addmission, setIsVisible_Addmission] = useState(false);
  const [isVisible_Faculty, setIsVisible_Faculty] = useState(false);
  const [isVisible_Studentlife, setIsVisible_Studentlife] = useState(false);

  


  function toggleDropdown() {
    setIsOpen(!isOpen); // Toggle the dropdown state
  }


  function showProgrammes() {
    setIsVisible_Programes(!isVisible_Programes);
  }

  function showAdmission() {
    setIsVisible_Addmission(!isVisible_Addmission);
  }

  function showFaculty() {
    setIsVisible_Faculty(!isVisible_Faculty);
  }

  function showStudentLife() {
    setIsVisible_Studentlife(!isVisible_Studentlife);
  }

  return (
    <div style={{width:"100%", height:"10rem", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
      <div className={HeaderStyle.topheader}>
        <div>
          <Link to="/">
            <img src={HeaderIcons.headericon} alt="image" className={HeaderStyle.icon} />
          </Link>

        </div>
        <div className={HeaderStyle.Nav_item}>
      <input className={HeaderStyle.SearchInput} type="text" placeholder='Searching' /> 
      <button className={HeaderStyle.SearchButton}>Search</button>
        </div>
    
      </div>

      <div className={HeaderStyle.Bottom_Nav_items}>
        <div className={HeaderStyle.Right_Bottom_Nav_items}>
          <nav>
            <ul>
              <li>
              <button onClick={showProgrammes}>PROGRAMMES</button>
              </li>
              <li>
              <button onClick={showAdmission}>ADMISSIONS</button>
              </li>
              <li>
              <button onClick={showFaculty}>OUR FACULTY</button>
              </li>
              <li>
              <button onClick={showProgrammes}>STUDENT LIFE</button>
              </li>
            
            </ul>
          </nav>
        </div>
        <div className={HeaderStyle.leftBottom_Nav_items}>
          <nav>
            <ul>
              <li>
                <button>CENTER & WORKSHOPS<span style={{ fontSize: "30px", verticalAlign: "middle" }}><MdArrowRight/></span></button>
              </li>

              <li style={{ verticalAlign: "middle", marginTop:5, fontWeight:"700" }}>
                |
              </li>
              <li>
                  <button onClick={toggleDropdown}>NEWS & EVENTS <span style={{ fontSize: "30px", verticalAlign: "middle" }}><TbArrowBadgeDownFilled /></span></button>
                  {isOpen && (
                    <div className={HeaderStyle.dropdownContent}>
                      <ul>
                        <li className={HeaderStyle.dropdownItem}>NEWS & EVENTS</li>
                        <li className={HeaderStyle.dropdownItem}>NEWS</li>
                        <li className={HeaderStyle.dropdownItem}>EVENTS CALENDAR</li>
                        <li className={HeaderStyle.dropdownItem}>SUBMIT AN EVENT</li>
                        <li className={HeaderStyle.dropdownItem}>IN THE PRESS</li>
                      </ul>
                    </div>
                  )}
              </li>

            </ul>
          </nav>
        </div>
        {isVisible_Programes && <Programes/>} {/* Fixed condition for rendering Programes component */}
        {isVisible_Addmission && <Addmission/>} {/* Fixed condition for rendering Addmission component */}
        {isVisible_Faculty && <OurFaculty/>}
        {isVisible_Studentlife && <StudentLife/>}
      </div>
    
    </div>

  );
};

export default Header;
