import Link from "next/link";
import {
  FaAngleRight,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import Icons from "@/components/commonContent/Icons";
import { FaFacebookSquare } from "react-icons/fa";

export default function Team() {
  return (
    <>
      <div className="mx-auto max-w-[870px] h-auto md:h-[280px] py-[50px] flex justify-center">
        <div className="w-full md:w-[788px] h-[180px] flex flex-col items-center justify-between">
          <h5 className="text-[#737373] text-[16px] font-[700] text-center">
            WHAT WE DO
          </h5>
          <h1 className="text-[#252B42] text-[40px] text-center md:text-[58px] font-[700]">
            Innovation tailored for you
          </h1>
          <div className="flex  items-center gap-3 text-sm font-[700]">
            <Link href={"#"} className="text-[#252B42]">
              Home
            </Link>{" "}
            <FaAngleRight className="size-6 font-light text-[#BDBDBD]" />{" "}
            <Link href={"#"} className="text-[#BDBDBD]">
              Team
            </Link>
          </div>
        </div>
      </div>
      {/* Inovation Images  */}
      <div className="px-10 lg:px-0 max-w-[1440px] h-auto lg:h-[530px] flex flex-col lg:flex-row items-center md: gap-2">
        {/* Image 1 */}
        <div className="relative">
          <Image
            src="/Images/team1.jpeg"
            alt="Model"
            width={700}
            height={530}
            className="object-cover w-full md:w-[700px] h-[530px]"
          />
        </div>
        <div className="w-full px-10 lg:px-0 md:w-[700px] h-auto lg:h-[530px] flex flex-wrap md:flex-nowrap 1.5xl:flex-wrap justify-center md:justify-start gap-2">
          <div className="realtive">
            <Image
              src={"/Images/team2.jpeg"}
              alt="Model"
              width={200}
              height={200}
              className="object-cover w-[330px] h-[260px] rotate-[-180]"
            />
          </div>
          <div className="realtive">
            <Image
              src={"/Images/team3.jpeg"}
              alt="Model"
              width={200}
              height={200}
              className="object-cover w-[330px] h-[260px] rotate-[-180]"
            />
          </div>
          <div className="realtive">
            <Image
              src={"/Images/team4.jpeg"}
              alt="Model"
              width={200}
              height={200}
              className="object-cover w-[330px] h-[260px] rotate-[-180]"
            />
          </div>
          <div className="realtive">
            <Image
              src={"/Images/team5.jpeg"}
              alt="Model"
              width={200}
              height={200}
              className="object-cover w-[330px] h-[260px] rotate-[-180]"
            />
          </div>
        </div>
      </div>
      {/* Team members  */}
      <div className="mx-auto px-10 lg:px-0 lg:max-w-[1050px] md:max-w-[950px] h-auto lg:h-[1760px] flex flex-col items-center py-[112px] gap-[112px]">
        <h2 className="text-[40px] text-[#252B42] font-[700]">Meet Our Team</h2>
        {/* First 3 members  */}
        <div className="lg:max-w-[1034px] md:max-w-[950px] h-auto lg:h-[383px] flex flex-wrap gap-[30px] lg:flex-nowrap justify-center px-10 xl:px-0">
          {/* member 1  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/member1.jpeg"
              alt="girl"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
          {/* member 2  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/member2.jpeg"
              alt="girl holding mobile"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
          {/* member 3  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/member3.jpeg"
              alt="girl holding mobile"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
        </div>
        {/* Middle 3 members  */}
        <div className="lg:max-w-[1034px] md:max-w-[950px] h-auto lg:h-[383px] flex flex-wrap gap-[30px] lg:flex-nowrap justify-center  px-10 xl:px-0">
          {/* member 1  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/aboutPerson3.jpeg"
              alt="Boy holding mobile"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
          {/* member 2  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/member4.jpeg"
              alt="girl holding mobile"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
          {/* member 3  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/aboutPerson1.jpeg"
              alt="girl holding mobile"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
        </div>
        {/* last 3 members  */}
        <div className="lg:max-w-[1034px] md:max-w-[950px] h-auto lg:h-[383px] flex flex-wrap gap-[30px] lg:flex-nowrap justify-center px-10 xl:px-0">
          {/* member 1  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/aboutPerson2.jpeg"
              alt="girl"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
          {/* member 2  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/member5.jpeg"
              alt="girl"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
          {/* member 3  */}
          <div className="w-[329px] h-[383px] ">
            <Image
              src="/Images/member6.jpeg"
              alt="girl"
              width={316}
              height={231}
            />
            <div className="flex flex-col items-center justify-center gap-3 w-[316px] h-[152px]">
              <h5 className="font-[700] text-[#252B42] text-[16px]">
                Username{" "}
              </h5>
              <h6 className="font-[700] text-[#737373] text-sm">Profession</h6>
              <Icons />
            </div>
          </div>
        </div>
      </div>
      {/* last part of Team page  */}
      <div className="mb-20 lg:mb-0 mx-auto max-w-[1050px] h-auto lg:h-[600px]   flex justify-center ">
        <div className="w-[607px] h-auto lg:h-[282px] flex flex-col items-center text-center gap-[30px]">
          <h2 className="text-[#252B42] text-[40px] font-[700]">
            Start your 14 days free trial
          </h2>
          <p className="w-[80%] md:w-[411px] text-sm text-[#737373] font-[400]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="btnLg">Try it free now</button>
          {/* icons  */}
          <div className="flex text-3xl gap-[34px]">
            <FaTwitter className="text-[#55ACEE]" />
            <FaFacebookSquare className="text-[#395185]" />
            <FaInstagram />
            <FaLinkedin className="text-[#0A66C2]" />
          </div>
        </div>
      </div>
    </>
  );
}
