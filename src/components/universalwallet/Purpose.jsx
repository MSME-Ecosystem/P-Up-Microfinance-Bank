import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Purpose = () => {
  return (
    <div className="lg:pt-40 pt-24 lg:pb-30 pb-12 ">
      <div className="lg:flex block justify-center gap-12">
        <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[520px] w-auto">
          <p className=" lg:text-[48px] text-[32px] font-[700] lg:leading-14 leading-9 lg:text-left text-center ">
            One wallet. Any vendor. <br/>Every platform.{" "}
          </p>
          <p className="lg:py-6 py-8 text-[#1B1B1B] lg:text-left text-center">
            With Unipouch, make secure payments across QR, POS, Cartlink, or
            Bluetooth-enabled vendors. Merchants receive instant payouts. Buyers
            receive a comprehensive ledger, loyalty rewards, and a reliable
            transaction history.
          </p>
          <Button asChild className="bg-[#0F226B] text-white h-11 font-bold">
            <Link href="#">Get Started</Link>
          </Button>{" "}
        </div>
        <div className="lg:mt-0 mt-10">
          <Image
            src="/vdr.png"
            alt="power"
            height={615}
            width={580}
            className="lg:m-0 m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Purpose;
