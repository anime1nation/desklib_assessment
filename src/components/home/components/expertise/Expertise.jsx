import React from "react";
import "./expertise.css"
import top from "../../../../assets/images/Group513.png"
import ask from "../../../../assets/images/Question.png"
import book from "../../../../assets/images/convenience.png"

export default function Expertise() {
  return (
    <div id="expert">
      <div className="card">
        <div className="ca">
            <img src={top} alt="a"/>
            <div className="text">
                <h5>Top study resources</h5>
                <p>Explore our digital database for millions of homework solutions.</p>
            </div>
        </div>
        <div className="ca">
            <img src={ask} alt="a"/>
            <div className="text">
                <h5>Ask an expert</h5>
                <p>Get connected to an expert and ask any question or doubts.</p>
            </div>
        </div>
        <div className="ca">
            <img src={book} alt="a"/>
            <div className="text">
                <h5>Book a session</h5>
                <p>Learn directly from specialists in an interactive live video session.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
