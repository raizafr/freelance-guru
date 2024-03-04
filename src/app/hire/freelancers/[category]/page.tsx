"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SectionTopUserFrelance from "./SectionTopUserFrelance";
import SectionTopwithCategory from "./SectionTopwithCategory";

export default function Freelancer({ params }: { params: { category: string } }) {
  const [titleHero, setTitleHero] = useState<string>("");
  useEffect(() => {
    if (params.category == "interior-design-architecture") {
      setTitleHero("Interior design/Architecture");
    }
    if (params.category == "logistic-and-supply-chain") {
      setTitleHero("Logistics and Supply-chain");
    }
    if (params.category == "human-resource") {
      setTitleHero("Human Resources");
    }
    if (params.category == "sales-marketing") {
      setTitleHero("Sales marketing");
    }
    if (params.category == "adminisitrative-and-operation") {
      setTitleHero("Administrative & Operations");
    }
  }, [params]);
  return (
    <>
      <div className="bg-cover bg-[url('/svg/banner.svg')]">
        <section className="flex container mx-auto text-white justify-center">
          <div className="space-y-7 py-20 md:py-20 lg:py-32 px-3 md:px-12 text-center">
            <h1 className="text-5xl font-bold">Find and Hire {titleHero}</h1>
            <div>
              <h2 className="text-2xl font-semibold">
                Browse 276,711 {titleHero} Experts Free
              </h2>
              <h3 className="font-semibold text-lg">
                Guru makes it easy for quality employers and freelancers to
                connect, collaborate, and get work done flexibly and securely.
              </h3>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <input
                type="text"
                placeholder="What skill are you looking for?"
                className="focus:outline-none border border-transparent focus:border-blue-500 rounded-md px-3 py-2.5 flex-1 text-black text-sm md:text-base"
              />
              <div>Or</div>
              <Link
                href={"#"}
                className="bg-[#045A9D] px-5 py-2.5 text-white rounded-md text-sm md:text-base"
              >
                Post a Job - It{"'"}s Free
              </Link>
            </div>
            <div className="leading-[19px] flex gap-1 flex-wrap">
              <Link
                href={"#"}
                className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
              >
                Data Entry
              </Link>
              <Link
                href={"#"}
                className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
              >
                Graphic Design
              </Link>
              <Link
                href={"#"}
                className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
              >
                Ethical Hacking
              </Link>
              <Link
                href={"#"}
                className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
              >
                Logo Design
              </Link>
              <Link
                href={"#"}
                className="font-medium text-[13px] border rounded px-2 py-0.5 text-[#808894] border-[#808894] hover:border-white hover:text-white duration-200"
              >
                WordPress
              </Link>
            </div>
          </div>
        </section>
      </div>
      <SectionTopwithCategory title={titleHero} />
      <SectionTopUserFrelance title={titleHero} />
    </>
  );
}
