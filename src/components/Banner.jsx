import React from "react";
import Chicken from "../assets/ChickenCart.png";

const Banner = ({children}) => {
  return (
    <> 
    <div className="w-[100%] md:-mt-[10%]  h-[70vh] md:h-[100vh] bg-[#F73D27]"> </div>
    <div className="w-full -mt-[120%] md:-mt-[35%]  flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          {/* Content */}
          {children}

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

export default Banner;
