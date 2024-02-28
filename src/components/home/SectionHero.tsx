import Link from 'next/link'
import React from 'react'

export default function SectionHero() {
  return (
    <div className="bg-cover bg-[url('/svg/banner.svg')]">
      <section className="flex container mx-auto text-white">
        <div className="flex-1 space-y-7 py-32 px-12">
          <h1 className="text-5xl font-bold">Find & Hire Expert Freelancers</h1>
          <h3 className="font-semibold text-lg">
            Work with the best freelance talent from around the world on our
            secure, flexible and cost-effective platform.
          </h3>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="What skill are you looking for?"
              className="focus:outline-none border border-transparent focus:border-blue-500 rounded-md px-3 py-2.5 flex-1 text-black"
            />
            <div>Or</div>
            <Link
              href={"#"}
              className="bg-[#045A9D] px-5 py-2.5 text-white rounded-md"
            >
              Post a Job - It{"'"}s Free
            </Link>
          </div>
          <div className="leading-[19px] space-x-1">
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
        <div className="flex-none w-1/3 bg-[url('/images/bannerguy.avif')] bg-cover bg-left-bottom"></div>
      </section>
    </div>
  )
}
