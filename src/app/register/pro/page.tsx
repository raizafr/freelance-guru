"use client";

import Button from "@/components/button/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Pro() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const router = useRouter();
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader() as any;
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="container mx-auto px-3 lg:px-64 min-h-[90vh] flex flex-col justify-center items-center gap-5 mt-10">
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
              src={selectedImage || "/images/def_fl_128.avif"}
              alt="default image"
              width={130}
              height={0}
              loading="lazy"
              className="border p-2"
            />
            <label htmlFor="image">
              <div className="bg-[#4FBFA3] px-6 py-1 w-fit rounded-md text-sm text-white">
                Upload Photo
              </div>
              <input
                onChange={handleImageChange}
                type="file"
                className="hidden"
                accept="image/*"
                id="image"
              />
            </label>
          </div>
          <div className="px-6 space-y-2">
            <h2 className="text-sm">Screen Name</h2>
            <div className="space-y-1">
              <div className="text-xs">
                This name appears next to your profile photo
              </div>
              <input
                type="text"
                className="w-full border px-3 py-1.5 rounded focus:outline-none focus:border-[#4FBFA3]"
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
            Enter Your Contact Information
          </h1>
        </div>
        <div className="py-5 flex-1 space-y-3 px-5">
          <label className="px-6 space-y-2">
            <h2 className="text-sm">Search Address</h2>
            <input
              type="text"
              className="w-full border-b px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
              placeholder="Enter a location"
            />
          </label>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">Country</h2>
            <select
              name=""
              id=""
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
            >
              <option value="" selected>
                USA
              </option>
              <option value="">Japan</option>
              <option value="">England</option>
            </select>
          </label>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">Street <span className="text-red-500">*</span></h2>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
              placeholder="Street"
            />
          </label>
          <div className="flex gap-2 flex-wrap">
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">City <span className="text-red-500">*</span></h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
                placeholder="City"
              />
            </label>
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">State <span className="text-red-500">*</span></h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
                placeholder="Street"
              />
            </label>
            <label className="space-y-1 flex-1">
              <h2 className="text-sm">Postal Code <span className="text-red-500">*</span></h2>
              <input
                type="text"
                className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
                placeholder="Street"
              />
            </label>
          </div>
          <label className="px-6 space-y-1">
            <h2 className="text-sm">Suburb/ district/ neighborhood <span className="text-red-500">*</span></h2>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-1.5 focus:outline-none focus:border-[#4FBFA3]"
              placeholder="Suburb/ district/ neighborhood"
            />
          </label>
        </div>
      </div>
      {/* end Enter your Contact Information */}
      <div className="w-full mb-10 mt-5 ">
        <Button onClick={() => router.push("/register/completeYourProfile")}>
          Save
        </Button>
      </div>
    </section>
  );
}
