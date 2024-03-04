import Image from "next/image";
import Link from "next/link";
import { BiSolidDollarCircle, BiSolidLike } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { IoFlagSharp, IoShareSocial } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";

export default function page() {
  return (
    <section className="container mx-auto px-3 lg:px-12 py-5 lg:my-14 flex flex-col lg:flex-row gap-5">
      {/* profile */}
      <div className="flex flex-col items-center justify-center border space-y-3 px-5 pb-5 flex-none lg:w-[27%] rounded-md h-fit">
        <div className="w-full flex flex-row lg:flex-col items-center justify-start gap-3 pt-3 lg:pt-0 ">
          <Image
            src={"https://placehold.co/400x400/png"}
            alt="example"
            width={100}
            height={100}
            loading="lazy"
            className="border rounded-md lg:-mt-12"
          />
          <div className="text-center space-y-1">
            <h1 className="font-[500] text-xl text-start lg:text-center ">
              Nishit Nisudan
            </h1>
            <div className="flex justify-center">
              <div className="text-[#707070] flex text-wrap items-start text-base">
                <div className="mt-1">
                  <FaLocationDot className="" />
                </div>
                Southampton, England, United Kingdom
              </div>
            </div>
          </div>
        </div>
        <div className="border-b w-full" />
        <div className="text-sm w-full space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">All-Time Earnings</h2>
            <span className="font-semibold justify-between">$0</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">Transactions Completed</h2>
            <span className="font-semibold justify-between">0</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">Employers</h2>
            <span className="font-semibold justify-between">0</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">Largest Employer</h2>
            <span className="font-semibold justify-between">$0</span>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-gray-500 ">Member Since</h2>
            <span className="font-semibold justify-between">Nov 2019</span>
          </div>
        </div>
        <div className="border-b w-full" />
        <div className="text-wrap text-sm text-gray-500">
          We are a management consultancy offering specialist advisory services
          across the breadth of the supply chain – from the definition of
          strategy, to detailed design and implementation support.
        </div>
        <div className="border-b w-full" />
        <div className="text-wrap text-sm text-gray-500 flex justify-evenly w-full pt-3">
          <div className="flex items-center gap-1">
            <IoShareSocial className="text-xl" />
            <div className="text-blue-500">Share</div>
          </div>
          <div className="border-r" />
          <div className="flex items-center gap-1">
            <IoFlagSharp className="text-xl" />
            <div className="text-blue-500">Report</div>
          </div>
        </div>
      </div>
      {/* end profile */}

      {/* overview */}
      <div className="flex-1 rounded-md lg:-mt-12 w-full">
        <div className="flex">
          <div className="border-x w-fit px-10 border-t rounded-t-md flex-1 text-center py-2.5 font-semibold">
            Overview
          </div>
          <div className="flex-1 border-b" />
          <div className="flex-1 border-b" />
        </div>
        <div className="border-x border-b px-5 pt-2">
          <h2 className="text-gray-500 font-semibold">Business & Finance</h2>
          <h1 className="font-[500] text-xl pt-2">
            Logistics & Warehouse Design /Automation
          </h1>
          <div className="text-sm text-gray-600 font-semibold pt-1">
            $170/hr · Starting at $5K
          </div>
          <div className="text-base text-gray-500 pt-5">
            Key skills - Logistics / Supply Chain Strategy, Network Strategy /
            Design / Modelling, Transport Strategy / Modelling, Warehouse Design
            / Automation, Warehouse Optimisation, WMS / WCS / TMS review,
            selection and implementation, MHE / 3PL review, selection,
            tendering; Cost to serve modelling I have a background in Supply
            Chain and Logistics Consulting (Total Logistics, Accenture), and
            ERP/WMS/WCS software, with over 10 years experience working for
            various clients across UK, Europe and India. I have worked primarily
            in Retail, FMCG, Electronics, Automotive, Manufacturing, Flooring
            and Life Sciences. I am now part of BoxLogic which is a specialised
            management consulting firm based in the UK, and working with clients
            to help them improve / optimise their Logistics and Supply Chain
            practices. The core areas of work are Logistics Strategy, Logistics
            Design and Logistics Technology. We provide end to end Supply Chain
            Consulting services, and specialise in supply chain strategy,
            warehouse design, warehouse automation, warehouse optimisation,
            network strategy / design, omni channel strategy, tender process
            management (MHE / 3PL / WMS), WMS/WCS/TMS systems selection and
            implementation. We have also worked with clients to help them
            deliver large scale implementations / transformations in the past.
          </div>
          <div className="border-b pt-5" />
          <div className="pt-5">
            <h2 className="font-semibold">Skills & Expertise</h2>
            <div className="text-sm flex flex-wrap gap-2 pt-3">
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
              <div className="w-fit px-2 py-1 border rounded">Consultant</div>
            </div>
          </div>
          <div className="border-b pt-5" />
          <div className="pt-5">
            <h2 className="font-semibold">0 Reviews</h2>
            <div className="pt-3">
              <div className="rounded-full border w-fit p-6 text-gray-400 ">
                <VscFeedback className="text-6xl" />
              </div>
              <div className="pt-2 text-gray-500">
                This Freelancer has not received any feedback
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border rounded-md px-5 py-5">
          <h2 className="text-gray-500 font-semibold">
            Browse Similar Freelance Experts
          </h2>
          <div className="footer mt-3 text-sm text-gray-500">
            <div>
              <Link href={"#"}>Designers</Link>
              <Link href={"#"}>Logistics Consultants</Link>
              <Link href={"#"}>Project Managers</Link>
            </div>
            <div>
              <Link href={"#"}>Experts</Link>
              <Link href={"#"}>Strategy Development Consultants</Link>
              <Link href={"#"}>Outsourcing Consultants</Link>
            </div>
            <div>
              <Link href={"#"}>Management Experts</Link>
              <Link href={"#"}>Supply Chain Management Experts</Link>
            </div>
          </div>
        </div>
      </div>
      {/* end overview */}
    </section>
  );
}
