import AboutBottom from "@/components/aboutContent/aboutBottom";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* conatiner  */}

      <div className=" h-auto md:h-[729px] mb-32">
        <main className="mx-auto lg:max-w-[1050px] md:max-w-[950px] px-10 xl:px-0  flex flex-col items-center  md:flex-row md:justify-center h-auto md:h-[545px]">
          <div className="w-[90%] md:w-[500px] lg:w-[600px] h-[331px]  flex flex-col items-center text-center md:text-start md:items-start  justify-between gap-[35px] ">
            <h5 className="font-[700] text-[#252B42] text-[16px]">
              About Company
            </h5>
            <h1 className="text-5xl md:text-6xl tracking-[0.2px] font-[700] text-[#252B42]">
              About Us
            </h1>
            <h4 className="w-[80%] md:w-[376px] text-[#737373] font-[500] text-xl tracking-[0.2px]">
              We know how large objects will act, but things on a small scale
            </h4>

            <button className="btnLg">Get Quote Now</button>
          </div>
          {/* about image  */}
          <div className=" relative ">
            {/* <div className="hidden md:flex W-[500px] h-[500px] rounded-[50%] bg-[#FFE9EA] relative top-20 z-[-1]" ></div> */}

            <Image
              src="/Images/about1.png"
              alt="about hero image"
              width={571}
              height={500}
              className="object-cover w-full md:w-[571px] h-[468px] sm:h-[668px] z-[1000]"
            />
          </div>
        </main>
      </div>

      {/* 2nd section  */}
      <section>
        {/* conatiner */}
        <div className="h-auto md:h-[236px] ">
          <main className="mx-auto lg:max-w-[1018px] md:max-w-[950px] px-10 xl:px-0 h-auto md:h-[188px] flex flex-col justify-between md:flex-row items-center  ">
            <div className="my-10 md:my-0 w-full md:w-[394px] h-auto md:h-[140px] flex flex-col  items-center text-center md:items-start md:text-start  gap-6">
              <p className="text-[#E74040] text-[12px] font-[400]">
                Problem Typing
              </p>
              <h3 className="text-[#252B42] font-[700] text-2xl">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent.
              </h3>
            </div>
            <p className="ml-4 w-full md:w-[545px] text-sm text-[#737373] font-[400]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </main>
        </div>
      </section>
      {/* 3rd section: progress  */}
      <section>
        {/* conatiner  */}

        <main className="mx-auto w-full  lg:w-[1050px] md:max-w-[950px] px-10 lg:px-0 h-auto md:h-[264px] flex flex-wrap md:flex-nowrap gap-[80px] justify-center items-center  py-[100px] md:py-0">
          {/* 1 */}
          <div className="w-[238px] h-[120px] ">
            <h1 className="text-[58px] text-center font-[700] text-[#252B42]">
              15k
            </h1>
            <h5 className="text-[#737373] text-center font-[700] text-[16px]">
              Happy Customers
            </h5>
          </div>
          {/* 2 */}
          <div className="w-[238px] h-[120px] ">
            <h1 className="text-[58px] text-center font-[700] text-[#252B42]">
              150k
            </h1>
            <h5 className="text-[#737373] text-center font-[700] text-[16px]">
              Monthly Vistors
            </h5>
          </div>
          {/* 3 */}
          <div className="w-[238px] h-[120px] ">
            <h1 className="text-[58px] text-center font-[700] text-[#252B42]">
              15
            </h1>
            <h5 className="text-[#737373] text-center font-[700] text-[16px]">
              Countries Websites
            </h5>
          </div>
          {/* 4 */}
          <div className="w-[238px] h-[120px] ">
            <h1 className="text-[58px] text-center font-[700] text-[#252B42]">
              100+
            </h1>
            <h5 className="text-[#737373] text-center font-[700] text-[16px]">
              Top Partners
            </h5>
          </div>
        </main>
      </section>
      {/* 4rth section: Video */}
      <section>
        <main className="mx-auto w-full lg:max-w-[1050px] px-10 lg:px-0 h-auto md:h-[764px] flex md:items-center  ">
          <div className="realtive">
            {/* video image  */}
            <Image
              src={"/Images/aboutVideo.png"}
              alt="video"
              width={989}
              height={540}
              className="hover:scale-110 transition rounded-xl border-none"
            />
          </div>
        </main>
      </section>
      <AboutBottom />
    </>
  );
}
