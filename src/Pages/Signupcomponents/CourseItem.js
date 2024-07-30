import React from 'react';
import './CourseItem.css';

import { useNavigate } from 'react-router-dom';

function CourseItem({ course }) {


  var navigate = useNavigate();

  const nvideos = () => {
    var url = '../Video';

    navigate(url);
  }



  return (
    <div className="course-item">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-details">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <div className="course-actions">
        <button type="button" class="btn btn-primary">Live Class</button>
        <button type="button" class="btn btn-primary">Documents</button>
          <button type="button" class="btn btn-primary" onClick={()=>{nvideos()}}>Videos</button>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
