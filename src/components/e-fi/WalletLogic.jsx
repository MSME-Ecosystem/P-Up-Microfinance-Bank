import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const WalletLogic = () => {
  return (
    <div>
      {/* <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 lg:px-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/wl.png"
            alt="Purpose"
            width={629}
            height={591}
            className="rounded-md max-w-full h-auto"
          />
        </div>

        <div className="flex flex-col items-start  lg:w-1/2 w-full ">
          <h1 className="py-5 text-[16px] leading-tight">Wallet system</h1>
          <h1 className="text-[32px] text-[#0171DF] font-bold leading-tight">
            Wallet Logic & Internal Transfers
          </h1>
          <p className="text-[#1B1B1B] text-[16px] mt-4">
            Create programmable internal wallets with transfer rules, balance
            logic, and sub-wallets.
          </p>
        </div>
      </div> */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-16">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Wallet system
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Wallet Logic & Internal Transfers
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Create programmable internal wallets with transfer rules, balance
            logic, and sub-wallets.
          </p>
          
        </div>
        <div>
          <Image
            src="/wl.png"
            alt="Purpose"
            height={442}
            width={495}
            className="rounded-xl"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">            Wallet system
          </p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
          Wallet Logic & Internal Transfers
          </h2>
          <p className="text-[16px] text-[#1B1B1B] w-[462px]">
          Create programmable internal wallets with transfer rules, balance
          logic, and sub-wallets.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white text-sm h-10 px-6 mt-6"
          >
            <Link href="/login">Build wallet</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletLogic;
