import React, { useState, useRef } from 'react';
import STYLESHEET from '../../STYLESHEET/Home.module.css';
import { HeaderIcons } from '../../assets/index'
import { Link } from 'react-router-dom';

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
          <button onClick={togglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      <div className={STYLESHEET.Honer_of_pakistan}>

        <div className={STYLESHEET.rightdiv}>
          <h1>Honor for Pakistan College of Law</h1>
          <p>PCL proudly highlights the achievements of our alumni and faculty members who have risen
            to become judges in the superior judiciary of Pakistan. Their success stands as a testament
            to the rich legacy of our institution. These individuals exemplify the culmination of dedication
            and hard work as well as the exceptional support provided by Pakistan College of Law.
            Their journey from our classrooms to the bench embodies the core values instilled in our
            faculty and students: integrity, diligence, and a commitment to justice.
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
        <div className={STYLESHEET.boxLeft}>one</div>
        <div className={STYLESHEET.boxRight}>two</div>
      </div>
    </div>
  );
};

export default Home;
