import { LuAlarmClock } from "react-icons/lu";
import { IoImageSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";

export default function FeaturedPosts() {
  return (
    <>
      {/* conatiner */}
      <div className="flex justify-center my-20 xl:my-0 ">
        <div className="lg:max-w-[1050px] w-full px-10 lg:px-2 xl:px-0 h-auto xl:h-[1044px] flex flex-col items-center gap-20 justify-center ">
          {/* text */}
          <div className="font-[700] text-center w-full md:w-[691px] h-[134px] flex flex-col items-center gap-[10px]">
            <h6 className="text-sm text-[#23A6F0]">Practice Advice</h6>
            <h2 className="text-[36px] md:text-[40px] text-[#252B42] ">
              Featured Posts
            </h2>
            <p className="md:w-[469px] w-[80%] text-sm font-[400] text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          {/* items container */}
          <div className=" lg:max-w-[1045px] md:max-w-[950px] h-auto xl:h-[606px] flex flex-wrap justify-center  gap-[20px]">
            {/* item-1  */}
            <div className="w-full lg:w-[328px] h-auto lg:h-[606px]">
              {/* image and new */}
              <div className="w-[328px] h-[300px] bg-[url('/Images/hero16.jpeg')] bg-center bg-cover">
                <span className="bg-[#E74040] px-[10px] relative top-5 left-5 py-1 rounded-sm text-white font-bold text-[12px] w-[58px] h-[24px]">
                  NEW
                </span>
              </div>
              {/* text-container  */}
              <div className="w-full lg:w-[348px] h-[306px] flex flex-col justify-around p-6">
                <ul className="flex gap-[15px] text-[12px] sm:text-sm text-[#737373] ">
                  <li className="text-[#23A6F0]">Google</li>
                  <li>Trending</li>
                  <li>New</li>
                </ul>
                <h4 className="text-[20px] font-[400] text-[#252B42]">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="w-[280px] text-[#737373] font-[400] text-sm">
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
                </p>
                <div className="w-[298px] flex justify-between">
                  <p className="flex items-center gap-[5px] text-[12px] ]">
                    <LuAlarmClock className="text-[#23A6F0] size-4" />{" "}
                    <span className=" text-[#737373]">22 April 2021</span>
                  </p>
                  <p className="flex items-center gap-[5px] text-[12px] ]">
                    <IoImageSharp className="text-[#23A6F0] size-4" />{" "}
                    <span className=" text-[#737373]">10 comments</span>
                  </p>
                </div>
                <p className="flex items-center gap-2 font-[700] text-[#737373] text-sm">
                  Learn More{" "}
                  <FaAngleRight className="text-[#23A6F0] font-[100] size-5" />
                </p>
              </div>
            </div>
            {/* item-2  */}
            <div className="w-full lg:w-[328px] h-[606px]">
              {/* image and new */}
              <div className="w-[328px] h-[300px] bg-[url('/Images/hero17.jpg')] bg-center bg-cover">
                <span className="bg-[#E74040] px-[10px] relative top-5 left-5 py-1 rounded-sm text-white font-bold text-[12px] w-[58px] h-[24px]">
                  NEW
                </span>
              </div>
              {/* text-container  */}
              <div className="w-full md:w-[348px] h-[306px] flex flex-col justify-around p-6">
                <ul className="flex gap-[15px] text-[12px] sm:text-sm text-[#737373] ">
                  <li className="text-[#23A6F0]">Google</li>
                  <li>Trending</li>
                  <li>New</li>
                </ul>
                <h4 className="text-[20px] font-[400] text-[#252B42]">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="w-[280px] text-[#737373] font-[400] text-sm">
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
                </p>
                <div className="w-[298px] flex justify-between">
                  <p className="flex items-center gap-[5px] text-[12px] ]">
                    <LuAlarmClock className="text-[#23A6F0] size-4" />{" "}
                    <span className=" text-[#737373]">22 April 2021</span>
                  </p>
                  <p className="flex items-center gap-[5px] text-[12px] ]">
                    <IoImageSharp className="text-[#23A6F0] size-4" />{" "}
                    <span className=" text-[#737373]">10 comments</span>
                  </p>
                </div>
                <p className="flex items-center gap-2 font-[700] text-[#737373] text-sm">
                  Learn More{" "}
                  <FaAngleRight className="text-[#23A6F0] font-[100] size-5" />
                </p>
              </div>
            </div>
            {/* item-3  */}
            <div className="w-full lg:w-[328px] h-[606px]">
              {/* image and new */}
              <div className="w-[328px] h-[300px] bg-[url('/Images/hero18.jpg')] bg-center bg-cover">
                <span className="bg-[#E74040] px-[10px] relative top-5 left-5 py-1 rounded-sm text-white font-bold text-[12px] w-[58px] h-[24px]">
                  NEW
                </span>
              </div>
              {/* text-container  */}
              <div className="w-full lg:w-[348px] h-[306px] flex flex-col justify-around p-6">
                <ul className="flex gap-[15px] text-[12px] sm:text-sm text-[#737373] ">
                  <li className="text-[#23A6F0]">Google</li>
                  <li>Trending</li>
                  <li>New</li>
                </ul>
                <h4 className="text-[20px] font-[400] text-[#252B42]">
                  Loudest à la Madison #1 (L&apos;integral)
                </h4>
                <p className="w-[280px] text-[#737373] font-[400] text-sm">
                  We focus on ergonomics and meeting you where you work.
                  It&apos;s only a keystroke away.
                </p>
                <div className="w-[298px] flex justify-between">
                  <p className="flex items-center gap-[5px] text-[12px] ]">
                    <LuAlarmClock className="text-[#23A6F0] size-4" />{" "}
                    <span className=" text-[#737373]">22 April 2021</span>
                  </p>
                  <p className="flex items-center gap-[5px] text-[12px] ]">
                    <IoImageSharp className="text-[#23A6F0] size-4" />{" "}
                    <span className=" text-[#737373]">10 comments</span>
                  </p>
                </div>
                <p className="flex items-center gap-2 font-[700] text-[#737373] text-sm">
                  Learn More{" "}
                  <FaAngleRight className="text-[#23A6F0] font-[100] size-5" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
