import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const WalletLogic = () => {
  return (
       <div className="lg:px-5 py-24 ">

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 lg:px-10">


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
          <h1 className="py-5 text-[16px] leading-tight">
            Wallet system
          </h1>
          <h1 className="text-[32px] text-[#0171DF] font-bold leading-tight">
            Wallet Logic & Internal Transfers
          </h1>
          <p className="text-[#1B1B1B] text-[16px] mt-4">
            Create programmable internal wallets with transfer rules, balance logic, and sub-wallets.
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
