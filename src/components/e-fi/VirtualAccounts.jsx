import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const VirtualAccounts = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-20 mt-14">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Virtual Accounts
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Virtual Accounts at Scale
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4 w-[464px]">
            Issue real bank account numbers for your users, at scale and on
            demand.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 mt-5 lg:mt-10 w-full font-bold px-22 "
          >
            <Link href="#">Issue Accounts</Link>
          </Button>
        </div>
        <div>
          <Image
            src="/ia.png"
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

export default VirtualAccounts;
