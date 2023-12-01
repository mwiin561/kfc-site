import React from "react";
import Chicken from "../assets/ChickenCart.png";
import Banner from "./Banner";
const BannerContent = () => {
  return (
    <>
     <Banner>
     <div className="flex flex-col justify-center md:items-start w-full px-2 ">
    
            <h1 className="text-5xl -translate-y-[50%] sm:translate-y-[0]  md:ml-[15%] md:text-6xl md:w-[90%] md:text-start text-center  md:text-center py-3 w-[100%] xl font-bold text-white">
              ITS FINGER LICKIN GOOD.
            </h1>
            <p className=" md:w-[70%] -translate-y-[50%] sm:translate-y-[0] md:ml-[15%]  py-3 text-white">
              KFC is an American fast food restaurant chain headquartered in
              Louisville, Kentucky, that specializes in fried chicken. It is the
              world's second-largest restaurant chain after McDonald's, with
              22,621 locations globally in 150 countries as of December 2019.Join us in Mukono for a finger-lickin' good time at KFC!
              Indulge in crispy, juicy chicken that's bound to tantalize your taste buds.
              Experience the perfect blend of flavor, fun, and good vibes. Don't miss out on the cluckin' excitement – KFC Mukono, where every bite is a delight! 🍗 #KFCTastesBetterTogethe
            </p>
            
          </div>
     </Banner>
    </>
  );
};

export default BannerContent;


  
