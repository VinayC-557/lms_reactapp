import React, { useState } from 'react';
import CourseItem from './CourseItem';
import './CourseList.css';

function CourseList() {
  const [search, setSearch] = useState('');
  const courses = [
    {
      id: 1,
      title: 'Node-2402 7 AM Lokesh',
      description: "This Node course introduces learners to the powerful, rapidly evolving technology that supports back-end web development. Gain hands-on experience creating server-side applications using m Ducccu JavaScript and Node.js, focusing on asynchronous programming, handling data, middleware, and RESTful APIs. The course also digs deep into Node's Event Loop and non-blocking 1/0 model, providing an understanding of how Node applications work under the hood. Ideal for... ",
      image: '/nodejs.png'
    },
    {
      id: 2,
      title: 'Python-2412 7 AM Sajeed',
      description: 'This Python course provides an immersive, hands-on learning experience, covering basic to advanced concepts...',
      image: '/Python.png'
    },
    // Add more courses here
  ];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="course-list">
      <h2>My Courses</h2>
      <input
        type="text"
        placeholder="Search Courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="courses">
        {filteredCourses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
