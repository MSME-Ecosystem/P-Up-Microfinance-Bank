import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
const Dynamic = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-20 mt-16">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
          Dynamic Checkout Builder          </h2>
          <p className="text-[16px] lg:text-left text-center  lg:mb-8 mb-4 lg:w-[400px]">
          Trigger custom checkout pages with embedded pricing, product info, and agent ID—automatically
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-10 text-[20px] px-26 mb-6 lg:w-auto w-full"
          >
            <Link href="#">Build Checkout</Link>
          </Button>{" "}
        </div>
        <div>
          <Image
            src="/dynamic.svg"
            alt="dynamic"
            height={442}
            width={495}
            className="rounded-xl"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className=" pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
          Dynamic Checkout Builder            </h2>
          <p className="text-[16px] text-[#1B1B1B] lg:mb-6 w-[450px] leading-7">
          Trigger custom checkout pages with embedded pricing, product info, and agent ID—automatically

          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11  px-24 mb-6 font-bold"
          >
            <Link href="#">Build Checkout</Link>
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
