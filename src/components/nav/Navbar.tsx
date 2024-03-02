"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { RxPencil2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
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
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="bg-white pl-2 py-1 rounded-md flex items-center gap-1"
              >
                <IoNotifications />
                <IoIosArrowDown className="scale-50" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 min-w-60"
              >
                <div className="font-semibold border-b py-1">Notification</div>
                <div className="min-h-56 max-h-80">
                  <p className="text-center pt-6">
                    There are no alerts to display.
                  </p>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="bg-white pl-2 py-1 rounded-md flex items-center gap-1"
              >
                <IoChatboxSharp />
                <IoIosArrowDown className="scale-50" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-72"
              >
                <div className="font-semibold border-b py-1">Messages</div>
                <div className="min-h-56 max-h-80">
                  <p className="text-center pt-6">
                    There are no alerts to display.
                  </p>
                </div>
                <div className=" border-t flex justify-center items-center">
                  <Link
                    href={"#"}
                    className="text-blue-500 hover:underline text-xs pt-1.5"
                  >
                    View All Message
                  </Link>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-1 hover:scale-105 duration-200"
              >
                <Image
                  src={"https://placehold.co/100x100.png"}
                  className="rounded-md"
                  alt="default"
                  width={30}
                  height={30}
                />
                <IoIosArrowDown className="scale-50" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 w-52"
              >
                <li>
                  <Link href={"#"}>Edit Account</Link>
                </li>
                <li>
                  <Link href={"#"}>Edit Profile</Link>
                </li>
                <li>
                  <Link href={"#"}>Buy Bids</Link>
                </li>
                <li>
                  <Link href={"#"}>Membership</Link>
                </li>
                <li>
                  <Link href={"#"}>Manage Cash Account</Link>
                </li>
                <div className="border-b py-1" />
                <div className="px-4 py-2 text-gray-400">ACCOUNT TEAM</div>
                <li>
                  <Link href={"#"}>Manage Team</Link>
                </li>
                <div className="border-b py-1" />
                <div className="py-1" />
                <li>
                  <Link href={"#"}>Help</Link>
                </li>
                <li>
                  <Link href={"#"}>Logout</Link>
                </li>
              </ul>
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
          <button className="" onClick={() => setShowSidebar(!showSidebar)}>
            <GiHamburgerMenu className="scale-150" />
          </button>
        </div>
        <div className="navbar-center">
          <Link href={"/"}>
            <Image
              src={"/svg/logo.svg"}
              width={100}
              height={100}
              alt="logo"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="navbar-end">
          <button className="px-3 py-2 rounded bg-[#196EAF] text-white font-semibold text-sm ">
            Post a Job
          </button>
        </div>
      </nav>
      <aside
        className={`top-0 left-0 w-[80vw] sm:w-[50vw] md:w-[30vw] py-2 bg-[#F7F7F7] fixed h-full lg:hidden ease-in-out duration-300 z-10 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex max-h-screen flex-col">
          <div className="flex justify-end py-5 px-5 border-b flex-none shadow-md">
            <button
              className="hover:scale-105 duration-200"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <IoCloseSharp className="scale-[2]" />
            </button>
          </div>
          <ul className="text-sm font-semibold overflow-y-auto flex-1">
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                Find Freelancers
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                Find a Job
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                About Guru
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                Why Guru
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                Blog
              </Link>
            </li>
            <div className="border-b w-full pt-1" />
            <div className="w-full pt-1" />
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                Enterprice Solutions
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                Purchase Order Solutions
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                Work Agreements
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
              >
                SafePay
              </Link>
            </li>
            <div className="border-b w-full pt-1" />
            <div className="w-full pt-1" />
            <li>
              <Link
                href={"/register"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href={"/login"}
                className="hover:underline block hover:bg-gray-300 px-5 py-3"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
