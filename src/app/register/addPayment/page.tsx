"use client";

import Button from "@/components/button/Button";
import CardTransferMethod from "@/components/card/CardTransferMethod";
import ModalCreditCard from "@/components/modal/ModalCreditCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPayment() {
  const [isHiddenCreditCard, setIsHiddenCreditCard] = useState<boolean>(true);
  const [isHiddenSavePayments, setIsHiddenSavePayments] =
    useState<boolean>(true);
  return (
    <section className="container mx-auto px-3 lg:px-64 min-h-[80vh] flex flex-col  items-center gap-5 py-10">
      {/* Enter your payments method */}
      <div className="border rounded flex-col w-full">
        <div className="py-2 border-b text-xs bg-[#FAFAFA] px-6">
          <h1 className="text-xl font-[400]">Add a Withdrawal Method</h1>
        </div>
        <div className="space-y-3 p-2 md:p-5">
          <CardTransferMethod
            imageUrl="/images/method-paypal_kfczli.png"
            title="PayPal Marketplace"
            onClick={() => setIsHiddenCreditCard(!isHiddenCreditCard)}
          />
        </div>
      </div>
      <ModalCreditCard
        isHidden={isHiddenCreditCard}
        onClick={() => setIsHiddenCreditCard(!isHiddenCreditCard)}
      />
      {/* end Enter your payments method */}
    </section>
  );
}
