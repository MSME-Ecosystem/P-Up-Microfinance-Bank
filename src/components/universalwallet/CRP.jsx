import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CRP = () => {
  return (
    <div className="">
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-10 mt-20">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Cross-platform payment acceptance
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
          Send or receive payments via QR code, payment link, POS terminal, or Bluetooth  irrespective of which app the buyer uses.
          </p>
          <Button asChild className="bg-[#0F226B] text-white h-11 font-bold w-full">
            <Link href="#">Accept anywhere</Link>
          </Button>{" "}
        </div>
        <div>
          <Image src="/ecrr.png" alt="purpose" height={442} width={495} />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center w-[487px]">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-5 text-[#0171DF] text-[32px] font-[700]">
            Cross-platform payment acceptance
          </h2>
          <p className="text-[16px] text-[#1B1B1B]  lg:mb-8 mb-4 leading-7">
          Send or receive payments via QR code, payment link, POS terminal, or Bluetooth  irrespective of which app the buyer uses.
          </p>
          <Button asChild className="bg-[#0F226B] text-white h-11 font-bold px-20">
            <Link href="#">Accept anywhere</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CRP;
