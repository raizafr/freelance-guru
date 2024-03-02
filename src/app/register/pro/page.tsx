import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Pro() {
  return (
    <form className="container mx-auto px-3 lg:px-64 min-h-[90vh] flex flex-col justify-center items-center gap-5 mt-10">
      {/* Enter your public name */}
      <div className="border rounded flex-1 flex-col w-full">
        <div className="py-2 border-b text-xs bg-[#FAFAFA] px-4">
          <h1 className="text-base font-semibold">
            Enter your Public Identity
          </h1>
          <div className="text-sm font-[400]">
            This will be visible to everyone
          </div>
        </div>
        <div className="py-5 flex-1">
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src={"/images/def_fl_128.avif"}
              alt="default image"
              width={130}
              height={0}
              loading="lazy"
              className="border p-2"
            />
            <button className="bg-[#DDDDDD] px-6 py-1 w-fit rounded-md text-sm">
              Upload Foto
            </button>
          </div>
          <div className="px-6 space-y-2">
            <h2 className="text-sm">Screen Name</h2>
            <div className="space-y-1">
              <div className="text-xs">
                This name appears next to your profile photo
              </div>
              <input
                type="text"
                className="w-full border px-3 py-1.5 rounded"
                placeholder="Screen Name"
              />
            </div>
          </div>
        </div>
      </div>
      {/* end Enter your public name */}
      {/* Enter your Contact Information */}
      <div className="border rounded flex-1 flex-col w-full pb-5">
        <div className="py-2 border-b text-xs bg-[#FAFAFA] px-6">
          <h1 className="text-base font-semibold">
            Enter your Contact Information
          </h1>
        </div>
        <div className="py-5 flex-1 space-y-3 px-5">
          <label className="px-6 space-y-2">
            <h2 className="text-sm">Search Address</h2>
            <input
              type="text"
              className="w-full border-b px-3 py-1.5 focus:outline-none focus:border-black"
              placeholder="Enter a location"
            />
          </label>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">Country</h2>
            <select
              name=""
              id=""
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-black"
            >
              <option value="" selected>
                USA
              </option>
              <option value="">Japan</option>
              <option value="">England</option>
            </select>
          </label>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">Street</h2>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-black"
              placeholder="Street"
            />
          </label>
          <div className="flex gap-2 flex-wrap">
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">City</h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-black"
                placeholder="City"
              />
            </label>
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">State</h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-black"
                placeholder="Street"
              />
            </label>
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">Postal Code</h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-black"
                placeholder="Street"
              />
            </label>
          </div>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">Suburb/ district/ neighborhood</h2>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-black"
              placeholder="Suburb/ district/ neighborhood"
            />
          </label>
        </div>
      </div>
      {/* end Enter your Contact Information */}
      <div className="w-full mb-10 mt-5 ">
        <Link
          href={"/pro/profileBuild/editAboutInfo"}
          className="px-5 py-2 rounded bg-[#196EAF] text-white font-semibold hover:scale-105 duration-200"
        >
          Post a Job
        </Link>
      </div>
    </form>
  );
}
