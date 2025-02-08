import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { Menu, MenuButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function ShopHeader() {
  return (
    <>
      <header className="bg-[#23856D] ">
        <div className="max-w-[1020px] mx-auto  h-[46px] hidden  lg:flex  justify-between items-center text-white px-5">
          {/* div 1 */}
          <div className="flex items-center gap-4 h-12 ">
            {/* inner 1 */}

            <div className="flex gap-2 items-center">
              <span>
                <Image
                  src={"/Images/phone.png"}
                  alt="phone"
                  width={14}
                  height={14}
                />
              </span>
              <p className="text-sm ">(225) 555-0118</p>
            </div>
            {/* inner 2 */}

            <div className="flex gap-2  items-center ">
              <BsEnvelope />
              <p className="text-sm">
                miclleli.rivera@example.com
              </p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="flex items-center">
            <p className="text-sm font-[700]">
              Follow Us and get a chance to win 80% off
            </p>
          </div>
          {/* 3rd div */}
          <div className="flex items-center gap-3">
            <p className="text-sm font-[700]">Follow Us : </p>
            <ul className="flex gap-3">
              <li>
                <Image
                  src={"/Images/insta.png"}
                  alt=""
                  width={16}
                  height={16}
                />
              </li>
              <li>
                <Image
                  src={"/Images/youtube.png"}
                  alt=""
                  width={16}
                  height={16}
                />
              </li>
              <li>
                <Image
                  src={"/Images/facebook.png"}
                  alt=""
                  width={16}
                  height={16}
                />
              </li>
              <li>
                <Image
                  src={"/Images/twitter.png"}
                  alt=""
                  width={16}
                  height={16}
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/*  Navbar  */}
      <nav className="bg-[#FFF]">
        {/* main  div*/}
        <div className=" hidden md:flex justify-end items-center mx-auto gap-16  max-w-[1020px] h-[58px] px-4 ">
          {/* 1st div  */}
          <div className="">
            <h1 className="text-2xl text-[#252B42] font-[700]">Bandage</h1>
          </div>
          {/* 2nd div  */}
          <div className="flex justify-between w-full ">
            <ul className="w-full lg:w-[361px] hidden  md:flex items-center md:justify-end gap-[15px] font-[700] text-[#737373] text-sm ">
              <li>
                <Link href="/">Home</Link>
              </li>
              {/* Imported drop down  */}
              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-[#737373] bg-white px-3 py-2 text-sm font-bold   ring-gray-300 hover:bg-gray-50">
                    Shop
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

              </Menu>

              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/pages">Pages</Link>
              </li>
            </ul>
            {/* button and icons  */}
            <div className="flex justify-between w-[330px] text-[#23A6F0] items-center md:hidden lg:flex">
              <div className="flex gap-[10px] font-[700] text-sm ">
                <button>
                  <i className="bi bi-person text-[16px]"></i>
                </button>
                <Link href={"/"}>Login /</Link>
                <Link href={"/"}>Register</Link>
              </div>
              <div className="flex gap-[30px] justify-end ">
                <button>
                  <i className="bi bi-search"></i>
                </button>
                <button className="flex gap-[5px] text-sm">
                  <i className="bi bi-cart "></i>
                  <p className="m-0 p-0 font-normal">1</p>
                </button>
                <button className="flex gap-[5px]">
                  <i className="bi bi-heart"></i>
                  <p className="m-0 p-0 font-normal text-sm">1</p>
                </button>
              </div>
            </div>
          </div>
          {/* closing div */}
          {/* menu Button  */}
          
        </div>
        
    
      </nav>
    </>
  );
}
