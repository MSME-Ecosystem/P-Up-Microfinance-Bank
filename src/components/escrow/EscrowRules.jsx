import Image from "next/image";
import React from "react";

const EscrowRules = () => {
  return (
    <div className="">
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-20 mt-16">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Escrow Rules
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Hold or release funds based on role, approval, or reconciliation
            status.
          </p>
        </div>
        <div>
          <Image
            src="/er.png"
            alt="POS"
            height={442}
            width={495}
            className="rounded-xl"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
            Escrow Rules
          </h2>
          <p className="text-[16px] text-[#1B1B1B]">
            Hold or release funds based on role, approval, or reconciliation
            status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EscrowRules;
