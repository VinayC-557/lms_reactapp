import "./Signup.css";
import homepic from "./Signupcomponents/homepic.jpg";

import { useNavigate } from "react-router-dom";

function Signup() {
  var navigate = useNavigate();

  const SignupNavigator = () => {
    var url = "./Signin";

    navigate(url);
  };

  return (
    <div className="sign-in-container">
      <div className="left-panel">
        <img
          src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png"
          alt="Digital Lync Logo"
          className="logo"
        />
        <h1 className="signuptext">Welcome</h1>
        <p className="signuppara">Please sign in to your account below</p> <br/>
        <button className="sign-in-button" onClick={()=>{SignupNavigator()}}>
          Sign In
        </button>
      </div>
      <div className="right-panel">
        <img
          src={homepic}
          alt="Person with Laptop"
          className="background-image"
        />
      </div>
      <button className="contact-us-button">Contact Us</button>
    </div>
  );
}

export default Signup;
