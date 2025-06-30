import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Generator = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-40 mt-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Smart QR Generator{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center  lg:mb-8 mb-4 lg:w-[400px]">
            Create branded, metadata-rich QR codes for any product, service, or
            payment flow
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11  px-20 mb-6 font-bold"
          >
            <Link href="#">Generate QR</Link>
          </Button>{" "}
        </div>
        <div>
          <Image src="/pos.svg" alt="POS" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default Generator;
