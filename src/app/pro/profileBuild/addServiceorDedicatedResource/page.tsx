"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import { IoMdImages } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

export default function AddServiceDedicatedResource() {
  const [thumbnail, setThumbnail] = useState<any>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader() as any;
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="border rounded flex-1 flex-col">
      <div className="py-2 border-b bg-[#FAFAFA] rounded-t px-4">
        <h1 className="text-xl font-[400]">Add a Service</h1>
      </div>
      <div className="px-4 mt-5">
        {/* service title */}
        <h2 className="flex items-center gap-2 text-lg">
          <IoSettingsOutline className="text-[#2777C6]" />
          <span className="font-semibold">Service Title</span>
        </h2>
        <div className="text-[14px] mt-2">
          <h3 className="text-gray-600">
            Mention the exact skill that you offer.
          </h3>
          <input
            type="text"
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500 mt-2"
            placeholder="E.g. Android App Development"
          />
        </div>
        <div tabIndex={0} className="collapse w-fit text-xs -ml-3">
          <input type="checkbox" />
          <div className="collapse-title text-[#2777C6]">Examples</div>
          <div className="collapse-content -mt-5">
            <div className="flex items-center gap-2">
              <div className="bg-[#2777C6] w-1 h-1 rounded-full" />
              <div>Mobile and Web Application Development</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#2777C6] w-1 h-1 rounded-full" />
              <div>Full Stack Web Development</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#2777C6] w-1 h-1 rounded-full" />
              <div>Creative, Content and Technical Writing</div>
            </div>
          </div>
        </div>
        <div className="border-b" />
        {/* end service title */}

        {/* service description */}
        <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
          <MdOutlineDescription className="text-[#2777C6]" />
          <span className="font-semibold">Service Description</span>
        </h2>
        <div className="text-[14px] mt-2">
          <h3 className="text-gray-600">
            Describe service in detail and help Employers understand your
            capabilities.
          </h3>
          <input
            type="text"
            className="w-full px-3 py-2 rounded border focus:outline-none focus:border-blue-500 mt-2"
            placeholder="Service description"
          />
        </div>
        <div className="border-b" />
        {/* end service description */}

        {/* Service Category and skills */}
        <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
          <VscTools className="text-[#2777C6]" />
          <span className="font-semibold">Service Category and Skills</span>
        </h2>
        <div className="text-[14px] mt-2"></div>
        <div className="border-b" />
        {/* end Service Category and skills */}

        {/* Service Cost */}
        <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
          <GrMoney className="text-[#2777C6]" />
          <span className="font-semibold">Service Cost</span>
        </h2>
        <div className="text-[14px] mt-2 flex lg:gap-28 md:gap-16 gap-7 mb-5">
          <label htmlFor="">
            <div className="font-[500] text-gray-700 text-xs">Rate/Hour</div>
            <div className="w-fit relative pt-1">
              <input
                type="number"
                className="border focus:outline-none rounded focus:border-blue-500 pl-4 pr-2 py-2 w-24 md:w-36"
              />
              <div className="text-gray-400 absolute top-[17px] left-1">
                <BiDollar />
              </div>
            </div>
          </label>
          <label htmlFor="">
            <div className="font-[500] text-gray-700 text-xs text-nowrap">
              Minimum Budget
            </div>
            <div className="w-fit relative pt-1">
              <input
                type="number"
                className="border focus:outline-none rounded focus:border-blue-500 pl-4 pr-2 py-2 w-24 md:w-36"
              />
              <div className="text-gray-400 absolute top-[17px] left-1">
                <BiDollar />
              </div>
            </div>
          </label>
        </div>
        <div className="border-b" />
        {/* end Service Cost */}

        {/* Service Thumbnail */}
        <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
          <CiImageOn className="text-[#2777C6]" />
          <span className="font-semibold">Service Thumbnail</span>
        </h2>
        <div className="text-[14px] mt-2">
          <h3 className="text-gray-600">Select a photo for your service.</h3>
          <label>
            <div
              className={`w-[120px] h-[80px] border text-gray-500 items-center justify-center cursor-pointer ${
                thumbnail ? "hidden" : "flex"
              }`}
            >
              <IoMdImages className="scale-150" />
            </div>
            {thumbnail && (
              <Image
                src={thumbnail}
                alt="image"
                width={120}
                height={80}
                className="border"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onClick={handleImageChange}
            />
          </label>
          <h3 className="text-gray-600">
            For best results, upload image in size 300 x 200 (under 5 MB).
          </h3>
        </div>
        {/* end Service Thumbnail */}
      </div>
    </section>
  );
}
