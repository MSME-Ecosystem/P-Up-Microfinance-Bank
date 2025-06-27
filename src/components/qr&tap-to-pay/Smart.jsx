import Image from "next/image";
import React from "react";

const Smart = () => {
  return (
    <div className="text-black w-full">
      <p className=" lg:text-[40px] text-[28px] font-[700] lg:leading-14 leading-8  text-center lg:pt-32 pt-12 lg:pb-14">
        Smart QR Payments — Built for Any Scenario{" "}
      </p>
      <div className="lg:flex block justify-center gap-5 ">
        <div className="lg:w-[370px] w-auto lg:pb-20 pb-12 bg-[#F6EBC6]/50 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/framea.svg"
              alt="context"
              width={64}
              height={64}
              className="m-auto lg:mt-20 mt-12"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] py-5 text-center w-[255px] m-auto leading-tight">
            Add Context to Every Payment{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
            Embed metadata like item name, agent ID, or amount.{" "}
          </p>
        </div>
        <div className="lg:w-[370px] w-auto lg:pb-20 pb-10 bg-[#0171DF]/10 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/frameb.svg"
              alt="scan"
              width={64}
              height={64}
              className="m-auto lg:mt-20 mt-10"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] py-5 text-center leading-tight">
            Checkout Starts with a Single Scan{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
            Auto-trigger checkout pages from a single scan.
          </p>
        </div>
        <div className="lg:w-[370px] w-auto lg:pb-20 pb-10 bg-[#DEF4EA] lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/framec.svg"
              alt="track"
              width={64}
              height={64}
              className="m-auto lg:mt-20 mt-10"
            />
          </div>
          <p className="font-[700] lg:text-[24px] text-[18px] py-5 text-center leading-tight">
            Track and Reconcile in Real Time{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B] ">
            Stay on top of who paid, when, and for what—automatically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Smart;
