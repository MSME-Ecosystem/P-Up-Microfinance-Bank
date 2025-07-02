import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SmartLink = () => {
  return (
    <div className="">
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-36 mt-14">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center lg:w-[400px] w-auto">
            SmartLink checkout
            for group sales{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-8 mb-4 w-[464px] lg:leading-7">
          Generate a single checkout link that combines multiple merchants, products, and services, making group selling fast and seamless.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold  px-24 lg:mb-0 mb-6"
          >
            <Link href="#">Create SmartLink</Link>
          </Button>{" "}
        </div>
        <div>
          <Image src="/sl.png" alt="Purpose" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default SmartLink;
