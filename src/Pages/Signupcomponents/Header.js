import "./Header.css"
import { ReactComponent as Redirect } from './square.svg';
function Header(){

return(

    <header className="header">
    <img src="https://www.digital-lync.com/images/digital-lyncs-devops-python-digital-marketing-training-hyderabad.png" alt="Digital Lync Logo" className="logo" />
    <div className="header-right">
      <a href="google.com">Digital Lync Connect <Redirect className="redirecticon"/></a>
      <div className="user-info">
        <div className="user-initials">VI</div>
        <div className="user-email">vinayarya@gmail.com</div>
      </div>
    </div>
  </header>
)
}

export default Header;