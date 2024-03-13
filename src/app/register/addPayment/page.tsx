"use client";

import Button from "@/components/button/Button";
import CardTransferMethod from "@/components/card/CardTransferMethod";
import ModalCreditCard from "@/components/modal/ModalCreditCard";
import ModalPaypal from "@/components/modal/ModalPaypal";
import ModalSavePayments from "@/components/modal/ModalSavePayments";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPayment() {
  const [isHiddenPaypal, setIsHiddenPaypal] = useState<boolean>(true);
  const [isHiddenCreditCard, setIsHiddenCreditCard] = useState<boolean>(true);
  const [isHiddenSavePayments, setIsHiddenSavePayments] =
    useState<boolean>(true);
  const router = useRouter();
  return (
    <section className="container mx-auto px-3 lg:px-64 min-h-[80vh] flex flex-col justify-center items-center gap-5 mt-10">
      {/* Enter your payments method */}
      <div className="border rounded flex-col w-full">
        <div className="py-2 border-b text-xs bg-[#FAFAFA] px-6">
          <h1 className="text-base font-semibold">Add a Withdrawal Method</h1>
        </div>
        <div className="space-y-3 p-2 md:p-5">
          <CardTransferMethod
            imageUrl="/images/method-paypal_kfczli.png"
            title="PayPal Marketplace"
            onClick={() => setIsHiddenPaypal(!isHiddenPaypal)}
          />
          <CardTransferMethod
            imageUrl="/images/method-creditcard_ofn3ep.png"
            title="Credit Card"
            onClick={() => setIsHiddenCreditCard(!isHiddenCreditCard)}
          />
        </div>
      </div>
      <ModalPaypal
        isHidden={isHiddenPaypal}
        onClick={() => setIsHiddenPaypal(!isHiddenPaypal)}
      />
      <ModalCreditCard
        isHidden={isHiddenCreditCard}
        onClick={() => setIsHiddenCreditCard(!isHiddenCreditCard)}
      />
      <ModalSavePayments
        isHidden={isHiddenSavePayments}
        onClick={() => setIsHiddenSavePayments(!isHiddenSavePayments)}
      />
      {/* end Enter your payments method */}
      <div className="w-full mb-10 mt-5 ">
        <Button onClick={() => setIsHiddenSavePayments(!isHiddenSavePayments)}>
          Save
        </Button>
      </div>
    </section>
  );
}
