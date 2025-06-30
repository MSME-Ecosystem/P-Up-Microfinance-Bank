import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const PaymentAutomation = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-20 lg:mb-40 mb-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center lg:text-left text-center lg:w-[487px] w-auto">
          <p className="text-[16px] lg:pb-4 pb-0">Payout</p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700]">
            Payout Automation
          </h2>
          <p className="text-[16px] lg:mb-0 mb-4">
            Trigger daily, scheduled, or event-based bank transfers using
            pre-set conditions.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 lg:mt-10 w-full font-bold px-24 "
          >
            <Link href="#">Automate payout</Link>
          </Button>
        </div>
        <div>
          <Image
            src="/po.png"
            alt="Purpose"
            height={442}
            width={495}
            className="lg:mt-0 mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentAutomation;
