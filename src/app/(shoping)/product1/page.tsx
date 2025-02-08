import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ProductCircles from "./productCircles";
import ProductIcons from "./productIcons";
import ProductItems from "./productItems";

export default function Product1() {
  return (
    <>
      {/* home shop link  */}
      <div className="px-10 lg:px-5 xl:px-0 h-[92px] flex  justify-center  items-center  ">
        <div className="max-w-[1033px] h-[44px] flex items-center ">
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

      {/* container  */}
      <div className="px-10 lg:px-5 xl:px-0 mx-auto lg:max-w-[1050px] md:max-w-[950px] w-full h-auto lg:h-[600px]">
        <div className="w-full h-auto lg:h-[550px] flex flex-wrap lg:flex-nowrap  gap-[30px]">
          {/* left images */}
          <div className="w-full lg:w-[510px] h-[550px] flex flex-col gap-5">
            {/* image1 */}
            <div className="w-[506] h-[450px] bg-[url('/Images/sofa.jpeg')] bg-cover bg-center"></div>
            <div className="relative flex justify-center gap-3 w-full md:w-[219px]">
              <Image
                src="/Images/chair1.jpeg"
                alt="chair"
                width={100}
                height={75}
                className="object-cover w-[100px] h-[75px]"
              />
              <Image
                src="/Images/chair2.jpeg"
                alt="chair"
                width={100}
                height={75}
                className="object-cover w-[100px] h-[75px]"
              />
            </div>
          </div>
          {/* right */}
          <div className="px-10 lg:px-5 xl:px-0 w-full lg:w-[510px] h-auto md:h-[471px] flex flex-col items-center text-center md:text-start md:items-start justify-between gap-5 md:gap-0 p-[10px]">
            {/* div-1  */}
            <div className="h-auto gap-3 md:gap-0 md:h-[30%] flex flex-col justify-between">
              <h2 className="text-[#252B42] font-[400] text-xl">
                Floating Phone
              </h2>
              <div className="flex items-center gap-2  w-[221px] h-[24px]">
                <div className="text-[#F3CD03] flex gap-1 text-[22px]">
                  <FaStar /> <FaStar />
                  <FaStar />
                  <FaStar /> <FaStar />{" "}
                </div>
                <h6 className="text-[#737373] font-[700] text-sm">
                  10 Reviews
                </h6>
              </div>
              <h3 className="text-[#252B42] font-[700] tex-2xl">$1,139.33</h3>
              <p className="text-[#737373] text-sm font-[700]">
                Availability : <span className="text-[#23A6F0]">In Stock </span>
              </p>
            </div>

            {/* div2 */}
            <div className="h-auto md:h-[35%] flex flex-col justify-center gap-5">
              <p className="text-sm text-[#737373] w-[90%]  sm:w-[80%]">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <div className="w-[80%] md:w-[445px] h-[2px] border  border-[#BDBDBD] "></div>
              <ProductCircles />
            </div>
            {/* div -3  */}
            <div className="h-auto md:h-[30%]  flex flex-col items-center md:flex-row gap-[20px] md:gap-[15px] px-10 md:px-0">
              <button className="btnLg rounded-md">Select Options</button>
              <ProductIcons />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information  */}
      <div className="h-auto md:h-[92px] my-10 md:my-0">
        <div className="px-10 lg:px-0 mx-auto lg:max-w-[1051px] md:max-w-[950px] w-full  h-auto md:h-[72px] flex flex-wrap justify-center md:justify-start items-center  gap-10 text-[#737373] text-sm font-[700] ">
          <Link href={"#"}>Description</Link>
          <Link href={"#"}>Additional Information</Link>
          <Link href={"#"}>
            Revies <span className="text-[#23856D]">(0)</span>
          </Link>
        </div>
      </div>

      {/* the quik fox jumps over  */}

      {/* container  */}
      <div className="my-20 md:my-0 px-10 lg:px-5 xl:px-0 m-auto lg:max-w-[1056px] md:max-w-[950px] h-auto lg:h-[500px] flex  items-center ">
        {/* row  */}
        <div className="w-full h-auto lg:h-[425px] flex flex-wrap sm:justify-center lg:flex-nowrap gap-[30px]">
          {/* image  */}
          <div className="relative ">
            <Image
              src={"/Images/table.jpeg"}
              alt="table"
              width={316}
              height={372}
              className="sm:min-w-[316px] lg:w-[316px] h-[372px] object-cover rounded-2xl"
            />
          </div>
          {/* text  */}
          <div className="w-[332px] h-[427px] flex flex-col gap-8">
            <h3 className="text-2xl font-[700] text-[#252B42]">
              the quick fox jumps over{" "}
            </h3>
            {/* paragraphs  */}
            <div className="w-[332px] h-[340px] flex flex-col gap-10 text-sm text-[#737373] font-[400]">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          {/* 3rd div of row  */}
          <div className="w-[332px] h-auto md:h-[367px]">
            <div className="h-auto md:h-[188px] flex flex-col gap-[30px]">
              <h3 className="text-2xl font-[700] text-[#252B42]">
                the quick fox jumps over{" "}
              </h3>
              <div className="flex flex-col gap-[10px]">
                <p className="flex items-center text-[#737373] font-[500]">
                  <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center text-[#737373] font-[500]">
                  <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center text-[#737373] font-[500]">
                  <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center text-[#737373] font-[500]">
                  <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
            <div className="h-[188px] flex flex-col gap-[30px] pt-4">
              <h3 className="text-2xl font-[700] text-[#252B42]">
                the quick fox jumps over{" "}
              </h3>
              <div className="flex flex-col gap-[15px]">
                <p className="flex items-center text-[#737373] font-[500]">
                  <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center text-[#737373] font-[500]">
                  <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
                  the quick fox jumps over the lazy dog
                </p>
                <p className="flex items-center text-[#737373] font-[500]">
                  <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
                  the quick fox jumps over the lazy dog
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductItems />
    </>
  );
}
