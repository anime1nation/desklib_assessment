import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import card1Img from "../../../../assets/images/card1.jpg";
import card2Img from "../../../../assets/images/card2.jpg";
import card3Img from "../../../../assets/images/card3.jpg";

export default function HomeWork() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="home_work">
      <h2>Most Viewed Homework Solutions</h2>
      <p className="para">
        Check out the most popular and recent documents uploaded by other
        students.
      </p>
      <Carousel
        responsive={responsive}
        infinite={true}
        removeArrowOnDeviceType={["mobile"]}
        showDots={true}
      ><div className="car">
        <div className="carousal_card">
          <div className="img_box">
            <img src={card1Img} alt="card1" />
          </div>
          <p>Constructor Planning 1.</p>
          <button className="doc_btn">View document</button>
        </div>
        </div>
        <div className="car">
        <div className="carousal_card">
          <div className="img_box">
            <img src={card2Img} alt="card2" />
          </div>
          <p>Advanced BPMN/BPM Lifecycle..</p>
          <button className="doc_btn">View document</button>
        </div>
        </div>
        <div className="car">
        <div className="carousal_card">
          <div className="img_box">
            <img src={card3Img} alt="card1" />
          </div>
          <p>PEER REVIEW OF SCIENTIFIC ARTICLE.</p>
          <button className="doc_btn">View document</button>
        </div>
        </div>
        <div className="car">
        <div className="carousal_card">
          <div className="img_box">
            <img src={card1Img} alt="card1" />
          </div>
          <p>CORPORATE ACCOUNTING.</p>
          <button className="doc_btn">View document</button>
        </div>
        </div>
        <div className="car">
        <div className="carousal_card">
          <div className="img_box">
            <img src={card1Img} alt="card1" />
          </div>
          <p>Constructor Planning 1.</p>
          <button className="doc_btn">View document</button>
        </div>
        </div>
      </Carousel>
    </div>
  );
}
