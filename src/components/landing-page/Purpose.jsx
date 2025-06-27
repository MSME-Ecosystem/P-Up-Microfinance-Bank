import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Purpose = () => {
  return (
    <div className="lg:py-5 py-1">
      <div>
        <h1 className="lg:text-[40px] text-[30px] font-bold leading-tight lg:w-[644px] w-auto">
          Purpose-Built Modules to Power Every Layer of Your Financial Stack
        </h1>
        <p className="text-[#1B1B1B] lg:w-[462px] w-auto leading-normal lg:pt-12 pt-4 pb-6">
          From reconciliation to offline payments, checkout to agent operations
          — each tool works standalone or as part of a unified infrastructure.
        </p>
      </div>
      <div className="lg:flex lg:flex-row flex-col gap-40 items-center justify-between lg:pb-30 pb-15">
        <div className="lg:w-[65%]">
          <Image
            src={"/purpose.svg"}
            alt="Purpose"
            width={700}
            height={680}
            className=""
          />
        </div>
        <div className="bg-[#0171DF]/10 rounded-md lg:w-[35%] lg:mt-0 mt-5 w-auto lg:h-[530px] lg:py-0 py-10 h-auto flex flex-col justify-center items-start lg:px-16 px-6 lg:mb-0 mb-6">
          <p className="mb-4 text-start lg:mt-0 mt-5 "> ReconcileX </p>
          <h1 className="lg:text-[24px] text-[20px] font-bold text-[#0171DF] lg:w-[342px] w-auto leading-tight">
            Automated Reconciliation. Zero Guesswork{" "}
          </h1>
          <p className="text-[#1B1B1B] lg:w-[324px] w-auto my-5">
            Automatically match incoming payments to the right invoices, orders,
            or accounts—across bank transfers, wallets, and offline channels. No
            spreadsheets. No manual tracking.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 px-6 lg:w-auto w-full font-bold"
          >
            <Link href="/reconcile-x">View Reconcilex</Link>
          </Button>
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col gap-40 items-center justify-between lg:pb-30 pb-15">
        <div className="bg-[#0171DF]/10 rounded-md lg:w-[35%] lg:mt-0 mt-5 w-auto lg:h-[530px] lg:py-0 py-10 h-auto flex flex-col justify-center items-start lg:px-16 px-6 lg:mb-0 mb-6">
          <p className="mb-4 text-start lg:mt-0 mt-5 "> Embedded finance </p>
          <h1 className="lg:text-[24px] text-[20px] font-bold text-[#0171DF] lg:w-[342px] w-auto leading-tight">
            Programmable Payouts. No Manual Transfers{" "}
          </h1>
          <p className="text-[#1B1B1B] lg:w-[324px] w-auto my-5">
            Flexible checkout built for — supporting logic-based routing,
            embedded flows, fees, commissions, and more.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 px-6 lg:w-auto w-full font-bold"
          >
            <Link href="/embedded-finance">Explore BankBox</Link>
          </Button>
        </div>
        <div className="lg:w-[65%]">
          <Image
            src={"/elegant-man.svg"}
            alt="Purpose"
            width={729}
            height={700}
            className=""
          />
        </div>
      </div>

      {/* <div className="bg-cover bg-center bg-[url('/checkout-bg.svg')] text-center w-full h-[492px] flex flex-col items-center justify-center rounded-md">
        <p className="mb-8">Smart checkout</p>
        <h1 className="lg:text-[32px] text-[25px] font-bold text-[#0171DF] mx-auto lg:w-[413px] w-auto leading-tight">
          Checkout That Thinks Like Your Business
        </h1>
        <p className="lg:w-[462px] w-auto mx-auto my-4">Flexible checkout built for  — supporting logic-based routing, embedded flows, fees, commissions, and more.</p>
         <Button asChild className="bg-[#0F226B] text-white h-10 mt-5">
            <Link href="/smart-checkout">Try Checkout</Link>
          </Button>
      </div> */}
    </div>
  );
};

export default Purpose;
