import Image from "next/image";
import React from "react";

export default function SectionWhatClientSay() {
  return (
    <section className="container mx-auto lg:px-12 px-3 md:px-5 py-16">
      <h1 className="text-[35px] leading-[53px] font-[500] text-center">
        What Clients Say
      </h1>
      <div className="flex justify-center pt-2">
        <div className="w-20 h-0.5 bg-[#2777C6] text-center" />
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className=" w-full pt-10 px-20">
            <div className="text-[#707070] text-center">
              Guru{"'"}s services have allowed me to find more freelancing work
              as a writer than any other website. It is easy to communicate with
              clients through their message system and their SafePay feature
              ensures that all funds are secured prior to any work being done. I
              would recommend Guru to any freelancer who is looking to find new
              clients online.
            </div>
            <div className="justify-center pt-5 flex items-center gap-3">
              <Image
                src={"/images/photo-russell-lee.avif"}
                alt="example"
                width={70}
                height={70}
                className="rounded-full h-fit"
              />
              <div className="space-y-1">
                <p className="font-semibold">ED Bagley</p>
                <p className="text-[#707070]">
                  Director of Product Marketing, O.C. Tanner Company
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="scale-150 hover:scale-[1.8] duration-200"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="scale-150 hover:scale-[1.8] duration-200"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className=" w-full pt-10 px-20">
            <div className="text-[#707070] text-center">
              In our company, we do ongoing research with our target audience.
              This includes 30-45 minute phone interviews. It was difficult to
              conduct the interview, really listen, and ask good follow up
              questions while trying to capture it all in thorough hand-written
              notes. One of our writers suggested using Guru to find someone to
              transcribe these interviews...The person I hired is the one I’ve
              stuck with for nearly two years now – she is fast, accurate, and
              affordable. I’d never have found her on my own, given that I live
              in Utah and she lives in South Africa. I could never have arranged
              such an effective solution to my on-going need for transcripts
              without Guru. It’s been a life-saver.
            </div>
            <div className="justify-center pt-5 flex items-center gap-3">
              <Image
                src={"/images/photo-russell-lee.avif"}
                alt="example"
                width={70}
                height={70}
                className="rounded-full h-fit"
              />
              <div className="space-y-1">
                <p className="font-semibold">Russell Lee</p>
                <p className="text-[#707070]">Writer</p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="scale-150 hover:scale-[1.8] duration-200"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="scale-150 hover:scale-[1.8] duration-200"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
