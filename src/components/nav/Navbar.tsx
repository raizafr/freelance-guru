"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { RxPencil2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

export default function Navbar() {
  const pathName = usePathname();

  return pathName.startsWith("/pro") ? (
    <div className="border-b bg-[#F5F5F5]">
      <nav className="navbar container mx-auto lg:px-12 ">
        <div className="flex-1 flex items-center lg:gap-10 md:gap-4">
          <Image
            src={"/svg/logo.svg"}
            width={100}
            height={100}
            alt="logo"
            loading="lazy"
          />
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search Jobs"
              className="px-3 py-1.5 rounded-l-md focus:outline-none border focus:border-blue-500 flex-1"
            />
            <button className=" w-10 border py-2.5 flex justify-center rounded-r-md hover:text-blue-500 duration-200">
              <IoSearch className="" />
            </button>
          </div>
        </div>
        <div className="flex-none">
          <ul className="flex items-center gap-2">
            <div className="bg-white pl-2 py-1 rounded-md flex items-center gap-1">
              <IoChatboxSharp />
              <IoIosArrowDown className="scale-50" />
            </div>
            <div className="bg-white pl-2 py-1 rounded-md flex items-center gap-1">
              <IoNotifications />
              <IoIosArrowDown className="scale-50" />
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"https://placehold.co/100x100.png"}
                className="rounded-md"
                alt="default"
                width={30}
                height={30}
              />
              <IoIosArrowDown className="scale-50" />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  ) : (
    <>
      <div className="border-b hidden lg:block">
        <nav className="navbar bg-base-100 container mx-auto lg:px-12 ">
          <div className="flex-1 flex items-center lg:gap-10 md:gap-4">
            <Image
              src={"/svg/logo.svg"}
              width={100}
              height={100}
              alt="logo"
              loading="lazy"
            />
            <Link
              href={"#"}
              className="font-semibold hover:text-blue-500 duration-200"
            >
              Find Freelance
            </Link>
            <Link
              href={"#"}
              className="font-semibold hover:text-blue-500 duration-200"
            >
              Find Jobs
            </Link>
            <div className="dropdown dropdown-hover cursor-pointer ">
              <div
                tabIndex={0}
                className="font-semibold hover:text-blue-500 duration-200 flex items-center gap-1"
              >
                <span>About</span>
                <IoIosArrowDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    About Guru
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    How Guru Works
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    Why Guru
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover cursor-pointer ">
              <div
                tabIndex={0}
                className="font-semibold hover:text-blue-500 duration-200 flex items-center gap-1"
              >
                <span>Solutions</span>
                <IoIosArrowDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    Agency
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    Purchase Orders
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    Agreements
                  </a>
                </li>
                <li>
                  <a className="font-semibold hover:text-blue-500 duration-200">
                    SafePay
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-none">
            <ul className="flex items-center gap-5">
              <li>
                <button className="px-5 py-2 rounded bg-[#196EAF] text-white font-semibold">
                  Post a Job
                </button>
              </li>
              <Link
                href={"/register"}
                className="font-semibold hover:text-blue-500 duration-200 text-lg flex items-center gap-1"
              >
                <span>
                  <RxPencil2 />
                </span>
                <span>Sign Up</span>
              </Link>
              <Link
                href={"/login"}
                className="font-semibold hover:text-blue-500 duration-200 text-lg flex items-center gap-1"
              >
                <span>
                  <IoIosLogIn />
                </span>
                <span>Sign In</span>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
      <nav className="navbar bg-base-100 lg:hidden container mx-auto px-3">
        <div className="navbar-start">
          <div className="">
            <GiHamburgerMenu className="scale-150" />
          </div>
        </div>
        <div className="navbar-center">
          <Image
            src={"/svg/logo.svg"}
            width={100}
            height={100}
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="navbar-end">
          <button className="px-3 py-2 rounded bg-[#196EAF] text-white font-semibold text-sm ">
            Post a Job
          </button>
        </div>
      </nav>
    </>
  );
}
