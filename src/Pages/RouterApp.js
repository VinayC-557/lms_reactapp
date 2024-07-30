import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Homepage from './Homepage';
import Error from './Error';
import Video from './Video';
// import Credits from './Signupcomponents/Credits';

const RouterApp = () => {
  return (
    <div>
      
        <Router>

            <Link to="/"></Link>
            <Link to="/Signin"></Link>
            <Link to="/Homepage"></Link>
            <Link to="/Error"></Link>
            <Link to="/Video"></Link>

            <Routes>
                <Route exact path='/' element={<Signup/>}> </Route>
                <Route exact path='/Signin' element={<Signin/>}> </Route>
                <Route exact path='/Homepage' element={<Homepage/>}> </Route>
                <Route exact path='/Error' element={<Error/>}> </Route>
                <Route exact path='/Video' element={<Video/>}></Route>



            </Routes>
        </Router>
          {/* <Credits/> */}
    </div>
  )
}

export default RouterApp
