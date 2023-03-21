import React from "react";
import whatsapp from '../../assets/svg/whatsapp.svg'
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="f-detail">
        <div className="subject">
          <h3>Subjects</h3>
          <li>Business Management</li>
          <li>Art & Design</li>
          <li>Computer Science</li>
          <li>Education & Teaching</li>
          <li>Engineering</li>
          <li>Health & Medicine</li>
          <li>Humanities</li>
          <li>Mathematics</li>
          <li>Programming</li>
          <li>Science</li>
          <li>Social Science</li>
        </div>
        <div className="pages">
          <h3>Pages</h3>
          <li>Homework Help</li>
          <li>Study Resources</li>
          <li>Blogs</li>
          <li>Writing</li>
          <li>Subscription</li>
          <br/>
          <h3>Tools</h3>
          <li>Grammer Checker</li>
          <li>Plagiarism Checker</li>
        </div>
        <div className="support">
          <h3>Support</h3>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Copyright</li>
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
        </div>
        <div className="contact">
          <h3><img className="img" src={whatsapp} alt="a"/>+1-312 997 5479</h3>
          <li>Chat with our experts. we are online and ready to help.</li>
          <h3>Follow Us</h3>
          <div className="imgf">
            {/* <img src={f1}/>
            <img src={f2}/>
            <img src={f3}/>
            <img src={f4}/>
            <img src={f5}/> */}
          </div>
        </div>
      </div>
      <label>©2023 | A2Z Pte.Ltd. | All rights reserved.</label>
    </div>
  );
}
