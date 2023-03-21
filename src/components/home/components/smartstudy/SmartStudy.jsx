import React from "react";
import "./smartstudy.css";
import smartStudy from "../../../../assets/svg/smartStudy.svg";
import online from "../../../../assets/svg/onlineSolutionIcon.svg";

export default function SmartStudy() {
  return (
    <div className="study">
      <section>
      <div className="im">
        <span className="imagespan">
            <img src={online} alt="a"/>
        </span>
      </div>
        <div className="smartsec">
          <div>
            <img src={smartStudy} alt="smartstudy" />
          </div>
          <div>
            <h2>Study-smart using our study resources</h2>
            <p className="study-p">
              Improve your grades with Desklib by exploring millions of solved
              questions and class notes shared by thousands of students all over
              the world. Get immediate access to any solution and learning
              resources by choosing a plan suitable to your needs. Become a
              contributor by sharing your documents and study materials and
              helping fellow students. Earn free access to any solution from our
              library using our free plans.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}
