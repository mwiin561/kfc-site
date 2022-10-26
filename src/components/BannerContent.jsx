import React from "react";
import Chicken from "../assets/ChickenCart.png";
const BannerContent = () => {
  return (
    <>
      <div className="w-full -mt-[120%] md:-mt-[35%]  flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          {/* Content */}
          <div className="flex flex-col justify-center md:items-start w-full px-2 ">
            <h1 className="text-5xl -translate-y-[50%] sm:translate-y-[0]  md:ml-[15%] md:text-6xl md:w-[90%] md:text-start text-center  md:text-center py-3 w-[100%] xl font-bold text-white">
              JAGONYA AYAM BUCKET MENU CAMPAIGN
            </h1>
            <p className=" md:w-[70%] -translate-y-[50%] sm:translate-y-[0] md:ml-[15%]  py-3 text-white">
              KFC is an American fast food restaurant chain headquartered in
              Louisville, Kentucky, that specializes in fried chicken. It is the
              world's second-largest restaurant chain after McDonald's, with
              22,621 locations globally in 150 countries as of December 2019.
            </p>
            <button className="border-[3px] mx-auto md:mx-0 my-5 text-white -translate-y-[200%] sm:translate-y-[0] rounded-[30px] md:ml-[15%] py-2 w-[50%] md:w-[40%] md:px-[30px]">
              ORDER NOW
            </button>
          </div>

          {/* END OF CONTENT */}
          <div>
            <img
              className="w-[80%] -translate-y-[45%] sm:translate-y-[0]"
              src={Chicken}
              alt="chicken"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContent;


  
