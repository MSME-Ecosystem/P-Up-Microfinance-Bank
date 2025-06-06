import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const PaymentAutomation = () => {
  return (
    <div className="lg:px-5 pb-24 ">

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        <div className="flex flex-col items-start  lg:w-1/2 w-full lg:px-10">
          <h1 className="py-5 text-[16px] leading-tight">
            Payout
          </h1>
          <h1 className="text-[32px] text-[#0171DF] font-bold leading-tight">
            Payout Automation
          </h1>
          <p className="text-[#1B1B1B] text-[16px] mt-4">
            Trigger daily, scheduled, or event-based bank transfers using pre-set conditions.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white text-sm h-10 px-6 mt-6"
          >
            <Link href="/login">Automate Payout</Link>
          </Button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:pr-8">
          <Image
            src="/po.png"
            alt="Purpose"
            width={629}
            height={591}
            className="rounded-md max-w-full h-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default PaymentAutomation;
