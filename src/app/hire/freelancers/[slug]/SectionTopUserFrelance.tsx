import CardTopUsersFreelance from "@/components/card/CardTopUsersFreelance";
import React from "react";

export default function SectionTopUserFrelance({ title }: { title: string }) {
  return (
    <section className="container mx-auto lg:px-12 px-3 md:px-5 py-16">
      <h1 className="text-[35px] leading-[53px] font-[500] text-center">
        Top {title} Freelancing Services
      </h1>
      <div className="flex justify-center pt-2">
        <div className="w-20 h-0.5 bg-[#2777C6] text-center" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-14 pt-20">
        <CardTopUsersFreelance/>
        <CardTopUsersFreelance/>
        <CardTopUsersFreelance/>
        <CardTopUsersFreelance/>
        <CardTopUsersFreelance/>
        <CardTopUsersFreelance/>
      </div>
      <div className="text-[16px] leading-[24px] text-[#707070] text-center pt-10">
        See All {title} Freelancing Services
      </div>
      <div className="flex justify-center pt-5">
        <button className="px-5 py-2 rounded bg-[#196EAF] text-white font-semibold w-fit">
          View All
        </button>
      </div>
    </section>
  );
}
