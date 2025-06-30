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
              One Wallet. Any Vendor. Every Platform.{" "}
            </p>
            <p className="lg:py-6 py-8 text-[#1B1B1B] lg:text-left text-center">
              With UniPouch, a single top-up powers purchases across any
              participating vendor—QR, PoS, CartLink, or Bluetooth. Merchants
              get paid instantly. Buyers get a full ledger, loyalty rewards, and
              peace of mind.
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
