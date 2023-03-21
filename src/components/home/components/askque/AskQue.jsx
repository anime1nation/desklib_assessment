import React from "react";
import "./askque.css";
import pic from "../../../../assets/svg/askPic.svg";
import bold from "../../../../assets/svg/askBold.svg";
import menu from "../../../../assets/svg/askmenu.svg";
// import b1 from "../../../../assets/images/b1.webp";
// import b2 from "../../../../assets/images/b2.webp";
// import b3 from "../../../../assets/images/b3.webp";
// import b4 from "../../../../assets/images/b4.webp";

export default function AskQue() {
  return (
    <div id="banner">
      <div className="uask">
        <div className="ask">
          <h1>Study better together</h1>
          <span>
            <p>
              Access millions of verified study materials from students.
              <br />
              Get 24/7 homework help from verified subject experts.
            </p>
          </span>
        </div>
        <div className="bcard">
          <h3>Ask a question</h3>
          <div className="but">
            <div className="span1">
              <span>Type your question or attach a picture here.</span>
            </div>
            <div className="img22">
              <img src={pic} alt="a" />
              <img src={bold} alt="a" />
              <img src={menu} alt="a" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="imageslide">
                <div className="slo"><img src={b1} alt="a"/></div>
                <div className="slo"><img src={b2} alt="a"/></div>
                <div className="slo"><img src={b3} alt="a"/></div>
                <div className="slo"><img src={b4} alt="a"/></div>
            </div> */}
    </div>
  );
}
