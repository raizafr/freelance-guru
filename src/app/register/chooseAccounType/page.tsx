"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ChooseAccounType() {
  const [password, setPassword] = useState<string>("");
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
        <div className="flex items-center gap-2">
          <div className="flex-1 border-b" />
          <div className="text-sm">Set password</div>
          <div className="flex-1 border-b" />
        </div>
        <div className="space-y-5">
          <input
            type="password"
            className="focus:border-[#4FBFA3] border focus:outline-none w-full px-5 py-2.5"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="space-y-2">
            <label htmlFor="term" className="flex gap-2 items-center">
              <input type="checkbox" className="scale-110" id="term" />
              <span className="text-xs">
                I agree to the{" "}
                <Link href={"#"} className="text-[#4FBFA3]">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href={"#"} className="text-[#4FBFA3]">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href={"#"} className="text-[#4FBFA3]">
                  IP Policy.
                </Link>
              </span>
            </label>
            <label htmlFor="send" className="flex gap-2 items-center">
              <input type="checkbox" className="scale-110" id="send" />
              <span className="text-xs">
                Send me useful emails to help me get the most out of Guru.com
              </span>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <Link href={"/register"} className="text-sm text-[#4FBFA3]">
              Back
            </Link>
            <button
              disabled={!password ? true : false}
              onClick={() => router.push("/register/pro")}
              className={`${
                !password 
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
