import React from "react";
import "./Footer.css";
import { HashLink as Link } from 'react-router-hash-link';
// import logo from "../../Assets/Images/Home/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <footer>
      <div className="footer-1">
        <div className="description">
          <div>
            <Link to="/">
              {/* <img src={logo} alt="Logo" srcset="" /> */}
              demo
            </Link>

              <Link to="/">
            {/* <h1>&nbsp;VOLV</h1> */}
            </Link>
          </div>
          <p>
            demo
          </p>
        </div>
        <div className="links">
          {/* <ul>
            <li><Link  to="/#works">How its Work</Link></li>
            <li><Link  to="/signup">Sign Up Free</Link></li>
          </ul> */}
        </div>
        <div className="follow-us">
          {/* <p>Follow Us</p>
          <div>  
            <a target="_blank" href="https://web.facebook.com/?_rdc=1&_rdr"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a target="_blank" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a target="_blank" href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
          </div> */}
        </div> 
        </div>
        
      {/* <div className="footer-2">
        <p>@ 2021 VOLV | Culver City, Ca 90232</p>
        <ul>
          <li><a href="#">Terms of Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">CA Privacy Policy</a></li>
          <li><a href="mailto:support@volv.ai">support@volv.ai</a></li>
        </ul>
      </div> */}
    </footer>
  );
}

export default Footer;
