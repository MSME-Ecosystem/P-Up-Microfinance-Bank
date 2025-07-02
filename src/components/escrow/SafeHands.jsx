import Image from "next/image";
import React from "react";

const SafeHands = () => {
  return (
    <div className="text-black w-full px-6">
      <p className=" lg:text-[40px] text-[28px] font-[700] lg:leading-14 leading-8  text-center lg:pt-32 pt-12 pb-14">
        What SafeHands Enables{" "}
      </p>
      <div className="lg:flex block justify-center   gap-5 ">
        <div className="lg:w-[370px] w-auto py-15 bg-[#F6EBC6]/50 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/walletcard.svg"
              alt="wallet"
              width={64}
              height={64}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] py-5 text-center w-[255px] m-auto leading-tight lg:mt-3">
            Cashier Wallets with Role-Based Controls{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
            Track who’s collecting money—by time, shift, branch, or device{" "}
          </p>
        </div>
        <div className="lg:w-[370px] w-auto py-15 bg-[#0171DF]/10 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/escrow.svg"
              alt="escrow"
              width={64}
              height={64}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] pt-8 text-center leading-tight">
            Programmable Escrow Logic{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B] lg:mt-5">
            Hold funds until they're approved by managers or synced with ERP
            systems.{" "}
          </p>
        </div>
        <div className="lg:w-[370px] w-auto py-15 bg-[#DEF4EA] lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/auto.svg"
              alt="auto"
              width={64}
              height={64}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] py-6 text-center leading-tight">
            Automated End-of-Day Reconciliation{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B] ">
            Generate shift-based summaries and real-time cashflow logs—no
            spreadsheets needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeHands;
