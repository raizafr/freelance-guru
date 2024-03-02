"use client";

import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";

export default function AddServiceDedicatedResource() {
  const [choose, setChoose] = useState<string>("");
  return (
    <section className="border rounded flex-1 flex-col">
      <div className="py-2 border-b bg-[#FAFAFA] rounded-t px-4">
        <h1 className="text-xl font-[400]">
          Edit Services or Dedicated Resources
        </h1>
      </div>
      <div className="text-sm px-4 ">
        <div className="flex-1 flex items-center gap-3 border-b py-5">
          <label htmlFor="addService" className="flex items-center gap-1">
            <input
              type="radio"
              name="choose"
              id="addService"
              onChange={() => setChoose("addService")}
            />
            <span>Add a Service</span>
          </label>
          <label
            htmlFor="addDedicatedService"
            className="flex items-center gap-1"
          >
            <input
              type="radio"
              name="choose"
              id="addDedicatedService"
              onChange={() => setChoose("addDedicatedService")}
            />
            <span>Add a Dedicated Resource</span>
          </label>
        </div>
      </div>

      {/* add a service */}
      {choose === "addService" && (
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
          <div className="text-[14px] mt-2"></div>
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
          <div className="text-[14px] mt-2"></div>
          <div className="border-b" />
          {/* end Service Cost */}

          {/* Service Thumbnail */}
          <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
            <CiImageOn className="text-[#2777C6]" />
            <span className="font-semibold">Service Thumbnail</span>
          </h2>
          <div className="text-[14px] mt-2"></div>

          {/* end Service Thumbnail */}
        </div>
      )}
      {/* end add a service */}

      {/* add a dedicated resource */}
      {choose === "addDedicatedService" && (
        <div className="px-4 mt-5">
          {/* Service Category and skills */}
          <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
            <FaRegCircleUser className="text-[#2777C6]" />
            <span className="font-semibold"> Dedicated Resource Details</span>
          </h2>
          <div className="text-[14px] mt-2"></div>
          <div className="border-b" />
          {/* end Service Category and skills */}

          {/* Service Category and skills */}
          <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
            <VscTools className="text-[#2777C6]" />
            <span className="font-semibold">Service Category and Skills</span>
          </h2>
          <div className="text-[14px] mt-2"></div>
          <div className="border-b" />
          {/* end Service Category and skills */}

          {/* Service Category and skills */}
          <h2 className="flex items-center gap-2 text-lg mt-5 mb-3">
            <RiTeamLine className="text-[#2777C6]" />
            <span className="font-semibold">Hiring Terms</span>
          </h2>
          <div className="text-[14px] mt-2"></div>
          <div className="border-b" />
          {/* end Service Category and skills */}
        </div>
      )}
      {/* end add a dedicated resource */}
    </section>
  );
}
