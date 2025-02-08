import React from "react";
import Image from "next/image";

export default function HeroBottom() {
  return (
    <>
      {/* section-1  */}

      <div className="bg-[#23856D]">
        {/* container */}
        <div className="mx-auto lg:max-w-[1044px] md:max-w-[850px] px-10 lg:px-0 h-auto md:h-[711px] flex items-end">
          <main className="px-6 w-[1049px] h-auto md:h-[600px] flex flex-col items-center md:items-start gap-8 md:gap-0 md:flex-row  ">
            {/* text */}
            <div className=" md:w-[599px] w-full h-auto md:h-[331px] mt-[60px] flex flex-col gap-[30px] text-center items-center md:items-start md:text-start">
              <h5 className="text-[16px] font-[700] text-white">Summer 2020</h5>
              <h1 className="text-5xl sm:text-6xl font-[700] text-white">
                Vita Classic Product
              </h1>
              <p className="w-full sm:w-[376px] text-xl tacking-[0.2px] text-white">
                We know how large objects will act, but things on a small scale.
              </p>
              {/* button and price  */}
              <div className="w-full md:w-[295px] flex flex-col items-center gap-3 md:flex-row md:gap-[34px]">
                <h3 className="text-white text-2xl font-[700]">$16.48</h3>
                <button className="btn">ADD TO CART</button>
              </div>
            </div>
            {/* Image  */}
            <div className="w-full md:w-[45%] h-auto md:h-[60vh] relative flex justify-end items-end  md:items-start">
              <Image
                src={"/Images/hero14.png"}
                alt="Hero 14"
                width={443}
                height={500}
                className="h-[600px]"
              />
            </div>
          </main>
        </div>
      </div>
      {/* section 2  */}
      {/* conatiner  */}
      <div className=" lg:max-w-[1440px] md:max-w-[950px] px-10 lg:px-0 sm:mx-auto h-auto md:h-[682px] flex flex-col  items-center md:flex-row gap-10 lg:gap-5">
        <div className="relative">
          <Image
            src="/Images/hero15.png"
            alt="Couple"
            width={704}
            height={682}
            className="object-cover w-full md:w-[704px] h-[662px] z-[100]"
          />
        </div>
        <div className="w-full md:w-[573px] h-auto md:h-[326px] flex flex-col items-center text-center md:text-start md:items-start  gap-[30px] font-[700]">
          <h5 className="text-[#BDBDBD] text-[16px] md:[18px] lg:[20px] ">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] text-[36px] md:text-[40px] lg:text-[48px]">
            Part of the Neural Universe
          </h2>
          <p className="text-[#BDBDBD] font-[400] text-xl w-full md:w-[376px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex flex-col md:flex-row gap-[16px]">
            <button className="btn">BUY NOW</button>
            <button className="btn bg-white text-[#2DC071] border-2 border-[#2DC071] hover:text-white">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
