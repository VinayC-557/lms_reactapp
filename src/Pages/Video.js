// import VideosApp from "./Signupcomponents/VideosApp";
// import Header from "./Signupcomponents/Header";
import React, { useState } from 'react';
import Sidebar from "./Signupcomponents/Sidebar";
import Tabs from "./Signupcomponents/Tabs";
import "./Video.css"
import Header from './Signupcomponents/Header';
function Video() {
    const lessons = [
        { date: '06-Jun-24', videoUrl: 'https://www.youtube.com/embed/vJEO57B05Sg?si=vAnycGtmCQzrysuM' },
        { date: '10-Jun-24', videoUrl: 'https://www.youtube.com/embed/ooBxSg1Cl1w?si=u_cDWboUxRWqbvlC' },
        { date: '11-Jun-24', videoUrl: 'https://www.youtube.com/embed/BGeDBfCIqas?si=RRpeL5w1BtFRDOhF' },
        // Add more lessons here
      ];
    
      const [selectedLesson, setSelectedLesson] = useState(0);

    return(

        <div className="App">
        {/* <header className="header">
          <img src="path/to/logo.png" alt="Digital Lync Logo" className="logo" />
          <div className="header-right">
            <a href="#">Digital Lync Connect</a>
            <div className="user-info">
              <div className="user-initials">LO</div>
              <div className="user-email">lokesh@digital-edify.com</div>
            </div>
          </div>
        </header> */}
        <Header/>
        <div className="main-content">
          <Sidebar
            lessons={lessons}
            selectedLesson={selectedLesson}
            onSelectLesson={setSelectedLesson}
          />
          <Tabs
            videoUrl={lessons[selectedLesson].videoUrl}
            notes="Notes content here"
            resources="Resources content here"
          />
        </div>
      </div>
    );
  }


export default Video;