"use client";

import Link from "next/link";
import { useState } from "react";

export default function Verify() {
  const [otp, setOtp] = useState<string>("");
  console.log(otp);
  return (
    <section className="container mx-auto flex md:shadow-xl my-5">
      <div className="bg-[#4F86C4] flex-1 text-center text-white pt-8 lg:px-20 px-5 hidden md:block">
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
        <h1 className="text-[32px] leading-[46px] text-center text-blue-500">
          Sign Up
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex-1 border-b" />
          <div className="text-sm">Verify email</div>
          <div className="flex-1 border-b" />
        </div>
        <div className="text-center py-3 text-gray-700">
          Please enter the 6-digit code sent to your email
        </div>
        <div className="space-y-5">
          <label htmlFor="otp">
            <div className="flex gap-3 md:gap-5 justify-between md:px-5 px-2">
              <div className="space-y-2 flex-1">
                <div className="text-2xl font-semibold text-center">1</div>
                <div className="h-1 w-full bg-[#4F86C4]" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="text-2xl font-semibold text-center">1</div>
                <div className="h-1 w-full bg-[#4F86C4]" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="text-2xl font-semibold text-center">1</div>
                <div className="h-1 w-full bg-[#4F86C4]" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="text-2xl font-semibold text-center">1</div>
                <div className="h-1 w-full bg-[#4F86C4]" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="text-2xl font-semibold text-center">1</div>
                <div className="h-1 w-full bg-[#4F86C4]" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="text-2xl font-semibold text-center">1</div>
                <div className="h-1 w-full bg-[#4F86C4]" />
              </div>
            </div>
            <input
              id="otp"
              type="hidden"
              max={6}
              maxLength={6}
              onChange={(e) => setOtp(e.target.value)}
              className="focus:border-blue-400 border focus:outline-none w-full px-5 py-2.5"
              placeholder="Password"
            />
          </label>
          <div className="flex justify-between items-center px-5">
            <button className="text-sm text-blue-500">Resend Code</button>
            <button className="text-sm text-blue-500">Change Email</button>
          </div>
          <div className="flex justify-between items-center pt-10">
            <Link
              href={"/register/chooseAccounType"}
              className="text-sm text-blue-500"
            >
              Back
            </Link>
            <Link
              href={"/register/pro"}
              className="px-5 py-3 rounded bg-[#196EAF] text-white font-semibold"
            >
              Verify
            </Link>
          </div>
        </div>
        <div className="text-[14px] leading-[21px] text-center">
          <span>
            Already have an account?
            <Link href={"/login"} className="text-blue-500">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
