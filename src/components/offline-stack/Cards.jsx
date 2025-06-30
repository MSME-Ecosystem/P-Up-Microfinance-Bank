import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="text-black w-full">
      <div className="lg:flex block justify-center lg:py-32 pt-12 gap-5 ">
        <div className="lg:w-[370px] w-auto py-15 bg-[#F6EBC6]/50 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/bluetooth.svg"
              alt="bluetooth"
              width={112}
              height={112}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center w-[255px] m-auto">
            Bluetooth Offline Payments{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
            Exchange tokens between phones—no SIM, no airtime, no Wi-Fi.
          </p>
        </div>
        <div className="lg:w-[370px] w-auto py-15 bg-[#0171DF]/10 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/board.svg"
              alt="teams"
              width={112}
              height={112}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center">
            Field Agent Sales Dashboard{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
            Log sales, issue receipts, sync data when online.
          </p>
        </div>
        <div className="lg:w-[370px] w-auto py-15 bg-[#DEF4EA] lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/qrcode.svg"
              alt="qr"
              width={112}
              height={112}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center ">
            Smart QR Codes{" "}
          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B] ">
            Generate QR codes that adjust based on customer and transaction
            state.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
