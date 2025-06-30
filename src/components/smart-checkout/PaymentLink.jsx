import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const PaymentLink = () => {
  return (
    <div className="space-y-20">
      <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-[150px]">
        <div className="lg:mb-0 mb-5 lg:hidden flex">
          <Image
            src={"/payment1.svg"}
            width={495}
            height={442}
            alt="Payment 1"
          />
        </div>
        <div className="lg:text-left text-center">
          <p>Smart payment links</p>
          <h1 className="lg:text-[32px] text-[25px] font-bold text-[#0171DF] my-2 lg:my-5">
            Shareable links for any sale.
          </h1>
          <p className="lg:w-[464px] w-auto">
            Create single-use or reusable links for products, carts, or
            invoices—across web, chat, or in-person sales.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 lg:mt-10 w-full font-bold "
          >
            <Link href="#">Get started</Link>
          </Button>
        </div>
        <div className="lg:mt-0 mt-10 lg:flex hidden">
          <Image
            src={"/payment1.svg"}
            width={495}
            height={442}
            alt="Payment 1"
          />
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-[150px]">
        <div>
          <Image
            src={"/payment2.svg"}
            width={495}
            height={442}
            alt="Payment 2"
          />
        </div>
        <div className="lg:text-left text-center">
          <p className="lg:pt-0 pt-4">Multi-Merchant Cart</p>
          <h1 className="lg:text-[32px] text-[25px] lg:w-[487px] w-auto font-bold leading-tight text-[#0171DF] lg:my-5 my-2">
            One cart. Multiple vendors. One payment.
          </h1>
          <p className="lg:w-[464px] w-auto">
            Let buyers shop from multiple merchants in a single checkout. UniTap
            splits and reconciles payments automatically.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 lg:mt-10 w-full font-bold  "
          >
            <Link href="#">Get started</Link>
          </Button>
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-[150px]">
        <div className="lg:hidden flex lg:mt-0 mt-10">
          <Image
            src={"/payment3.svg"}
            width={495}
            height={442}
            alt="Payment 3"
          />
        </div>
        <div className="lg:text-left text-center">
          <p className="lg:pt-0 pt-4">Universal wallet</p>
          <h1 className="lg:text-[32px] text-[25px] font-bold text-[#0171DF] lg:my-5 my-2 leading-tight">
            Accept all payment types—no friction.
          </h1>
          <p className="lg:w-[464px] w-auto">
            Enable cards, transfers, and digital wallets in one unified
            checkout, tailored to buyer preferences.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 lg:mt-10 w-full font-bold "
          >
            <Link href="#">Get started</Link>
          </Button>
        </div>
        <div className="lg:flex hidden">
          <Image
            src={"/payment3.svg"}
            width={495}
            height={442}
            alt="Payment 3"
          />
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-[150px]">
        <div>
          <Image
            src={"/payment4.svg"}
            width={495}
            height={442}
            alt="Payment 4"
          />
        </div>
        <div className="lg:text-left text-center">
          <p className="lg:pt-0 pt-4">Omnichannel Checkout</p>
          <h1 className="lg:text-[32px] text-[25px] lg:w-[487px] w-auto font-bold leading-tight text-[#0171DF] lg:my-5 my-1">
            Web. WhatsApp. PoS. Even offline.
          </h1>
          <p className="lg:w-[464px] w-auto">
            Run a consistent checkout experience across mobile apps, social
            chat, PoS terminals, and offline sync environments.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 lg:mt-10 w-full font-bold  "
          >
            <Link href="#">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentLink;
