"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
interface ModalPaypalType {
  isHidden: boolean;
  onClick: () => void;
}

export default function ModalCreditCard({
  isHidden,
  onClick,
}: ModalPaypalType) {
  const [selectCardType, setSelectCardType] = useState<string | null>(null);
  return (
    !isHidden && (
      <div className="absolute top-0 left-0 right-0 min-h-screen min-w-full bg-black bg-opacity-35 flex justify-center items-center z-10 px-2">
        <div className="bg-white p-2 rounded-md md:w-1/2 lg:w-1/3">
          <div className="flex justify-between border-b py-2 items-center">
            <h1 className="text-xl font-semibold">Add Credit Card</h1>
            <button className="text-2xl" onClick={onClick}>
              <IoCloseOutline />
            </button>
          </div>
          <div className="py-2 px-2 max-h-96 overflow-auto">
            <h2 className="text-base font-semibold">Credit Card Info</h2>
            <div className="flex justify-center">
              <Image
                src={
                  selectCardType == "visa"
                    ? "/images/png-transparent-visa-logo-mastercard-credit-card-payment-visa-blue-company-text.png"
                    : selectCardType == "masterCard"
                    ? "/svg/MasterCard_Logo.svg.png"
                    : "/images/free-credit-card-icon-2056-thumb.png"
                }
                alt="credit"
                width={80}
                height={0}
              />
            </div>
            <div className="pt-2 space-y-2">
              <div>
                <label htmlFor="" className="space-y-1">
                  <div className="text-xs">Card Number</div>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  />
                </label>
              </div>
              <select
                name=""
                id=""
                className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                onChange={(e: any) => setSelectCardType(e.target.value)}
              >
                <option value="">Select, your card type</option>
                <option value="visa">Visa</option>
                <option value="masterCard">Master Card</option>
              </select>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs pb-1">Expiration Date</div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      <select
                        name=""
                        id=""
                        className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                      >
                        <option value="">MM</option>
                        <option value="">1 - Jan</option>
                        <option value="">2 - Feb</option>
                        <option value="">3 - Mar</option>
                        <option value="">4 - Apr</option>
                        <option value="">5 - May</option>
                        <option value="">6 - Jun</option>
                        <option value="">7 - Jul</option>
                        <option value="">8 - Aug</option>
                        <option value="">9 - Sep</option>
                        <option value="">10 - Oct</option>
                        <option value="">11 - Nov</option>
                        <option value="">12 - Dec</option>
                      </select>
                      <select
                        name=""
                        id=""
                        className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                      >
                        <option value="">YYYY</option>
                        <option value="">2024</option>
                        <option value="">2025</option>
                        <option value="">2026</option>
                        <option value="">2027</option>
                        <option value="">2028</option>
                        <option value="">2029</option>
                        <option value="">2030</option>
                        <option value="">2031</option>
                        <option value="">2032</option>
                        <option value="">2033</option>
                        <option value="">2034</option>
                        <option value="">2035</option>
                        <option value="">2036</option>
                        <option value="">2037</option>
                        <option value="">2038</option>
                        <option value="">2039</option>
                      </select>
                    </div>
                  </div>
                </div>
                <label>
                  <div className="text-xs pb-1">Security Code</div>
                  <input
                    type="password"
                    placeholder="Card Number"
                    className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="" className="space-y-1">
                  <div className="text-xs">Name on Card</div>
                  <input
                    type="text"
                    className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  />
                </label>
              </div>
            </div>
            <h2 className="text-base font-semibold mt-3">Billing Info</h2>
            <div className="pt-2 space-y-2">
              <div className="space-y-1">
                <div className="text-xs">Country</div>
                <select
                  name=""
                  id=""
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                >
                  <option value="">Select Country</option>
                  <option value="">Malaysia</option>
                  <option value="">USA</option>
                  <option value="">Japan</option>
                </select>
              </div>
              <div className="space-y-1">
                <div className="text-xs">Street Address</div>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                />
              </div>
              <div className="space-y-1">
                <div className="text-xs">City</div>
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                />
              </div>
              <div className="flex justify-between">
                <div className="space-y-1">
                  <div className="text-xs">State</div>
                  <select
                    name=""
                    id=""
                    className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  >
                    <option value="">Select State</option>
                    <option value="">Malaysia</option>
                    <option value="">USA</option>
                    <option value="">Japan</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <div className="text-xs">Postal Code</div>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs">Currency</div>
                <select
                  name=""
                  id=""
                  className="border rounded-md focus:outline-none text-sm px-2 w-full py-1.5 focus:border-[#4FBFA3]"
                >
                  <option value="">Select Currency</option>
                  <option value="">Malaysia</option>
                  <option value="">USA</option>
                  <option value="">Japan</option>
                </select>
              </div>
            </div>
            <div className="text-xs pt-2">
              For verification purposes we will charge your card a random amount
              of up to $10.00. You will need to enter the exact amount on
              Guru.com to verify your card.
            </div>
            <div className="pt-3">
              <button className="px-3 py-1.5 rounded-3xl text-sm font-semibold border border-[#4FBFA3] bg-[#4FBFA3] text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
