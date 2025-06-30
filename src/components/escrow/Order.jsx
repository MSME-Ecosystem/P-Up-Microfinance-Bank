import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Order = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-40 mt-10">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Cashier Wallets
          </h2>
          <p className="text-[16px] lg:text-left text-center  lg:mb-8 mb-4 lg:w-[400px]">
            Assign individual wallets to staff, devices, or branches and track
            every inflow by source.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-20 mb-6"
          >
            <Link href="#">Create wallets</Link>
          </Button>{" "}
        </div>
        <div>
          <Image src="/cw.png" alt="POS" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default Order;
