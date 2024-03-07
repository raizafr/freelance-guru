"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();
  return (
    <section className="container mx-auto flex md:shadow-xl my-5">
      <div className="bg-[#4FBFA3] flex-1 text-center text-white pt-8 lg:px-20 px-5 hidden md:block">
        <h1 className="text-[32px] leading-[46px]">Grow with Guru</h1>
        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">
                99% Customer Satisfaction
              </h2>
              <h3 className="font-semibold text-base">
                Based on paid invoices
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Flexible Platform</h2>
              <h3 className="font-semibold text-base">
                Choose from four Payment terms
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Payment Protection</h2>
              <h3 className="font-semibold text-base">
                Secure your transactions with SafePay
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <div>
              <h2 className="font-semibold text-lg">Lowest Transaction Fees</h2>
              <h3 className="font-semibold text-base">
                Get maximum value at minimum cost
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-8 px-10 md:px-5 lg:px-20 space-y-5 pb-28 justify-center items-center ">
        <h1 className="text-[32px] leading-[46px] text-center text-[#4FBFA3]">
          Sign Up
        </h1>
        <div className="border-b" />
        <div className="space-y-5">
          <input
            type="text"
            className="focus:border-[#4FBFA3] border focus:outline-none w-full px-5 py-2.5"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="focus:border-[#4FBFA3] border focus:outline-none w-full px-5 py-2.5"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-end">
            <button
              disabled={!email || !name ? true : false}
              onClick={() => router.push("/register/chooseAccounType")}
              className={`${
                !email || !name
                  ? "text-[#4FBFA3] cursor-not-allowed"
                  : "bg-[#4FBFA3] text-white cursor-pointer"
              } px-5 py-3 rounded-3xl  font-semibold disabled border border-[#4FBFA3]`}
            >
              Proceed
            </button>
          </div>
        </div>
        <div className="text-[14px] leading-[21px] text-center">
          <span>
            Already have an account?
            <Link href={"/login"} className="text-[#4FBFA3]">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
