import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Order = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px]  mt-20 lg:mb-42 mb-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center lg:text-left text-center lg:w-[487px] w-auto">
          <p className="text-[16px] lg:pb-4 pb-0">Featuring</p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700]">
          Built in offline support          </h2>
          <p className="text-[16px] lg:mb-8 mb-4 lg:leading-7">
          No internet? No wahala. GareLite handles payments in low or no connectivity zones, then syncs everything once the connection returns.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-20 lg:mb-0 mb-4"
          >
            <Link href="#">Offline mode</Link>
          </Button>{" "}
        </div>
        <div>
          <Image
            src="/ofp.png"
            alt="Offline Payment"
            height={442}
            width={495}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
