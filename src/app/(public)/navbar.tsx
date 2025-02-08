import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/*  Navbar  */}
      <nav className="bg-[#FFF] ">
        <div className=" max-w-[1330px] h-[90px] hidden md:flex justify-evenly items-center">
          <div>
            <h1 className="text-2xl text-[#252B42] font-[700]">Bandage</h1>
          </div>
          <div className="max-w-[815px] h-[58px] flex justify-between items-center ">
            <ul className="w-[300px] hidden  md:flex items-center gap-[20px] font-[700] text-[#737373] text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Product</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="w-[300px] flex gap-[45px]">
              <button className="text-[#23A6F0] text-sm font-[700]">
                Login
              </button>
              <button className="btnLg w-[230px] rounded-md flex justify-center items-center  gap-[15px]">
                Become a member{" "}
                <i className="bi bi-arrow-right-short text-white font-bold text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
