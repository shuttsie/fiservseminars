import React from "react";
import Sidebar from "./Sidebar";

const HeroInfo = () => (
   <div className="hero-container">
      <div className="hero-info">
      <h3>Register for the Precision Education Seminar</h3>
         <p>
            We are better together. Join your Fiserv experts and peers for interactive presentations and discussions that provide the necessary insight to become more efficient. Use this virtual venue to learn more about the software you use every day and share your best practices and software tips all while building a diverse network of professional relationships.
         </p>
         <p>
            This fall, the Precision Education Seminars are three days of interactive sessions that provide the ideal setting to gain new perspectives and make valuable connections with peers and Fiserv experts.
         </p>
      <h2>Fees</h2>
         <p class="italic-important">
         Sign up early to take advantage of a <b>$50 registration discount.</b>
         </p>
      <h3>Seminar Fees</h3>
         <ul>
            <li>Early registration fee through August 31: 
               <ul>
                  <li>$450 per connection</li>
                  <li>$850 for <b>2</b> connections - *Recordings included</li> 
               </ul>
            </li>
            <br />
            <li>Standard registration fee after August 31:
               <ul>
                  <li>$500 per connection</li>
                  <li>$950 for <b>2</b> connections - *Recordings included</li>
                  <li>$1,750 for <b>3</b> connections - *Recordings included</li>
               </ul>
            </li>
         </ul>
      </div>
      <div className="hero-sidebar">
         <Sidebar/>
      </div>
   </div>
  );
  
  export default HeroInfo;