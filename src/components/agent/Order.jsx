import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Order = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] mt-12 lg:mb-20 mb-10">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center lg:text-left text-center lg:w-[487px] w-auto">
          <p className="text-[16px] lg:pb-4 pb-0">Featuring</p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] text-nowrap">
          Detailed order reconciliation          </h2>
          <p className="text-[16px] lg:mb-8 mb-4 lg:w-[462px] w-auto lg:leading-7">
          Merchants get a full breakdown of every order collected in the field, including items sold, quantities, values, and customer details. No guesswork, no gaps.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold lg:mb-0 mb-6"
          >
            <Link href="#">View Logs</Link>
          </Button>{" "}
        </div>
        <div>
          <Image
            src="/Image_fx1.png"
            alt="POS"
            height={442}
            width={495}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
