import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="text-black w-full">
      <div className="lg:flex block justify-center  pt-12 lg:pb-20 gap-5 ">
        <div className="lg:w-[370px] w-auto lg:pb-15 pb-12 bg-[#F6EBC6]/50 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/walleta.svg"
              alt="context"
              width={64}
              height={64}
              className="m-auto lg:mt-15 mt-12"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] py-5 text-center w-[255px] m-auto leading-tight">
            Top Up Once, Pay Everywhere{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
          Use one wallet to pay across all platforms and vendors, no app switching, no hassle.
          </p>
        </div>
        <div className="lg:w-[370px] w-auto lg:pb-15 pb-10 bg-[#0171DF]/10 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/walletb.svg"
              alt="scan"
              width={64}
              height={64}
              className="m-auto lg:mt-15 mt-10"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] py-5 text-center leading-tight">
          Accept payments No app barriers          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
          Merchants get paid via QR, payment link, or POS. No apps required, just what works          </p>
        </div>
        <div className="lg:w-[370px] w-auto lg:pb-15 pb-10 bg-[#DEF4EA] lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/walletc.svg"
              alt="track"
              width={64}
              height={64}
              className="m-auto lg:mt-15 mt-10"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] py-5 text-center leading-tight">
            Earn Loyalty, instantly{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B] lg:mt-8">
          Cashback and loyalty points are auto-applied per purchase.          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
