import React from 'react'
import "./reader.css"
import p1 from "../../../../assets/svg/p1.svg"
import p2 from "../../../../assets/svg/p2.svg"
import p3 from "../../../../assets/svg/p3.svg"
import star from "../../../../assets/svg/star.svg"

export default function Reader() {
    return (
        <div id="reader">
            <h2>Our Happy Readers</h2>
        <div className="card">
            
          <div className="ca">
              <img className='img1' src={p1} alt="a"/>
              <div>
                <span className='spa'>
                  <h5>Linh Susan</h5>
                  <img src={star} alt="a"/>
                  <label>4.8</label>
                  </span>
                  <p>Homework and assignments solutions at Desklib.com are the best. I personally feel that they have such an excellent collection of study resources. I'll surely visit this place again.</p>
              </div>
          </div>
          <div className="ca">
              <img className='img1' src={p2} alt="a"/>
              <div>
              <span className='spa'>
                  <h5>Nito Aloan</h5>
                  <img src={star} alt="a"/>
                  <label>5.0</label>
                  </span>
                  <p>I would like to thank Desklib library. That's really a great platform for online study resources. I got the best solutions for my assignment.</p>
              </div>
          </div>
          <div className="ca">
              <img className='img1' src={p3} alt="a"/>
              <div>
              <span className='spa'>
                  <h5>Hasan Aoli</h5>
                  <img  src={star} alt="a"/>
                  <label>4.5</label>
                  </span>
                  <p>Best homework help website. Hello, I got 75 marks in my business research proposal. Humbly thanking you guys from the bottom of my heart! Thanks a million!</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
