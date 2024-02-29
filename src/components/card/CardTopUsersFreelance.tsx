import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

export default function CardTopUsersFreelance() {
  return (
    <div className="flex flex-col items-center justify-center shadow-2xl rounded-md space-y-3 px-5 pb-10 hover:scale-105 duration-200">
      <Image
        src={
          "https://res.cloudinary.com/gurucom/image/upload/w_90,h_90,f_auto,dpr_2/pimg/0/314/314056/Scopic%20logo%20with%20extra%20fields_637402955178368445_guruImgExtraLarge048c3f15-027f-44fc-8b92-6bf8ee3da2d2.jpg"
        }
        alt="example"
        width={90}
        height={90}
        loading="lazy"
        className="border rounded-md -mt-8"
      />
      <div className="text-center space-y-2">
        <h2 className="text-[#2777c6] font-[500] text-[18px]">Scopic</h2>
        <p className="text-[16px] leading-[24px]">MEMBER</p>
        <p className="text-[#707070] flex text-wrap items-center">
          <FaLocationDot />
          Rutland, Massachusetts, Unitad States
        </p>
        <div className="flex justify-center items-center gap-2">
          <div className="text-[16px] font-[500] leading-[24px] text-[#333] flex items-center gap-1">
            <BiSolidDollarCircle />
            <div>
              <span className="font-semibold">763,025/</span> <span>yr</span>
            </div>
          </div>
          <div>·</div>
          <div className="w-fit flex items-center text-[#2777c6] gap-1 border border-[#2777c6] px-2 py-0.5 rounded-md text-sm">
            <BiSolidLike />
            <span>100%</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center pt-5">
          <span className="text-[13px] leading-5 px-2 py-1 border rounded-md">
            SSL
          </span>
          <span className="text-[13px] leading-5 px-2 py-1 border rounded-md">
            SSL
          </span>
          <span className="text-[13px] leading-5 px-2 py-1 border rounded-md">
            SSL
          </span>
          <span className="text-[13px] leading-5 px-2 py-1 border rounded-md">
            SSL
          </span>
          <span className="text-[13px] leading-5 px-2 py-1 border rounded-md">
            SSL
          </span>
          <span className="text-[13px] leading-5 px-2 py-1 border rounded-md">
            SSL
          </span>
        </div>
        <div className="flex justify-center pt-5">
          <button className="px-5 py-2.5 rounded  text-[#2777C6] border hover:text-white hover:bg-[#2777C6] border-[#2777C6] font-semibold w-fit hover:scale-105 duration-200 ">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
}
