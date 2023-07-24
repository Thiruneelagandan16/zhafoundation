import React from "react";
import "./Footer.css"
// import FLOGO from ../../img/flogo.pn;
export default function Footer(){
    return(
      <div>
        <div className="footer">
  <div className="FCONE">
    <div className="Fconimg">
      <div>
      <a href="https://zhafoundation.in/">
      <img src="../../img/flogo.png" />
      </a>
      </div>
      <div id="transkey">
        <a href="https://www.transkeyconsulting.com/">
      <img src="../../img/transkeylogo.png" />
      </a>
      </div>
    </div>
    <div className="txt">
       <p>
       Transkey Consulting is a subsidiary company of ZHA Foundation Charitable Trust, established to provide specialized advisory services and consulting expertise across various industries, aiming to support the foundation's charitable initiatives and projects.
      </p> 
    </div>
    <div className="social">
      <div className="socialicon">
        <i className="fa-brands fa-facebook-f" />
      </div>
      <div className="socialicon">
        <i className="fa-brands fa-instagram" />
      </div>
      <div className="socialicon">
        <i className="fa-brands fa-youtube" />
      </div>
      <div className="socialicon">
        <i className="fa-brands fa-twitter" />
      </div>
    </div>
  </div>

  <div className="FCTWO">
    <h3>ORGANIZATION</h3>
    <ul>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Team</a>
      </li>
      <li>
        <a href="#">Careers</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
  <div className="FCTHE">
    <h3>DONATE</h3>
    <ul>
      <li>
        <a href="#">Blood Donate</a>
      </li>
      <li>
        <a href="#">Fundraising</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Login</a>
      </li>
    </ul>
  </div>
  <div className="FCFOR">
    <h3>LEGAL</h3>
    <ul>
      <li>
        <a href="#">Privacy</a>
      </li>
      <li>
        <a href="#">Terms</a>
      </li>
      <li>
        <a href="#">Security</a>
      </li>
    </ul>
  </div>
</div>

<div className="copyright">
  <div id="underline"></div>
<p id="copytext">
© 2023 Zhafoundation. All rights reserved.
</p>
</div>
</div>
    );
}