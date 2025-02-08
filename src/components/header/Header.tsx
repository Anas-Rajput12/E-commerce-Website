"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsEnvelope } from "react-icons/bs";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaUserShield } from "react-icons/fa";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className="bg-[#252B42]">
        <div className="max-w-[1340px] mx-auto h-[58px] hidden lg:flex justify-between items-center text-white px-5">
          <div className="flex items-center gap-4 h-12">
            <div className="flex gap-2 items-center">
              <Image
                src={"/Images/phone.png"}
                alt="phone"
                width={14}
                height={14}
              />
              <p className="text-sm font-[700]">(225) 555-0118</p>
            </div>
            <div className="flex gap-2 items-center">
              <BsEnvelope />
              <p className="text-sm font-[700]">miclleli.rivera@example.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-[700]">
              Follow Us and get a chance to win 80% off
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-sm font-[700]">Follow Us : </p>
            <ul className="flex gap-3">
              <li>
                <Image src={"/Images/insta.png"} alt="Instagram" width={16} height={16} />
              </li>
              <li>
                <Image src={"/Images/youtube.png"} alt="YouTube" width={16} height={16} />
              </li>
              <li>
                <Image src={"/Images/facebook.png"} alt="Facebook" width={16} height={16} />
              </li>
              <li>
                <Image src={"/Images/twitter.png"} alt="Twitter" width={16} height={16} />
              </li>
            </ul>
          </div>
        </div>
      </header>

      <nav className="bg-[#FFF] hidden md:flex">
        <div className="mx-auto flex justify-between items-center w-full lg:max-w-[1340px] gap-10 h-[58px] xl:h-[66px] 2xl:h-[72px] px-4">
          <div>
            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl text-[#252B42] font-[700]">
              <Link href={"/"}>Bandage</Link>
            </h1>
          </div>
          <div className="flex justify-between lg:w-full">
            <ul className="w-full md:w-[361px] hidden md:flex md:justify-end lg:justify-start items-center gap-[15px] font-[700] text-[#737373] text-sm">
              <li className="hover:text-[#252B42] hover:underline">
                <Link href="/">Home</Link>
              </li>
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-[#737373] bg-white px-3 py-2 text-sm font-bold ring-gray-300 hover:bg-gray-50">
                  <Link href="products">Shop</Link>
                  <ChevronDownIcon className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
              </Menu>
              <li className="hover:text-[#252B42] hover:underline">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-[#252B42] hover:underline">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-[#252B42] hover:underline">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:text-[#252B42] hover:underline">
                <Link href="/team">Team</Link>
              </li>
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md text-[#737373] bg-white px-3 py-2 text-sm font-bold ring-gray-300 hover:bg-gray-50">
                  <FaUserShield className="text-gray-400" /> Admin Dashboard
                  <ChevronDownIcon className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/admin/products"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Manage Products
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/admin/categories"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Manage Categories
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/admin/orders"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        View Orders
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/admin/analytics"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Analytics
                      </Link>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </ul>
            <div className="justify-between w-[500px] text-[#23A6F0] items-center hidden lg:flex">
              <div className="flex gap-[10px] font-[700] text-sm">
                <button>
                  <i className="bi bi-person text-[16px]"></i>
                </button>
                <Link href={"/login"}>Login /</Link>
                <Link href={"/"}>Register</Link>
              </div>
              <div className="flex gap-[20px] justify-end items-center">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-sm text-gray-600 w-[180px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-blue-500 font-bold text-sm"
                  >
                    Go
                  </button>
                </form>
                <Link href="/cart">
                  <button className="flex gap-[5px]">
                    <i className="bi bi-cart"></i>
                    <p className="m-0 p-0 font-normal"></p>
                  </button>
                </Link>
                <Link href="/favourites">
                  <button className="flex gap-[5px]">
                    <i className="bi bi-heart"></i>
                    <p className="m-0 p-0 font-normal text-sm"></p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
