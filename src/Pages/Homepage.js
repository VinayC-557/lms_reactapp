import Header from "./Signupcomponents/Header"
import "./Homepage.css"
import CourseList from "./Signupcomponents/CourseList"
export default function Homepage(){

    return(
        <div className="App">
      <Header />
      <div className="content">
        <h1 className="homepage_h1">Learn. <span className="do">Do.</span> Grow.</h1>
        <p className="quote">"  The only thing standing between you and your dream is the will to try and the belief that it is actually possible.</p>
        <p className="author"> - Joel Brown</p>
        <CourseList />
      </div>
    </div>
      
    )
}