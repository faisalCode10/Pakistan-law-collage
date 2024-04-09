import React, { useState, useRef } from "react";
import STYLESHEET from "../../STYLESHEET/Home.module.css";
import { HeaderIcons } from "../../assets/index";
import { Link } from "react-router-dom";
import Card from "./component/Card";
import Image_Wth_Text from "./component/Image_Wth_Text";
import { Events } from "./component/Events";

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={STYLESHEET.Homemain}>
      <div className={STYLESHEET.VideoDiv}>
        <video
          ref={videoRef}
          src="http://demo9.combinesoft.net/assets/videos/pcl-hero-video.mp4"
          autoPlay={isPlaying}
          loop
        />
        <div className={STYLESHEET.video_Heading_Bottom}>
          <h2>Pakistan College of Law</h2>
          <p>28 Years of Excellence / Since 1996</p>
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        </div>
      </div>

      <div className={STYLESHEET.Honer_of_pakistan}>
        <div className={STYLESHEET.rightdiv}>
          <h1>Honor for Pakistan College of Law</h1>
          <p>
            PCL proudly highlights the achievements of our alumni and faculty
            members who have risen to become judges in the superior judiciary of
            Pakistan. Their success stands as a testament to the rich legacy of
            our institution. These individuals exemplify the culmination of
            dedication and hard work as well as the exceptional support provided
            by Pakistan College of Law. Their journey from our classrooms to the
            bench embodies the core values instilled in our faculty and
            students: integrity, diligence, and a commitment to justice.
          </p>
        </div>
        <div className={STYLESHEET.leftdiv}>
          <img src={HeaderIcons.LawwomanImage} alt="img" />
        </div>
      </div>

      <div className={STYLESHEET.programs}>
        <Link className={STYLESHEET.card}>
          <img src={HeaderIcons.launchpad1} />
          <h1>Faculty</h1>
        </Link>
        <Link className={STYLESHEET.card}>
          <img src={HeaderIcons.launchpad2} />
          <h1>Centres & Programmes</h1>
        </Link>
        <Link className={STYLESHEET.card}>
          <img src={HeaderIcons.launchpad3} />
          <h1>PCLRP</h1>
        </Link>
        <Link className={STYLESHEET.card}>
          <img src={HeaderIcons.launchpad2} />
          <h1>Pakistan Law Clinic</h1>
        </Link>
        <Link className={STYLESHEET.card}>
          <img src={HeaderIcons.launchpad3} />
          <h1>LEAP-Pakistan</h1>
        </Link>
        <Link className={STYLESHEET.card}>
          <img src={HeaderIcons.launchpad1} />
          <h1>PCL ‘On Air’</h1>
        </Link>
      </div>

      <div className={STYLESHEET.explore_law_program}>
        <div className={STYLESHEET.boxLeft}></div>
        <div className={STYLESHEET.boxRight}>
          <div className={STYLESHEET.heading}>
            <h1>Explore Our Law Programmes</h1>
            <div className={STYLESHEET.headinglink}>
              <Link to="path">All Areas of Study</Link>
              <img src={HeaderIcons.Arrow} />
            </div>
          </div>
          <div className={STYLESHEET.cardLayout}>
            <Card
              imgSource={HeaderIcons.areaOfStudy1}
              title={"LLb Hons. UOl"}
              content={
                "The Law School is renowned as a center for scholarship in constitutional law, and prominent scholars are well represented on the School’s faculty."
              }
              btn={`View Corporate &amp;Commercial Law`}
            />
            <Card
              imgSource={HeaderIcons.areaOfStudy2}
              title={"LLb Hons. UOl"}
              content={
                "The Law School offers a strong curriculum in corporate and commercial law as well as joint and doctoral degree programs."
              }
              btn={`View Corporate &amp;Commercial Law`}
            />
            <Card
              imgSource={HeaderIcons.areaOfStudy3}
              title={"LLb Hons. UOl"}
              content={
                "The Law School offers a strong curriculum in corporate and commercial law as well as joint and doctoral degree programs."
              }
              btn={`View Corporate &amp Commercial Law`}
            />
            <Card
              imgSource={HeaderIcons.areaOfStudy4}
              title={"LLb Hons. UOl"}
              content={
                "The Law School offers a strong curriculum in corporate and commercial law as well as joint and doctoral degree programs."
              }
              btn={`View Corporate &amp;Commercial Law`}
            />
            <Card
              imgSource={HeaderIcons.areaOfStudy5}
              title={"LLb Hons. UOl"}
              content={
                "The Law School offers a strong curriculum in corporate and commercial law as well as joint and doctoral degree programs."
              }
              btn={`View Corporate &amp;Commercial Law`}
            />
          </div>
          <button className={STYLESHEET.card_button}>
            More Areas of Interest
          </button>
        </div>
      </div>

      <div className={STYLESHEET.NewsHeader}>
        <h2>News</h2>
        <h3>All News  <img src={HeaderIcons.Arrow2} alt="img" /></h3>
        <div className={STYLESHEET.News}>
        </div>
      </div>


      <div className={STYLESHEET.News}>
        <div className={STYLESHEET.NewsRight}>
          <Link to={"#"}>
            <img src={HeaderIcons.News1} alt="image" />
            <h1>Ludwig Fellows Gain Insight into Public Leadership in D.C.</h1>
            <p>Law students from the Carol and Gene Ludwig Program in Public Sector Leadership visited Washington, D.C. in January to hear from government and policy leaders about the unique spectrum of experiences that led them to careers in public service.
            </p>
          </Link>
        </div>


        <div className={STYLESHEET.NewsLeft}>
          <Image_Wth_Text image={HeaderIcons.News2} content={"Judge J. Michael Luttig Kicks Off Crossing Divides Spring Series"} />
          <Image_Wth_Text image={HeaderIcons.News3} content={"Professor Balkin Awarded Book Prize by Georgetown Center for the Constitution"} />
          <Image_Wth_Text image={HeaderIcons.News4} content={"Reflecting on 200 Years: A Q&amp;A with Dean Heather K. Gerken"} />
          <Image_Wth_Text image={HeaderIcons.News5} content={"Historical Profile: Ellen Ash Peters ’54"} />
        </div>

      </div>


      <div className={STYLESHEET.Featuresicons}>
        <div className={STYLESHEET.linkDiv}>
          <Link to={"#"}>
            <img src={HeaderIcons.Stripone} alt="" />
          </Link>
          <Link to={"#"}>
            <img src={HeaderIcons.Striptwo} alt="" />
          </Link>
        </div>
        <div className={STYLESHEET.otherDiv}>
          <img src={HeaderIcons.Stripthree} alt="" />
          <img src={HeaderIcons.Stripfour} alt="" />
        </div>

      </div>

      <div className={STYLESHEET.NewsHeader}>
        <h2>Events</h2>
        <h3>All Events  <img src={HeaderIcons.Arrow2} alt="img" /></h3>
        <div className={STYLESHEET.News}>
        </div>
      </div>
      <div className={STYLESHEET.Events}>
        <Events datemonth={"22"}
          datenumber={"MAR"} titile={"Lattes with Librarians"} time={"2:00PM - 4:00PM"} />
            <Events datemonth={"22"}
          datenumber={"MAR"} titile={"YLCF Friday Fellowship - open to all!"} time={"1:10PM - 4:00PM"} />
            <Events datemonth={"22"}
          datenumber={"MAR"} titile={"Spring recess ends; classes resume, 8:10 a.m."} time={"All Day"} />
            <Events datemonth={"22"}
          datenumber={"MAR"} titile={" Finding Law: A Lillian Goldman Law Library Rare Book Exhibit"} time={"All Day"} />
            <Events datemonth={"22"}
          datenumber={"MAR"} titile={"At Gotham: Law School at 200 - A Rare Book Exhibit"} time={" All Day"} />
            <Events datemonth={"22"}
          datenumber={"MAR"} titile={"40 per transaction charge for late change to schedules."} time={"All Day"} />
      </div>
    
     
     
     <div className={STYLESHEET.BotttomSecondlast}>

<div className={STYLESHEET.leftone}>
  <div className={STYLESHEET.divonelef}>one</div>
  <div className={STYLESHEET.divtwoleft}>two</div>
</div>
<div className={STYLESHEET.rightone}></div>

     </div>


    </div>
  );
};

export default Home;
