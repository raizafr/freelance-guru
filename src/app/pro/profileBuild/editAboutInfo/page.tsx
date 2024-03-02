"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaFilePdf, FaRegImages } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";

export default function EditAboutInfo() {
  const [iam, setIam] = useState<boolean>(true);
  const [imageFeatureTeamsMember, setImageFeaturesTeamMember] =
    useState<File | null>(null);

  return (
    <section className="border rounded flex-1 flex-col">
      <div className="py-2 border-b bg-[#FAFAFA] rounded-t px-4">
        <h1 className="text-xl font-[400]">Edit About Info</h1>
      </div>
      {/* photo */}
      <div className="px-4">
        <div className="bg-[url('https://res.cloudinary.com/gurucom/image/upload/f_auto,q_auto,dpr_2/pimg/CoverImages/default_cover_image.jpeg')] flex flex-col justify-center items-center py-5 mt-5">
          <Image
            src={"https://placehold.co/400x400.png"}
            alt="default"
            width={150}
            height={150}
            loading="lazy"
          />
          <div className="pt-2">
            <button className="bg-gray-600 text-white px-3 py-1 rounded-md text-sm hover:scale-105 duration-200">
              Change Photo
            </button>
          </div>
        </div>
      </div>
      {/* end photo */}

      {/* public indentity */}
      <div className="mt-3">
        <h2 className="text-base border-b-2 mx-4 py-1">Public Indentity</h2>
        <form className="text-sm pt-3 px-5 space-y-2">
          <label className="font-[500] flex gap-3 items-center ">
            <div className="w-1/5 text-right">
              Screen Name <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="font-[500] flex gap-3 items-center">
            <div className="w-1/5 text-right">Website Link</div>
            <input
              type="text"
              className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="font-[500] flex gap-3 items-center">
            <div className="w-1/5 text-right">Professional Video Link</div>
            <input
              type="text"
              className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="font-[500] flex gap-3 items-center">
            <div className="w-1/5 text-right">Facebook Link</div>
            <input
              type="text"
              className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="font-[500] flex gap-3 items-center">
            <div className="w-1/5 text-right">Linkedin Link</div>
            <input
              type="text"
              className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="font-[500] flex gap-3 items-center ">
            <div className="w-1/5 text-right" />
            <div className="flex-1">
              <button className="w-fit bg-[#2777C6] text-white px-3 py-1.5 rounded hover:scale-105 duration-200">
                Save
              </button>
            </div>
          </label>
        </form>
      </div>
      {/* end public indentity */}

      {/* Overview */}
      <div className="mt-3">
        <h2 className="text-base border-b-2 mx-4 py-1">Overview</h2>
        <form className="text-sm pt-3 px-5 space-y-2">
          <div className="font-[500] flex gap-3 items-center ">
            <div className="w-1/5 text-right">I am...</div>
            <div className="flex-1 flex items-center gap-3">
              <label htmlFor="" className="flex items-center gap-1">
                <input type="radio" name="iam" onChange={() => setIam(true)} />
                <span>An Individual</span>
              </label>
              <label htmlFor="" className="flex items-center gap-1">
                <input type="radio" name="iam" onChange={() => setIam(false)} />
                <span>A Company</span>
              </label>
            </div>
          </div>
          {iam ? (
            <div className="space-y-5 pt-4">
              <label className="font-[500] flex gap-3 items-start">
                <div className="w-1/5 text-right">Tagline</div>
                <div className="flex-1">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={3}
                    placeholder="Write a tagline that conveys your mission, your promise, and you brand"
                    className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <div className="text-[11px] text-gray-500">
                    190 characters left
                  </div>
                </div>
              </label>
              <label className="font-[500] flex gap-3 items-start">
                <div className="w-1/5 text-right">
                  Bio <span className="text-red-500">*</span>
                </div>
                <div className="flex-1">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={3}
                    placeholder="Tell your story! Include information about your work experience, values, personal anecdotes, hobbies, etc."
                    className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <div className="text-[11px] text-gray-500">
                    3000 characters left
                  </div>
                </div>
              </label>
              <label className="font-[500] flex gap-3 items-start">
                <div className="w-1/5 text-right">Work Terms</div>
                <div className="flex-1">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={3}
                    placeholder="Hours of operation, payment terms, and preferred communication style, etc."
                    className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <div className="text-[11px] text-gray-500">
                    2000 characters left
                  </div>
                </div>
              </label>
            </div>
          ) : (
            <div className="space-y-5 pt-4">
              <label className="font-[500] flex gap-3 items-start">
                <div className="w-1/5 text-right">Tagline</div>
                <div className="flex-1">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={3}
                    placeholder="Write a tagline that conveys your mission, your promise, and you brand"
                    className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <div className="text-[11px] text-gray-500">
                    190 characters left
                  </div>
                </div>
              </label>
              <label className="font-[500] flex gap-3 items-start">
                <div className="w-1/5 text-right">
                  Company History <span className="text-red-500">*</span>
                </div>
                <div className="flex-1">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={3}
                    placeholder="Tell your company's story! Include information about the individuals that make up the company, as well as the company itself."
                    className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <div className="text-[11px] text-gray-500">
                    3000 characters left
                  </div>
                </div>
              </label>
              <label className="font-[500] flex gap-3 items-center ">
                <div className="w-1/5 text-right">Operating since</div>
                <input
                  type="text"
                  className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
                />
              </label>
              <label className="font-[500] flex gap-3 items-center ">
                <div className="w-1/5 text-right">Featured Team Members</div>
                <div>
                  <Image
                    src={"https://placehold.co/400x400.png"}
                    alt="default"
                    width={180}
                    height={180}
                    loading="lazy"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="border flex-1 px-3 py-1.5 rounded focus:outline-none focus:border-blue-500 hidden"
                  />
                </div>
              </label>
              <label className="font-[500] flex gap-3 items-start">
                <div className="w-1/5 text-right">Work Terms</div>
                <div className="flex-1">
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={3}
                    placeholder="Hours of operation, payment terms, and preferred communication style, etc."
                    className="border w-full px-3 py-1.5 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                  <div className="text-[11px] text-gray-500">
                    2000 characters left
                  </div>
                </div>
              </label>
            </div>
          )}
          <div className="font-[500] flex gap-3 items-center ">
            <div className="w-1/5 text-right" />
            <div className="flex-1">
              <button className="w-fit bg-[#2777C6] text-white px-3 py-1.5 rounded hover:scale-105 duration-200">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* end Overview */}
      {/* Attach Files and Videos */}
      <div className="mt-3 pb-10">
        <h2 className="text-base border-b-2 mx-4 py-1">
          Attach Files and Videos
        </h2>
        <div className="pt-3 flex gap-5 px-5">
          <div className="flex flex-col items-center">
            <div className="text-blue-500 border rounded-full p-4 w-fit relative">
              <FaRegImages className="scale-150" />
              <CiCirclePlus className="absolute top-0 right-0 scale-75" />
            </div>
            <div className="text-xs text-gray-400 pt-1">Upload Images</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-blue-500 border rounded-full p-4 w-fit relative">
              <FaFilePdf className="scale-150" />
              <CiCirclePlus className="absolute top-0 right-0 scale-75" />
            </div>
            <div className="text-xs text-gray-400 pt-1">Upload Images</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-blue-500 border rounded-full p-4 w-fit relative">
              <ImEmbed2 className="scale-150" />
              <CiCirclePlus className="absolute top-0 right-0 scale-75" />
            </div>
            <div className="text-xs text-gray-400 pt-1">Upload Images</div>
          </div>
        </div>
      </div>
      {/* End Attach Files and Videos */}
    </section>
  );
}
