import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Circle from "./Circle";
import Image from "next/image";
import PricingBottom from "./PricingBottom";

export default function Pricing() {
  return (
    <>
      <div className="px-10 lg:px-0 mx-auto max-w-[870px] h-[280px] flex justify-center items-center">
        {/* conatiner  */}
        <div className="w-[450px] h-[180px] flex flex-col items-center gap-4 ">
          <h5 className="text-[#737373] text-[16px] text-center font-[700]">
            Pricing
          </h5>
          <h1 className="text-[40px] md:text-[58px] font-[700] text-[#252B42] text-center">
            Simple Pricing
          </h1>
          <div className="flex items-center gap-3 text-sm font-[700]">
            <Link href={"#"} className="text-[#252B42]">
              Home
            </Link>{" "}
            <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
            <Link href={"#"} className="text-[#BDBDBD]">
              Shop
            </Link>
          </div>
        </div>
      </div>
      {/* conatiner  */}
      <div className="mx-auto px-10 lg:px-0 lg:max-w-[1050px] md:max-w-[900px] h-auto lg:h-[1168px] py-[112px] flex flex-col items-center gap-20 md:gap-12">
        {/* heading and text  */}
        <div className="w-full md:w-[625px] h-[100px] flex flex-col items-center gap-[10px] ">
          <h2 className="text-[40px] font-[700] text-[#252B42]">Pricing</h2>
          <p className="w-[90%] md:w-[470px] text-[#737373] text-sm text-center font-[400]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        {/* Pricing cards  */}
        <div className="px-10 lg:px-0 lg:max-w-[985px] md:max-w-[850px] h-auto lg:h-[704px] flex flex-col md:flex-row md:items-start items-center gap-8 md:gap-0">
          {/* card 1  */}
          <div className="w-[327px] h-[664px] px-[40px] py-[50px] flex flex-col gap-[35px] items-center border border-[#23A6F0] rounded-xl   transition">
            {/* div 1. */}
            <div className="flex flex-col items-center gap-[35px]">
              <h3 className="text-2xl font-[700] text-[#252B42] text-center">
                FREE
              </h3>
              <p className="w-[160px] text-[#737373] font-[700] text-center">
                Organize across all apps by hand
              </p>
              <div className="text-[#23A6F0] font-[700] w-[114px] flex  items-center gap-[10px]">
                <h2 className="text-[40px]">0</h2>
                <p className="flex flex-col ">
                  $<span className="text-[12px]">Per Month</span>{" "}
                </p>
              </div>
            </div>
            {/* div 2 */}
            <div className="w-[247px] h-[236px] flex flex-col gap-[15px] ">
              {/* i  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* ii  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* iii  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* iv  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#BDBDBD" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  1GB Cloud Storage
                </h6>
              </div>
              {/* v  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#BDBDBD" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  Email and community support
                </h6>
              </div>
            </div>
            {/* div 3 button  */}
            <div className="w-[246px] h-[52px] bg-[#252B42] pl-[70px] py-4 text-white text-sm font-[700] rounded-xl">
              Try For Free
            </div>
          </div>
          {/* card 2  */}
          <div className="w-[327px] h-[664px]  px-[40px] py-[70px] flex flex-col gap-[35px] items-center border border-[#23A6F0] bg-[#252B42] rounded-xl   transition">
            {/* div 1. */}
            <div className="flex flex-col items-center gap-[35px]">
              <h3 className="text-2xl font-[700] text-white text-center">
                STANDARD
              </h3>
              <p className="w-[160px] text-white font-[700] text-center">
                Organize across all apps by hand
              </p>
              <div className="text-[#23A6F0] font-[700] w-[114px] flex  items-center gap-[10px]">
                <h2 className="text-[40px]">9.99</h2>
                <p className="flex flex-col ">
                  $<span className="text-[12px] ">Per Month</span>{" "}
                </p>
              </div>
            </div>
            {/* div 2 */}
            <div className="w-[247px] h-[236px] flex flex-col gap-[15px]  text-white">
              {/* i  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className="text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* ii  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className=" text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* iii  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className=" text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* iv  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#BDBDBD" }} />
                <h6 className=" text-sm font-[700]">1GB Cloud Storage</h6>
              </div>
              {/* v  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#BDBDBD" }} />
                <h6 className=" text-sm font-[700]">
                  Email and community support
                </h6>
              </div>
            </div>
            {/* div 3 button  */}
            <div className="w-[246px] h-[52px] bg-[#23A6F0] pl-[70px] py-4 text-white text-sm font-[700] rounded-xl">
              Try For Free
            </div>
          </div>
          {/* card 3  */}
          <div className="w-[327px] h-[664px] px-[40px] py-[50px] flex flex-col gap-[35px] items-center border border-[#23A6F0] rounded-xl   transition">
            {/* div 1. */}
            <div className="flex flex-col items-center gap-[35px]">
              <h3 className="text-2xl font-[700] text-[#252B42] text-center">
                FREE
              </h3>
              <p className="w-[160px] text-[#737373] font-[700] text-center">
                Organize across all apps by hand
              </p>
              <div className="text-[#23A6F0] font-[700] w-[114px] flex  items-center gap-[10px]">
                <h2 className="text-[40px]">19.99</h2>
                <p className="flex flex-col ">
                  $<span className="text-[12px]">Per Month</span>{" "}
                </p>
              </div>
            </div>
            {/* div 2 */}
            <div className="w-[247px] h-[236px] flex flex-col gap-[15px] ">
              {/* i  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* ii  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* iii  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#2DC071" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  Unlimited product updates
                </h6>
              </div>
              {/* iv  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#BDBDBD" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  1GB Cloud Storage
                </h6>
              </div>
              {/* v  */}
              <div className="flex gap-[10px] items-center">
                <Circle style={{ backgroundColor: "#BDBDBD" }} />
                <h6 className="text-[#252B42] text-sm font-[700]">
                  Email and community support
                </h6>
              </div>
            </div>
            {/* div 3 button  */}
            <div className="w-[246px] h-[52px] bg-[#23A6F0] pl-[70px] py-4 text-white text-sm font-[700] rounded-xl">
              Try For Free
            </div>
          </div>
        </div>
      </div>
      {/* 4rth part of sample pricing  */}
      <div className="mx-auto max-w-[1050px] h-auto lg:h-[365px] flex flex-col gap-10 ">
        <h5 className="text-xl font-[700] text-[#252B42] text-center">
          Trusted By Over 4000 Big Companies
        </h5>
        {/* company logos  */}
        {/* company logos  */}
        <div className="max-w-[1050px] h-auto md:h-[174px] flex flex-wrap lg:flex-nowrap justify-around  gap-[50px] items-center">
          <div className="relative">
            <Image
              src="/Images/logo1.png"
              alt="Company Logo"
              width={103}
              height={34}
              className="object-cover "
            />
          </div>
          <Image
            src="/Images/logo2.png"
            alt="Company Logo"
            width={83}
            height={58}
          />
          <Image
            src="/Images/logo3.png"
            alt="Company Logo"
            width={102}
            height={74}
          />
          <Image
            src="/Images/logo4.png"
            alt="Company Logo"
            width={103}
            height={42}
          />
          <Image
            src="/Images/logo5.png"
            alt="Company Logo"
            width={104}
            height={62}
          />
          <Image
            src="/Images/logo6.png"
            alt="Company Logo"
            width={104}
            height={74}
          />
        </div>
      </div>
      <PricingBottom />
    </>
  );
}
