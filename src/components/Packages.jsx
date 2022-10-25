import React from "react";
import Box from "../assets/Box.png";
import Box2 from "../assets/Box2.png";
import Bucket from "../assets/Bucket.png";
import ColaFanta from "../assets/ColaFanta.png";
import Donut from "../assets/Donut.png";
function Packages() {
  return (
    <div className="bg-red-300 mt-[5%] w-full h-[500px]">
      <div className="grid ml-[3%] translate-y-[20%] grid-cols-1 sm:grid-cols-3">
        <div className="w-[90%] -translate-y-[30%] rounded-[10px] bg-white h-[200px] ">
          <h2 className="font-bold text-2xl ml-[5%] translate-y-[40%] w-[30%]">
            ANY DAY OFFERS
          </h2>
          <h3 className="ml-[5%] translate-y-[120%]">KRISPY BURGER</h3>
          <button className="bg-[#F73D27] translate-y-[50px] w-[30%] py-2 text-white rounded-[20px] ml-[5%]">
            $1,000
          </button>
          <img
            className="ml-[40%] -translate-y-[60%]"
            src={Donut}
            alt="donut"
          />
        </div>
        <div className="w-[90%] -translate-y-[30%] rounded-[10px] bg-red-900 h-[200px] ">
          <h2 className="font-bold text-white text-2xl ml-[5%] translate-y-[40%] w-[40%]">
            ALA KARTE SPECIAL
          </h2>
          <h3 className="ml-[5%] text-white translate-y-[120%]">
            KOLONEL YAKINIKU
          </h3>
          <button className="bg-[#FFC71F] translate-y-[50px] w-[30%] py-2 text-black rounded-[20px] ml-[5%]">
            $100
          </button>
          <img
            className="ml-[40%] -translate-y-[60%]"
            src={Bucket}
            alt="donut"
          />
        </div>
        <div className="w-[90%] -translate-y-[30%] rounded-[10px] bg-white h-[200px] ">
          <h2 className="font-bold text-2xl ml-[5%] translate-y-[40%] w-[40%]">
            SPECIAL COMBO BOX
          </h2>
          <h3 className="ml-[5%] translate-y-[120%]">KRISPY BURGER</h3>
          <button className="bg-[#F73D27] translate-y-[50px] w-[30%] py-2 text-white rounded-[20px] ml-[5%]">
            $2,000
          </button>
          <img className="ml-[40%] -translate-y-[60%]" src={Box} alt="donut" />
        </div>

        <div className="grid translate-y-[20%] grid-cols-2">
          <div className="w-[280%] -translate-y-[30%] rounded-[10px] bg-white h-[200px] ">
            <h2 className="font-bold text-2xl ml-[5%] translate-y-[40%] w-[40%]">
              SPECIAL COMBO DUOS{" "}
            </h2>
            <h3 className="ml-[5%] translate-y-[120%]">KRISPY BURGER</h3>
            <button className="bg-[#F73D27] translate-y-[50px] w-[30%] py-2 text-white rounded-[20px] ml-[5%]">
              $2,000
            </button>
            <img
              className="ml-[40%] -translate-y-[60%]"
              src={Box2}
              alt="donut"
            />
          </div>
          <div className="w-[280%] ml-[200%] -translate-y-[30%] rounded-[10px] bg-white h-[200px] ">
            <h2 className="font-bold text-2xl ml-[5%] translate-y-[40%] w-[40%]">
              SPECIAL COMBO FAMILY{" "}
            </h2>
            <h3 className="ml-[5%] translate-y-[120%]">KRISPY BURGER</h3>
            <button className="bg-[#F73D27] translate-y-[50px] w-[30%] py-2 text-white rounded-[20px] ml-[5%]">
              $2,000
            </button>
            <img
              className="ml-[40%] -translate-y-[60%]"
              src={ColaFanta}
              alt="donut"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
