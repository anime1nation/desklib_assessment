import React from "react";
import whatsapp from '../../assets/svg/whatsapp.svg'
import "./styles.css";
import f1 from "../../assets/svg/facebook.svg"
import f2 from "../../assets/svg/instagram.svg"
import f3 from "../../assets/svg/linkedin.svg"
import f4 from "../../assets/svg/redit.svg"
import f5 from "../../assets/svg/twiter.svg"

export default function Footer() {
  return (
    <div id="footer">
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
          <h3><img className="imgw" src={whatsapp} alt="a"/>+1-312 997 5479</h3>
          <li>Chat with our experts. we are online and ready to help.</li>
          <h3>Follow Us</h3>
          <div className="imgf">
            <a href="/" ><img className="f" src={f1} alt="a"/></a>
            <a href="/" ><img className="f" src={f2} alt="a"/></a>
            <a href="/" ><img className="f" src={f3} alt="a"/></a>
            <a href="/" ><img className="f" src={f4} alt="a"/></a>
            <a href="/" ><img className="f" src={f5} alt="a"/></a>
          </div>
        </div>
      </div>
      <label>©2023 | A2Z Pte.Ltd. | All rights reserved.</label>
    </div>
  );
}
