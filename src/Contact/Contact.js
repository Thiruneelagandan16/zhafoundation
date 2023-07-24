import React from "react";
import "./Contact.css"
export default function About(){
    return(
        <div>
            <div className="Contact">
        <h1>Contact Us</h1>
        <div>
            <input placeholder="Email Address"></input><button>sign in</button>
            <div className="social">
  <div className="socialicon">
    <a href="https://www.facebook.com/ZHAFoundation1/">
    <i className="fa-brands fa-facebook-f" />
    </a>
  </div>
  <div className="socialicon">
  <a href="">
    <i className="fa-brands fa-instagram" />
    </a>
  </div>
  <div className="socialicon">
  <a href="https://www.youtube.com/@zhafoundation">
    <i className="fa-brands fa-youtube" />
    </a>
  </div>
  <div className="socialicon">
  <a href="">
    <i className="fa-brands fa-twitter" />
    </a>
  </div>
</div>
        </div>
            </div>
        </div>
    );
}
