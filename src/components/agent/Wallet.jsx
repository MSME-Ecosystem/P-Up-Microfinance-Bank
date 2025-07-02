import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Wallet = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px]  lg:mt-0 mt-16 lg:mb-10 mb-20">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Wallet & bank settlements by merchant{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Choose where payments land. Whether funds go to agent wallets or
            directly to merchant accounts, settlements are flexible and built
            around your flow.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-22 w-full mb-6"
          >
            <Link href="#">Set Up Payouts</Link>
          </Button>{" "}
        </div>
        <div>
          <Image
            src="/wal.png"
            alt="POS"
            height={442}
            width={495}
            className="rounded-md"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
            Wallet & bank settlements by merchant{" "}
          </h2>
          <p className="text-[16px] text-[#1B1B1B] w-[462px] mb-8 leading-7">
            Choose where payments land. Whether funds go to agent wallets or
            directly to merchant accounts, settlements are flexible and built
            around your flow.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-22"
          >
            <Link href="#">Set Up Payouts</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
