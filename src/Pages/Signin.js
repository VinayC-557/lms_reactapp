import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

export default function Signin(){
    var navigate=useNavigate();

    var user =useRef(null);
    var pass =useRef(null);

    var myuser="vinaychandra";
    var mypass="vinay123456";
    

    const Validate =()=>{

        var un = user.current.value;
        var pw = pass.current.value;

        if(un===myuser && pw===mypass){
            var url='/Homepage';
            navigate(url);
        }

        else{
            alert("credentials are invalid, try again !")
            // navigate('/Error');
        }
    }

    return(

        <div className="Signin">
        <div className="container-fluid">


        <center>
        <div className='Login'>
          <img src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" alt="Digital Lync Logo" className="logo" />
          <h1 className='login_h1'>Welcome</h1>
          <p className="login_p1">Log in to Digital to continue to Digital Lync <br/> LMS.</p>
     
    <form className='form'>
        
        <input type='text' id='username' ref={user} placeholder='Enter username' className="userform" required="required"/><br></br><br/>
        <input type='password' id='password' ref={pass} placeholder='Password' className="userform" required="required"/><br></br><br/>
        <a className="forgotpassword" href="https://www.google.com">Forgot password? </a><br></br><br/>
        <button className="sign-in-button" onClick={()=>{Validate()}}>Continue</button>

    </form>
    </div>
         </center>

    


    </div>
    </div>

    )
}
