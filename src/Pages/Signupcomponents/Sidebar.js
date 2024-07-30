import React from 'react';
import './Sidebar.css';

function Sidebar({ lessons, selectedLesson, onSelectLesson }) {
  return (
    <div className="sidebar">
      <h3>Node-2402 7 AM Lokesh</h3>
      <ul>
        {lessons.map((lesson, index) => (
          <li
            key={index}
            className={selectedLesson === index ? 'selected' : ''}
            onClick={() => onSelectLesson(index)}
          >
            {lesson.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
