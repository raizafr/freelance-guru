import CardTransferMethod from "@/components/card/CardTransferMethod";
import Image from "next/image";

export default function TransferMethod() {
  return (
    <section className="container mx-auto lg:px-12 px-3 flex flex-col md:flex-row gap-4 pb-10">
      <div className="flex-1">
        <h1 className="text-xl font-semibold py-4">Add a transfer method</h1>
        <div className="space-y-4">
          <CardTransferMethod
            imageUrl="/images/method-echeck_vvmwhd.png"
            title="Bank Account (US Only)"
          />
          <CardTransferMethod
            imageUrl="/images/method-paypal_kfczli.png"
            title="PayPal Account"
          />
          <CardTransferMethod
            imageUrl="/images/method-creditcard_ofn3ep.png"
            title="Credit Card"
          />
          <CardTransferMethod
            imageUrl="/images/method-wiretransfer_z0uafn.avif"
            title="Wire Transfer"
          />
        </div>
        <p className="text-[13px] pt-5">
          To help keep our community safe, we may require users to verify their
          ID, in addition to their payment method. Avoid any potential delays,
          <span className="text-blue-500"> upload your ID information</span>
        </p>
      </div>
      <div className="flex-none md:w-1/3 space-y-3 md:border-l md:pl-4 md:mt-5 pt-5 md:pt-0 border-t md:border-t-0">
        <button className="px-3 py-2 rounded bg-[#196EAF] text-white font-semibold text-sm focus:outline-none">
          Add Transfer Method
        </button>
        <h3 className="font-semibold text-[13px]">
          Don{"'"}t have a US Bank Account?
        </h3>
        <p className="text-[13px]">
          Allow your clients to pay you in USD by getting your own virtual USD
          bank account
        </p>
        <p className="text-[13px]">Explore services below to get started</p>
        <div className="space-y-2">
          <Image
            src={"/images/logo-payoneer_rxi41f.png"}
            alt="payoneer"
            width={80}
            height={0}
            loading="lazy"
          />
          <Image
            src={"/images/logo-wise_wujeyx.png"}
            alt="logo-wise_wujeyx.png"
            width={80}
            height={0}
            loading="lazy"
          />
        </div>
        <div className="border-b h-1 w-full" />
        <div>
          <h3 className="font-semibold text-[13px]">
            Methods to Withdraw Funds
          </h3>
          <p className="text-[13px]">Bank account</p>
          <p className="text-[13px]">PayPal</p>
          <p className="text-[13px]">Wire Transfer (USD)</p>
        </div>
        <div>
          <h3 className="font-semibold text-[13px]">Methods to Pay</h3>
          <p className="text-[13px]">Credit card</p>
          <p className="text-[13px]">PayPal</p>
        </div>
      </div>
    </section>
  );
}
