import Link from "next/link";
import React from "react";

export default function SectionBrowseFreelancer() {
  return (
    <section className="container mx-auto lg:px-20 px-3 md:px-5 py-16">
      <h1 className="text-[35px] leading-[53px] font-[500] text-center">
        Browse Freelancers
      </h1>
      <div className="flex justify-center pt-2">
        <div className="w-20 h-0.5 bg-[#2777C6] text-center" />
      </div>
      <h2 className="text-center mt-5 font-semibold text-xl">Top Skills</h2>

      <div className="footer text-[#707070]">
        <nav className="space-y-2">
          <Link href={"#"} className="link link-hover">
            3D Designers
          </Link>
          <Link href={"#"} className="link link-hover">
            Article Writers
          </Link>
          <Link href={"#"} className="link link-hover">
            C Developers
          </Link>
          <Link href={"#"} className="link link-hover">
            CSS Developers
          </Link>
          <Link href={"#"} className="link link-hover">
            Editors
          </Link>
          <Link href={"#"} className="link link-hover">
            Excel Experts
          </Link>
          <Link href={"#"} className="link link-hover">
            JavaScript Developers
          </Link>
        </nav>
      </div>
    </section>
  );
}
