import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const WalletLogic = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-16">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Automated payment splitting
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-8 mb-4">
            Funds are instantly distributed to each seller’s wallet or bank
            account—no manual work needed.{""}
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-24 w-full mb-6"
          >
            <Link href="#">Split payments</Link>
          </Button>
          {""}
        </div>
        <div>
          <Image
            src="/ap.png"
            alt="Purpose"
            height={442}
            width={495}
            className="rounded-xl"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
            Automated payment splitting
          </h2>
          <p className="text-[16px] text-[#1B1B1B] w-[462px] lg:mb-8 mb-4 leading-7">
            Funds are instantly distributed to each seller’s wallet or bank
            account—no manual work needed.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-24"
          >
            <Link href="#">Split Payments</Link>
          </Button>{""}
        </div>
      </div>
    </div>
  );
};

export default WalletLogic;
