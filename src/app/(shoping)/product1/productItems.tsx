import React from "react";
import Image from "next/image";

export default function ProductItems() {
  return (
    <>
      <div className="my-20 lg:my-0 px-10 lg:px-5 xl:px-0 mx-auto md:max-w-[950px] lg:max-w-[1124px]  h-auto lg:h-[1086px] py-12 flex flex-col gap-[30px]">
        <h3 className="text-2xl font-[700] text-[#252B42] md:text-center text-start">
          BESTSELLER PRODUCTS
        </h3>
        {/* items container 1  */}
        <div className="md:max-w-[950px] lg:max-w-[1049px] w-full h-auto lg:h-[432px] flex sm:justify-center flex-wrap lg:flex-nowrap gap-[30px]">
          {/* items -1  */}
          <div className="w-[238px] h-[442px]">
            <div className="relative">
              <Image
                src="/Images/bestProduct1.jpeg"
                alt="product"
                width={239}
                height={280}
                className="bg-cover w-[238px] h-[280px]"
              />
            </div>
            <div className=" flex flex-col px-4 justify-center gap-4 h-[188px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
            </div>
          </div>
          {/* items -2  */}
          <div className="w-[238px] h-[442px]">
            <div className="relative">
              <Image
                src="/Images/bestProduct2.jpeg"
                alt="product"
                width={239}
                height={280}
                className="bg-cover w-[238px] h-[280px]"
              />
            </div>
            <div className=" flex flex-col  px-4  justify-center gap-4 h-[188px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
            </div>
          </div>
          {/* items -3  */}
          <div className="w-[238px] h-[442px]">
            <div className="relative">
              <Image
                src="/Images/bestProduct3.jpeg"
                alt="product"
                width={239}
                height={280}
                className="bg-cover w-[238px] h-[280px]"
              />
            </div>
            <div className=" flex flex-col  px-4  justify-center gap-4 h-[188px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
            </div>
          </div>
          {/* items -4  */}
          <div className="w-[238px] h-[442px]">
            <div className="relative">
              <Image
                src="/Images/bestProduct4.jpeg"
                alt="product"
                width={239}
                height={280}
                className="bg-cover w-[238px] h-[280px]"
              />
            </div>
            <div className=" flex flex-col  px-4  justify-center gap-4 h-[188px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
            </div>
          </div>
        </div>
        {/* items container 2  */}
        <div className="md:max-w-[950px] lg:max-w-[1049px] w-full h-auto lg:h-[432px] flex  sm:justify-center flex-wrap lg:flex-nowrap  gap-[30px]">
          {/* items -5  */}
          <div className="w-[238px] h-[442px]">
            <div className="relative">
              <Image
                src="/Images/bestProduct5.jpeg"
                alt="product"
                width={239}
                height={280}
                className="bg-cover w-[238px] h-[280px]"
              />
            </div>
            <div className=" flex flex-col px-4 justify-center gap-4 h-[188px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
            </div>
          </div>
          {/* items -6  */}
          <div className="w-[238px] h-[442px]">
            <div className="relative">
              <Image
                src="/Images/bestProduct6.jpeg"
                alt="product"
                width={239}
                height={280}
                className="bg-cover w-[238px] h-[280px]"
              />
            </div>
            <div className=" flex flex-col  px-4  justify-center gap-4 h-[188px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
            </div>
          </div>
          {/* items -7  */}
          <div className="w-[238px] h-[442px]">
            <div className="relative">
              <Image
                src="/Images/bestProduct1.jpeg"
                alt="product"
                width={239}
                height={280}
                className="bg-cover w-[238px] h-[280px]"
              />
            </div>
            <div className=" flex flex-col  px-4  justify-center gap-4 h-[188px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
            </div>
          </div>
          {/* items -8  */}
          <div className="w-[238px] h-[442px]">
            <div className="relative">
              <Image
                src="/Images/bestProduct2.jpeg"
                alt="product"
                width={239}
                height={280}
                className="bg-cover w-[238px] h-[280px]"
              />
            </div>
            <div className=" flex flex-col  px-4  justify-center gap-4 h-[188px]">
              <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
              <h4 className="text-[#737373] text-sm font-[700]">
                English Department
              </h4>
              <p>
                <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                <span className="text-[#23856D] font-[700]">$6.48</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
