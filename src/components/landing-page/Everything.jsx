import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Everything = () => {
  return (
    <div className="text-[#000000] py-24">
      <div className="text-center mb-12">
        <h1 className="lg:text-[40px] text-[30px] font-bold lg:w-[718px] w-auto mx-auto leading-tight">
          Everything You Need to Build, Run, and Scale Commerce Systems
        </h1>
        <p className="text-[#1B1B1B] lg:w-[462px] w-auto leading-tight mx-auto py-6">
          From agent payments in the field to intelligent accounting in the
          cloud — explore how our modular suite fits every layer of your
          business.
        </p>
      </div>

      <div className="bg-[#0171DF0D] rounded-md lg:flex lg:flex-row flex-col lg:gap-[70px] gap-5 items-center justify-center lg:px-3 px-2 py-10">
        <div>
          <Image
            src={"/everything1.svg"}
            alt="Everything"
            width={593}
            height={488}
            className="mx-auto"
          />
        </div>
        <div>
          <p className="lg:text-[16px] text-[14px] mb-3">Smart checkout</p>
          <h1 className="lg:text-[32px] text-[25px] font-bold text-[#0171DF] lg:w-[462px] w-auto leading-tight">
            Checkout That Thinks Like Your Business
          </h1>
          <p className="lg:w-[462px] w-auto text-[#1B1B1B] py-5 leading-tight">
            Flexible checkout built for merchants — supporting logic-based
            routing, embedded flows, fees, commissions, and more.
          </p>
          <Button asChild className="bg-[#0F226B] text-white h-10 mt-5">
            <Link href="#">Try Checkout</Link>
          </Button>
        </div>
      </div>
      <div className="bg-[#0171DF0D] rounded-md lg:flex lg:flex-row flex-col lg:gap-[70px] gap-5 items-center justify-center lg:px-3 px-2 py-10 mt-10">
        <div>
          <p className="lg:text-[16px] text-[14px] mb-3">Offline Stack</p>
          <h1 className="lg:text-[32px] text-[25px] font-bold text-[#0171DF] lg:w-[462px] w-auto leading-tight">
            Collect and reconcile payments without internet access.
          </h1>
          <p className="lg:w-[462px] w-auto text-[#1B1B1B] py-5 leading-tight">
            AirVend enables merchants and field agents to collect, sync, and
            reconcile payments—entirely offline. Built for markets where
            internet isn’t guaranteed but business must go on.
          </p>
          <Button asChild className="bg-[#0F226B] text-white h-10 mt-5">
            <Link href="/offline-stack">Offline stack</Link>
          </Button>
        </div>
        <div>
          <Image
            src={"/everything2.svg"}
            alt="Everything"
            width={593}
            height={488}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Everything;
