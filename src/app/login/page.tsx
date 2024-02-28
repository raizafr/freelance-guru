"use client";

import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="container mx-auto flex md:shadow-xl my-5">
      <div className="bg-[#4F86C4] flex-1 text-center text-white pt-8 lg:px-20 px-5 hidden md:block">
        <h1 className="text-[32px] leading-[46px]">Grow with Guru</h1>
        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full flex-col">
            <Image
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              width={60}
              height={0}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
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
            <Image
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              width={60}
              height={0}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
            <div>
              <h2 className="font-semibold text-lg">Flexible Platform</h2>
              <h3 className="font-semibold text-base">
                Choose from four Payment terms
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <Image
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              width={60}
              height={0}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
            <div>
              <h2 className="font-semibold text-lg">Payment Protection</h2>
              <h3 className="font-semibold text-base">
                Secure your transactions with SafePay
              </h3>
            </div>
          </div>
          <div className="carousel-item w-full flex-col">
            <Image
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              width={60}
              height={0}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
            <div>
              <h2 className="font-semibold text-lg">Lowest Transaction Fees</h2>
              <h3 className="font-semibold text-base">
                Get maximum value at minimum cost
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-8 px-10 md:px-5 lg:px-20 space-y-5 pb-28">
        <h1 className="text-[32px] leading-[46px] text-center text-blue-500">
          Log In
        </h1>
        <div className="border-b" />
        <div className="flex gap-10 justify-center">
          <Image
            src={"/svg/apple.svg"}
            alt="apple"
            width={50}
            height={50}
            loading="lazy"
          />
          <Image
            src={"/svg/facebook.svg"}
            alt="facebook"
            width={50}
            height={50}
            loading="lazy"
          />
          <Image
            src={"/svg/linkedin.svg"}
            alt="linkedin"
            width={50}
            height={50}
            loading="lazy"
          />
          <Image
            src={"/svg/google.svg"}
            alt="google"
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
        <div className="flex items-center gap-5">
          <div className="border-b flex-1" />
          <div>Or</div>
          <div className="border-b flex-1" />
        </div>
        <form className="space-y-5">
          <input
            type="text"
            className="border-blue-400 border focus:outline-none w-full px-5 py-2.5"
            placeholder="Email or Username"
          />
          <input
            type="password"
            className="border-blue-400 border focus:outline-none w-full px-5 py-2.5"
            placeholder="Password"
          />
          <div className="text-[14px] leading-[21px] flex justify-between">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="scale-125" />
              <span className="cursor-pointer">Remember me</span>
            </label>
            <Link href={"#"} className="text-blue-500">
              Forgot Password
            </Link>
          </div>
          <div className="flex justify-end">
            <button className="px-5 py-3 rounded bg-[#196EAF] text-white font-semibold">
              Login
            </button>
          </div>
        </form>
        <div className="text-[14px] leading-[21px] text-center">
          <span>
            Don{"'"}t have an account?{" "}
            <Link href={"/register"} className="text-blue-500">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
