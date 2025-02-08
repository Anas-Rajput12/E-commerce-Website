import React from "react";
import Icons from "../commonContent/Icons";

export default function Footer() {
  return (
    <>
      <footer className=" ">
        <section className="mx-auto px-6 lg:px-5 xl:px-0 lg:max-w-[1050px] md:max-w-[950px]  h-[488px]">
          {/* heading and icons  */}
          <div className="h-[138px] flex flex-col gap-4 md:flex-row md:justify-between">
            <h1 className="text-2xl leading-8 text-[#252B42] font-[700]">
              Bandage
            </h1>
            {/* Social Media icons  */}
            <Icons />
          </div>
          {/* Footer headings and Links container*/}
          <div className="flex flex-col items-start sm:flex-row sm:flex-wrap gap-12 py-14 md:p-y-0 lg:flex-nowrap justify-between h-auto md:h-[272px] ">
            {/* heading-list-1  */}
            <div className=" flex flex-col gap-6">
              <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                Company Info
              </h5>
              <ul className="flex flex-col gap-5 font-[600] text-sm text-[#737373]">
                <li>About</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            {/* heading-list-2  */}
            <div className="flex flex-col gap-6">
              <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                Legal
              </h5>
              <ul className="flex flex-col gap-5 font-[600] text-sm text-[#737373]">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            {/* heading-list-3  */}
            <div className="flex flex-col gap-6">
              <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                Features
              </h5>
              <ul className="flex flex-col gap-5 font-[600] text-sm text-[#737373]">
                <li>Bussiness Marketing</li>
                <li>User Analytic</li>
                <li>Liver Chat</li>
                <li>Unlimmited Support</li>
              </ul>
            </div>
            {/* heading-list-4  */}
            <div className="flex flex-col gap-6">
              <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                Resources
              </h5>
              <ul className="flex flex-col gap-5 font-[600] text-sm text-[#737373]">
                <li>IOS Andriod</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
            {/* heading-list-5  */}

            <div className="flex flex-col gap-6 md:gap-10 md:h-[170px] h-auto">
              <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                Get In Touch
              </h5>
              <div className="w-full  md:w-[321px]  h-[58px] flex font-[600] text-sm text-[#737373]">
                <label className="flex items-center justify-center text-[#E6E6E6] rounded-[5px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="py-4 px-3"
                  />
                </label>
                <label className="w-[117px] h-[58px] bg-[#23A6F0] flex items-center justify-center text-[#E6E6E6] rounded-tr-[5px] rounded-br-[5px]">
                  <button>Subscribe</button>
                </label>
              </div>
              <p className="text-[12px] leading-6 tracking-[0.2px] text-[#737373] font-[500]">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            {/* paragraph  */}
          </div>
          {/* paragraph  */}
          <div className="md:h-[74px]  md:text-start text-center  flex justify-center items-end">
            <p className="w-[75%] md:w-full leading-6 font-[500] text-sm tracking-[0.2px] text-[#737373]">
              Made With Love By Finland All Right Reserved{" "}
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}
