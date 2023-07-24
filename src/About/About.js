import React from "react";
import "./About.css"
export default function About(){
    return(
        <div>
            <h1 id="About-head">About</h1>
            <div className="about-flex">
                <div className="about-card">
                    <img src="../../img/abou1.jpg" />
                    <p>
                    Our Foundation is a Non Profit Organisation which was started to help the Indian farmers through dynamic consulting for free in agriculture business, to yield value added benefits for farmers and to manage their farms based on requests. So we did see that we need to invent a product that delivers value to our consumers.
                    </p>
                </div>
                <div className="about-card">
     <img src="../../img/abou2.jpg" />
     <p>
     We accelerate sustainable and inclusive growth and deliver transformational impact for food and agriculture companies and organizations by driving efficiencies, fueling growth, shaping industries, and increasing organizational effectiveness. Our proprietary tools and digital and advanced analytics capabilities, combined with extensive experience are the cornerstones of the value we bring to our clients.
     </p>
 </div>
 <div className="about-card">
     <img src="../../img/abou3.jpg" />
     <p>
     Zha Foundation engages in multi-disciplinary research, capacity building, self improvements and undertakes campaigns linked to help the youth mind & heart health. A whole generation is more anxious, more fragile, more depressed. They’re much less comfortable taking risks. This is a real change in a generation.” So, We are developing ways to measure wellness that include resilience, love, hope, cultural identity, critical consciousness, self-determination, and agriculture ways of working improvements.
     </p>
 </div>
            </div>
        </div>

    );
}