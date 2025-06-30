import Image from "next/image";
import React from "react";

const Built = () => {
  return (
    <div>
      <div>
        <h1 className="lg:text-[40px] text-[27px] font-bold text-center text-[#000000] leading-tight lg:w-[718px] w-auto mx-auto">
          Built for the Real World. Engineered for Any Condition
        </h1>
        <p className="lg:w-[462px] w-auto mx-auto leading-normal text-center mt-7">
          From offline sync to smart checkout and embedded banking, every layer
          is designed to perform — even in low-connectivity, high-volume, or
          distributed environments.
        </p>
      </div>
      <div className="text-black w-full">
        <div className="lg:flex block justify-center pt-12 gap-5 ">
          <div className="lg:w-[33%] w-auto lg:py-12 py-8 bg-[#F6EBC6]/50 lg:px-10 px-6  lg:m-0 m-6 rounded-lg">
            <div>
              <Image
                src="/bluetoothnew.svg"
                alt="bluetooth"
                width={80}
                height={80}
                className="m-auto "
              />
            </div>
            <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center ">
              Offline QR → Bluetooth sync{" "}
            </p>
            <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]/70">
              Enable field agents and merchants to accept and sync transactions
              offline — using device-to-device logic and QR scan confirmations.{" "}
            </p>
          </div>
          <div className="lg:w-[34%] w-auto lg:py-12 py-8 bg-[#0171DF]/10 lg:px-10 px-6 lg:m-0 m-6 rounded-lg">
            <div>
              <Image
                src="/peoplenew.svg"
                alt="people"
                width={80}
                height={80}
                className="m-auto "
              />
            </div>
            <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center">
              Field agent → Merchant Wallet → ReconcileX{" "}
            </p>
            <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]/70">
              Enable field agents and merchants to accept and sync transactions
              offline — using device-to-device logic and QR scan confirmations.{" "}
            </p>
          </div>
          <div className="lg:w-[33%] w-auto lg:py-12 py-8 bg-[#DEF4EA] lg:px-10 px-6 lg:m-0 m-6 rounded-lg">
            <div>
              <Image
                src="/prayer.svg"
                alt="prayer"
                width={80}
                height={80}
                className="m-auto"
              />
            </div>
            <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center ">
              Sync & Reconcile Engine{" "}
            </p>
            <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]/70 lg:pt-8">
              Once back online, offline transactions auto-sync, match with
              ledgers, and reconcile with invoices — no manual steps required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Built;
