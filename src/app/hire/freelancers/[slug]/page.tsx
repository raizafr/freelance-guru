"use client";

import CardFIndTopFreelance from "@/components/card/CardFIndTopFreelance";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SectionTopwithSlug from "./SectionTopwithSlug";
import SectionTopUserFrelance from "./SectionTopUserFrelance";

export default function Freelancer({ params }: { params: { slug: string } }) {
  const [titleHero, setTitleHero] = useState<string>("");
  useEffect(() => {
    if (params.slug == "programming-development") {
      setTitleHero("Programmer & Developer");
    }
    if (params.slug == "writing-translation") {
      setTitleHero("Writers & Translators");
    }
    if (params.slug == "design-art") {
      setTitleHero("Designers & Artists");
    }
    if (params.slug == "admininstrative-secretarial") {
      setTitleHero("Admin & Secretaries");
    }
    if (params.slug == "sales-marketing") {
      setTitleHero("Sales & Marketing Gurus");
    }
    if (params.slug == "engineering-architecture") {
      setTitleHero("Engineers & Architects");
    }
    if (params.slug == "business-finance") {
      setTitleHero("Business & Finance Gurus");
    }
    if (params.slug == "education-training") {
      setTitleHero("Educators & Trainers");
    }
    if (params.slug == "legal") {
      setTitleHero("Legal Experts");
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
      <SectionTopwithSlug title={titleHero} />
      <SectionTopUserFrelance title={titleHero} />
    </>
  );
}
