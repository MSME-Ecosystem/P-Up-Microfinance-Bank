import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Purpose = () => {
  return (
    <div className="lg:py-5 py-1">
      {/* Header Section (unchanged) */}
      <div>
        <h1 className="lg:text-[40px] text-[30px] font-bold leading-tight lg:w-[644px] w-auto">
        Purpose built modules for every layer of your financial stack        </h1>
        <p className="text-[#1B1B1B] lg:w-[555px] w-auto leading-normal lg:pt-12 pt-4 pb-6">
        Designed to adapt to your business, each module, from reconciliation and offline payments to smart checkout and agent tools, works independently or as part of a fully unified system.
        </p>
      </div>

      {/* First Row - Image Left, Card Right */}
      <div className="lg:flex lg:flex-row flex-col gap-8 items-stretch justify-between lg:pb-30 pb-15">
        <div className="lg:w-[60%] flex items-center">
          <Image
            src={"/purpose.svg"}
            alt="Purpose"
            width={700}
            height={680}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="bg-[#0171DF]/10 rounded-md lg:w-[458px] w-auto lg:py-0 py-10 flex flex-col justify-center lg:px-8 px-6 lg:my-0 my-6">
          <p className="mb-4 text-start">ReconcileX</p>
          <h1 className="lg:text-[24px] text-[20px] font-bold text-[#0171DF] lg:w-[342px] w-auto leading-tight">
          Reconciliation that handles itself          </h1>
          <p className="text-[#1B1B1B] lg:w-[342px] w-auto my-5">
          No more spreadsheets or second-guessing. ReconcileX automatically matches payments to the right invoices, orders, or accounts across bank transfers, wallets, and offline channels
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 px-6 lg:w-fit w-full font-bold"
          >
            <Link href="/reconcile-x">View Reconcilex</Link>
          </Button>
        </div>
      </div>

      {/* Second Row - Card Left, Image Right */}
      <div className="lg:flex lg:flex-row flex-col gap-8 items-stretch justify-between lg:pb-30 pb-15">
        <div className="bg-[#0171DF]/10 rounded-md lg:w-[458px] w-auto lg:py-0 py-10 flex flex-col justify-center lg:px-8 px-6 lg:my-0 my-6">
          <p className="mb-4 text-start">Embedded finance</p>
          <h1 className="lg:text-[24px] text-[20px] font-bold text-[#0171DF] lg:w-[354px] w-auto leading-tight">
          Smart payouts, built into your flow          </h1>
          <p className="text-[#1B1B1B] lg:w-[383px] w-auto my-5">
          Move money exactly how your business needs with programmable, rules-based payouts that eliminate manual work and power new financial experiences.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 px-6 lg:w-fit w-full font-bold"
          >
            <Link href="/embedded-finance">Explore BankBox</Link>
          </Button>
        </div>
        <div className="lg:w-[60%] flex items-center">
          <Image
            src={"/elegant-man.svg"}
            alt="Purpose"
            width={729}
            height={700}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Purpose;
