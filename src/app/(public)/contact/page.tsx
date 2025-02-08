import Image from "next/image";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* conatiner */}
      <div className="h-[882px] flex justify-center  ">
        <main className="mx-auto px-10 xl:px-0 md:max-w-[950px] lg:max-w-[1050px] w-full h-auto lg:h-[742px] flex flex-col lg:flex-row gap-[35px] md:gap-0  justify-between items-center">
          {/* contact left  */}
          <div className="w-full md:w-[600px] h-[518px] flex flex-col  items-center md:items-start gap-8 mt-5 md:mt-0  ">
            <h5 className="font-[700] text-[#252B42] text-[16px] hidden md:flex">
              Contact Us
            </h5>
            <h1 className="text-center md:text-start text-4xl sm:text-5xl md:text-6xl tracking-[0.2px] font-[700] text-[#252B42]">
              Get In Touch Today!
            </h1>
            <h4 className="w-[80%] md:w-[376px] text-[#737373] font-[400] text-xl tracking-[0.2px] text-center md:text-start">
              We know how large objects will act, but things on a small scale
            </h4>
            <div className="h-[84px] flex flex-col justify-between">
              <h3 className="text-2xl font-[700] text-[#252B42]">
                Phone: +451 215 215
              </h3>
              <h3 className="text-2xl font-[700] text-[#252B42]">
                Fax: +451 215 215
              </h3>
            </div>
            {/* icons  */}
            <div className="flex text-3xl text-[#252B42] gap-3">
              <FaTwitter />
              <FaFacebookSquare />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          {/* contact image  */}
          <div className="w-[571px] h-[826px] bg-[url('/Images/contact1.png')] bg-cover bg-center">
            <div className="hidden md:flex w-[500px] h-[500px] rounded-[50%] bg-[#FFE9EA] relative top-20 z-[-1]"></div>

            <div className="w-[415px]  h-[280px]"></div>
          </div>
        </main>
      </div>

      {/* 2nd section  */}

      {/* container  */}
      {/* <div className="flex justify-center w-full">  */}

      <main className="pt-16 sm:pt-32 md:pt-96 pb-10 lg:pt-0 mx-auto  px-10  md:max-w-[950px] lg:max-w-[1050px] w-full h-auto lg:h-[814px] flex flex-col items-center justify-around ">
        {/* headings  */}
        <div className="flex flex-col items-center gap-[10px]">
          <h6 className="text-[#252B42] text-sm font-[700] ">
            VIST OUR OFFICE
          </h6>
          <h2 className="text-[#252B42] text-4xl font-[700] text-center w-full md:w-[531px]">
            We help small businesses with big ideas
          </h2>
        </div>
        {/* contact cards  */}
        {/* container  */}
        <div className="w-full max-w-[985px] h-auto lg:h-[400px] flex flex-col md:flex-row items-center justify-between gap-6 my-10 ">
          {/* card-1  */}
          <div className="w-[327px] h-[343px] flex flex-col items-center gap-5   ">
            <Image
              src="/Images/contactPhone.png"
              alt=""
              width={72}
              height={72}
            />
            <p className="flex flex-col text-center ">
              <span className="text-sm text-[#252B42] font-[700]">
                georgia.young@example.com
              </span>
              <span className="text-sm text-[#252B42] font-[700]">
                georgia.young@ple.com
              </span>
            </p>
            <h4 className="font-[700] text-[#252B42]">Get Support</h4>
            <button className="w-[189px] h-[54px] rounded-[37px] text-[#23A6F0] text-center text-sm border border-[#23A6F0]  hover:bg-[#23A6F0] font-[700] hover:text-white transition  ">
              Submit Request
            </button>
          </div>
          {/* card-2  */}
          <div className="w-[327px] h-[403px] flex flex-col items-center justify-center gap-5 bg-[#252B42]">
            <Image src="/Images/location.png" alt="" width={51} height={67} />
            <p className="flex flex-col text-center ">
              <span className="text-sm text-white font-[700]">
                georgia.young@example.com
              </span>
              <span className="text-sm text-white font-[700]">
                georgia.young@ple.com
              </span>
            </p>
            <h4 className="font-[700] text-white">Get Support</h4>
            <button className="w-[189px] h-[54px] rounded-[37px] text-[#23A6F0] text-center text-sm border border-[#23A6F0]  hover:bg-[#23A6F0] font-[700] hover:text-white">
              Submit Request
            </button>
          </div>
          {/* card-3  */}
          <div className="w-[327px] h-[343px] flex flex-col items-center gap-5 ">
            <Image src="/Images/contactEn.png" alt="" width={72} height={55} />
            <p className="flex flex-col text-center ">
              <span className="text-sm text-[#252B42] font-[700]">
                georgia.young@example.com
              </span>
              <span className="text-sm text-[#252B42] font-[700]">
                georgia.young@ple.com
              </span>
            </p>
            <h4 className="font-[700] text-[#252B42]">Get Support</h4>
            <button className="w-[189px] h-[54px] rounded-[37px] text-[#23A6F0] text-center text-sm  border border-[#23A6F0]    hover:bg-[#23A6F0] font-[700] hover:text-white">
              Submit Request
            </button>
          </div>
        </div>
      </main>
      {/* </div> */}

      {/* 3rd section: Talk  */}

      {/* container  */}
      <div className="mx-auto  lg:max-w-[1050px] md:max-w-[850px] h-auto lg:h-[348px] flex flex-col items-center gap-4 mb-28">
        <Image
          src="/Images/arrow.png"
          alt="Curved Arrow"
          width={72}
          height={21}
        />
        <main className="w-[607px] h-[188px] flex flex-col items-center justify-between mt-5 ">
          <h5 className="font-[700] text-[#252B42] text-[16px]">
            WE CANT&#8217;S WAIT TO MEET YOU
          </h5>
          <h1 className="text-6xl font-[700] text-[#252B42]">
            Let&#8217;s Talk
          </h1>
          <button className="btnLg rounded-md">Try it free now</button>
        </main>
      </div>
    </>
  );
}
