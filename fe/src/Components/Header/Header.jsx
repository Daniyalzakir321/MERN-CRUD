import React from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";
// import logo from "../../assets/Images/Home/Logo.png";

function Header() {
  return (
    <div>
      <div className="container col-md-12 ">
        <div className="row header_row">
          <div className="col-md-4 col-sm-12 logo">
            <Link to="/">
              {/* <img src={logo} alt="Logo" srcset="" /> */}
              demo
            </Link>
          </div>

          <div className="col-md-4 col-sm-12 options">
            {/* <div>
              <Link to="/#works">How&nbsp;It&nbsp;Works</Link>
            </div>
            <div>
              <Link to="/pricing">Pricing</Link>
            </div> */}
          </div>

          <div className="col-md-4 col-sm-12 options2">
            {/* <Link to="#">Login</Link>
            <Link to="/signup">Sign&nbsp;up</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
