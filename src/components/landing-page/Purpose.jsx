import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Purpose = () => {
  return (
    <div className="py-24">
      <div>
        <h1 className="lg:text-[40px] text-[30px] font-bold leading-tight lg:w-[644px] w-auto">
          Purpose-Built Modules to Power Every Layer of Your Financial Stack
        </h1>
        <p className="text-[#1B1B1B] lg:w-[462px] w-auto leading-tight py-7">
          From reconciliation to offline payments, checkout to agent operations
          — each tool works standalone or as part of a unified infrastructure.
        </p>
      </div>
      <div className="lg:flex lg:flex-row flex-col lg:gap-[50px] gap-5 items-center justify-center py-10">
        <div>
          <Image
            src={"/purpose.svg"}
            alt="Purpose"
            width={629}
            height={591}
            className="rounded-md"
          />
        </div>
        <div className="bg-[#859BA81A] rounded-md lg:w-[498px] lg:mt-0 mt-5 w-auto lg:h-[591px] lg:py-0 py-10 h-auto flex flex-col justify-center items-start lg:px-24 px-6">
          <p className="mb-4 text-start lg:mt-0 mt-5"> ReconcileX</p>
          <h1 className="lg:text-[24px] text-[20px] font-bold text-[#0171DF] lg:w-[342px] w-auto leading-tight">
            Automated Reconciliation. Zero Guesswork
          </h1>
          <p className="text-[#1B1B1B] lg:w-[324px] w-auto my-5">
            Plug-and-play suite to match payments, invoices, and ledger entries
            across all channels digital or offline
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-[12px] text-white h-10 mt-5 px-6"
          >
            <Link href="/reconsilex">View ReconcileX</Link>
          </Button>
        </div>
      </div>

      <div className="bg-cover bg-center bg-[url('/checkout-bg.svg')] text-center w-full h-[492px] flex flex-col items-center justify-center rounded-md">
        <p className="mb-8">Smart checkout</p>
        <h1 className="lg:text-[32px] text-[25px] font-bold text-[#0171DF] mx-auto lg:w-[413px] w-auto leading-tight">
          Checkout That Thinks Like Your Business
        </h1>
        <p className="lg:w-[462px] w-auto mx-auto my-4">Flexible checkout built for  — supporting logic-based routing, embedded flows, fees, commissions, and more.</p>
         <Button asChild className="bg-[#0F226B] text-white h-10 mt-5">
            <Link href="/offline-stack">Try Checkout</Link>
          </Button>
      </div>
    </div>
  );
};

export default Purpose;
