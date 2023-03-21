import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from "../../../../assets/svg/slider1.svg";
import slide2 from "../../../../assets/svg/slider2.svg";
import slide3 from "../../../../assets/svg/slider3.svg";
import PrimaryBtn from "../../../primary-btn/PrimaryBtn";

export default function Features() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="features_page">
      <h2 className="heading">Our Best Features</h2>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["desktop"]}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
        showDots={true}
        swipeable={false}
        draggable={false}
      >
        <div>
        <img src={slide1} alt="slider 1" className="phone_img"/>

        <div className="card bg1">
          <div className="card_content">
            <h2>01</h2>
            <div>
              
            <h2>Study-smart using our study resouces</h2>
            <div className="under-line"></div>
            </div>
            <p>
              Desklib is your home to millions of study resources helping you
              secure better marks. We offer academic study solutions for every
              subject and course. Our library has millions of assignment
              solutions, academic reports, research projects, presentations,
              essays, dissertations, and a lot more for you to access and
              download. Getting the best study materials will boost your
              academic career and build the right kind of future that you want.
            </p>
            <PrimaryBtn>Study Resources</PrimaryBtn>
          </div>
          <img src={slide1} alt="slider 1" className="pc_img"/>
        </div>
        </div>
<div>
<img src={slide2} alt="slider 2" className="phone_img"/>

        <div className="card bg2">
          <div className="card_content">
            <h2>02</h2>
            <div>

            <h2>Ask an expert and live online session</h2>
            <div className="under-line"></div>
            </div>
            <p>
              If you are stuck with a question to which you need answers and
              possible explanations, we have a qualified and experienced team of
              experts who can provide solutions in depth. Desklib connects you
              with an expert via chat sessions so you can learn and get all the
              answers. You can also book online tutoring sessions with our
              specialist and get assistance in real time.
            </p>
            <PrimaryBtn>Homework Help</PrimaryBtn>
          </div>
          <img src={slide2} alt="slider 2" className="pc_img"/>
        </div>
</div>
<div>
<img src={slide3} alt="slider 3" className="phone_img"/>

        <div className="card bg3">
          <div className="card_content">
            <h2>03</h2>
            <div>

            <h2>Improve your writing with compare checker</h2>
            <div className="under-line"></div>
            </div>
            <p>
              Now you can use the Desklib trusted grammar checker and similarity
              checker tool. We are committed to helping you improve your writing
              and offer assistance in proofreading and editing. Write better
              with our tools and take guidance from our proofreaders.
            </p>
            <PrimaryBtn>Compare Checker</PrimaryBtn>
          </div>
          <img src={slide3} alt="slider 3" className="pc_img"/>
        </div>
</div>

      </Carousel>
    </div>
  );
}
