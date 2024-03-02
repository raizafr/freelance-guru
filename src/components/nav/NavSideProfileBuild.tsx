"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaDatabase, FaUser } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { IoPencil } from "react-icons/io5";

export default function NavSideProfileBuild() {
  const pathName = usePathname();
  return (
    <aside className="">
      <div className="pb-3 border-b flex flex-col justify-center items-center gap-2">
        <Image
          src={"https://placehold.co/400x400/png"}
          alt="default"
          width={50}
          height={50}
          loading="lazy"
        />
        <h2 className="font-semibold text-base">User Name</h2>
        <div className="text-center">
          <p className="text-[13px] text-[#2777C6] hover:underline cursor-pointer text-nowrap">
            View Profile
          </p>
          <p className="text-[13px] text-[#2777C6] hover:underline cursor-pointer text-nowrap">
            Upgrade Membership
          </p>
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-500 space-y-2">
        <Link
          href={"/pro/profileBuild/editAboutInfo"}
          className="flex items-center gap-1 hover:bg-gray-200 px-1 py-0.5 rounded-md duration-200"
        >
          <IoPencil />
          <span>Edit Profile</span>
        </Link>
        <div className="flex flex-col gap-2">
          <Link
            href={"#"}
            className="hover:bg-gray-200 mx-5 px-1 py-0.5 rounded-md duration-200"
          >
            Services/Dedicated Resources
          </Link>
          <Link
            href={"#"}
            className="hover:bg-gray-200 mx-5 px-1 py-0.5 rounded-md duration-200"
          >
            Portofolio
          </Link>
          <Link
            href={"/pro/profileBuild/editAboutInfo"}
            className={`hover:bg-gray-200 mx-5 px-1 py-0.5 rounded-md duration-200 ${
              pathName == "/pro/profileBuild/editAboutInfo"
                ? "text-black font-semibold"
                : ""
            }`}
          >
            About
          </Link>
          <Link
            href={"#"}
            className="hover:bg-gray-200 mx-5 px-1 py-0.5 rounded-md duration-200"
          >
            Feedback
          </Link>
        </div>
        <Link
          href={"#"}
          className="flex items-center gap-1 hover:bg-gray-200 px-1 py-0.5 rounded-md duration-200"
        >
          <FaUser />
          <span>Membership</span>
        </Link>
        <Link
          href={"#"}
          className="flex items-center gap-1 hover:bg-gray-200 px-1 py-0.5 rounded-md duration-200"
        >
          <FaDatabase />
          <span>Bids</span>
        </Link>
        <Link
          href={"#"}
          className="flex items-center gap-1 hover:bg-gray-200 px-1 py-0.5 rounded-md duration-200"
        >
          <IoIosStats />
          <span>Profile Stats</span>
        </Link>
      </div>
    </aside>
  );
}
