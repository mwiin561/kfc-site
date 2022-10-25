import React from "react";
import Slider from "react-slick";
// import Chicken from "../assets/ChickenCart.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu1 from "../assets/Menu1.png";
import Menu2 from "../assets/Menu2.png";
import Menu3 from "../assets/Menu3.png";
import Menu4 from "../assets/Menu4.png";
import Menu5 from "../assets/Menu5.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <button className="bg-[#FFC71F] w-[40%] sm:w-[10%] py-3 text-white rounded-[20px] ml-[30%] sm:ml-[45%]">
        MENU
      </button>
      <div className="sm:mt-[2%] max-w-[80%] mx-[20%] ">
        <Slider {...settings}>
          <div className="ml-[20%]">
            <img src={Menu1} alt="menu1" />
            <span className="font-bold">9 PCS WINGS BUCKET</span>
          </div>
          <div className="ml-[20%]">
            <img src={Menu2} alt="menu2" />
            <span className="font-bold">SUPER FAMILY HCC</span>
          </div>
          <div className="ml-[20%]">
            <img src={Menu3} alt="menu3" />
            <span className="font-bold">WINGS BUCKET</span>
          </div>
          <div className="ml-[20%]">
            <img src={Menu4} alt="menu4" />
            <span className="font-bold">WINGER COMBO BBQ</span>
          </div>
          <div className="ml-[20%]">
            <img src={Menu5} alt="menu5" />
            <span className="font-bold">SNACK BUCKET 1</span>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Carousel;


 
