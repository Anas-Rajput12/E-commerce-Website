import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[711px] bg-[url('/Images/hero1.jpeg')] bg-cover bg-center">
        <div className="mx-auto md:max-w-[950px] lg:max-w-[1044px] px-10 lg:px-0 h-[651px] flex items-center justify-center">
          <main className="w-full h-[331px]">
            <div className="px-10 w-full sm:w-[599px] lg:w-[740px] h-auto sm:h-[331px] flex flex-col gap-[35px] text-center items-center sm:items-start sm:text-start">
              <h5 className="text-[16px] sm:text-[18px] lg:text-[20px] font-[700] text-white">
                Summer 2020
              </h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[700] text-white">
                NEW COLLECTION
              </h1>
              <p className="w-full sm:w-[376px] text-lg sm:text-xl text-white">
                We know how large objects will act, but things on a small scale.
              </p>
              {/* Updated Shop Now Button */}
              <Link href="/products">
                <button className="btn">Shop Now</button>
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* 2nd Section of Page */}
      <section>
        <main className="mx-auto w-full h-auto md:max-w-[950px] xl:max-w-[1050px] lg:h-[770px] flex flex-col items-center gap-12 mt-20 px-10 xl:px-0">
          {/* Heading and Text */}
          <div className="w-[200px] md:w-full flex flex-col items-center gap-[10px] text-center">
            <h1 className="text-[#252B42] font-[700] text-2xl">
              EDITOR&#8217;S PICK
            </h1>
            <p className="text-[14px] text-[#737373] font-[400]">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>

          {/* Images Container */}
          <div className="md:max-w-[950px] xl:max-w-[1050px] h-auto lg:h-[530px] flex flex-col items-center md:items-start md:justify-center md:flex-row gap-[30px]">
            <div className="flex flex-wrap justify-center lg:flex-nowrap gap-[30px]">
              <div className="w-full md:w-[510px] h-[500px] bg-[url('/Images/hero2.png')] flex items-end bg-cover bg-center">
                <span className="px-16 py-2 bg-white text-[#252B42] font-[700] my-4 ml-4 text-sm">
                  MEN
                </span>
              </div>
              <div className="w-[330px] md:w-[240px] h-[500px] bg-[url('/Images/hero3.png')] flex items-end bg-cover bg-center">
                <span className="px-16 py-2 bg-white text-[#252B42] font-[700] my-4 ml-4 text-sm">
                  WOMEN
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="w-[330px] md:w-[240px] h-[240px] bg-[url('/Images/hero4.png')] flex items-end bg-cover bg-center">
                <span className="px-16 py-2 bg-white text-[#252B42] font-[700] my-4 ml-4 text-sm">
                  ACCESSORIES
                </span>
              </div>
              <div className="w-[330px] md:w-[240px] h-[240px] bg-[url('/Images/hero5.png')] flex items-end bg-cover bg-center">
                <span className="px-16 py-2 bg-white text-[#252B42] font-[700] my-4 ml-4 text-sm">
                  KIDS
                </span>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
