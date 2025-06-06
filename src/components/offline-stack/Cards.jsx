import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="text-black">
      <div className="lg:flex block lg:px-4 px-0 lg:pt-28 pt-12 gap-8 lg:pb-30 pb-8">
        <div className="lg:w-[360px] w-auto lg:h-[360px] h-[350px] bg-[#F3F5F7] lg:px-4 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/bluetooth.svg"
              alt="bluetooth"
              width={150}
              height={150}
              className="m-auto mt-12"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center">
            Bluetooth Offline Payments
          </p>
          <p className="lg:text-[16px] text-[14px] text-center">
            Exchange tokens between phones—no SIM, no airtime, no Wi-Fi.
          </p>
        </div>
        <div className="lg:w-[360px] w-auto lg:h-[360px] h-[350px] bg-[#0171DF]/10 lg:px-4 px-6 pt-1 lg:mt-0 mt-10 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/imageb.svg"
              alt="imageb"
              width={150}
              height={150}
              className="m-auto mt-12"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center">
            Field Agent Sales Dashboard{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center">
            Log sales, issue receipts, sync data when online.{" "}
          </p>
        </div>
        <div className="lg:w-[360px] w-auto lg:h-[360px] h-[350px] bg-[#F4F3DE] lg:px-4 px-6 pt-1 lg:mt-0 mt-10 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/imagec.svg"
              alt="barcode"
              width={150}
              height={150}
              className="m-auto mt-12"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px]] py-5 text-center">
            Smart QR Codes{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center">
            Generate QR codes that adjust based on customer and transaction
            state.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
