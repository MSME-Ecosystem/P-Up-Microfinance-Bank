import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const MDash = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-16">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Multi-Channel Payment Acceptance
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Support collections via QR codes, payment links, PoS, bank
            transfers, and mobile wallets to maximize payment options for users.
          </p>
          <Button asChild className="bg-[#0F226B] text-white h-11 font-bold w-full mb-4">
              <Link href="#">Accept payment</Link>
            </Button>{" "}
        </div>
        <div>
          <Image
            src="/mch.png"
            alt="Purpose"
            height={442}
            width={495}
            className="rounded-md"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
            Multi-Channel Payment Acceptance
          </h2>
          <p className="text-[16px] text-[#1B1B1B] w-[462px] lg:mb-8 mb-4">
            Support collections via QR codes, payment links, PoS, bank
            transfers, and mobile wallets to maximize payment options for users.
          </p>
          <Button asChild className="bg-[#0F226B] text-white h-11 font-bold px-20">
              <Link href="#">Accept payment</Link>
            </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default MDash;
