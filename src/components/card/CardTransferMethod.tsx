import Image from "next/image";
import React from "react";

interface CardTransferMethodType{
  title:string;
  imageUrl:string;
}

export default function CardTransferMethod({title,imageUrl}:CardTransferMethodType) {
  return (
    <div className="border p-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={imageUrl}
          alt="method-echeck_vvmwhd.png"
          width={80}
          height={0}
          loading="lazy"
          className="border rounded"
        />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <button className="px-3 py-2 rounded bg-[#196EAF] text-white font-semibold text-sm ">
        Add
      </button>
    </div>
  );
}
