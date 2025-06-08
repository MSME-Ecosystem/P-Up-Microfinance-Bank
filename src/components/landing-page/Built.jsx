import Image from "next/image";
import React from "react";

const Built = () => {
  return (
    <div className="lg:py-20 py-0">
      <div>
        <h1 className="lg:text-[40px] text-[27px] font-bold text-center text-[#000000] leading-tight lg:w-[718px] w-auto mx-auto">
          Built for the Real World. Engineered for Any Condition
        </h1>
        <p className="lg:w-[462px] w-auto mx-auto leading-tight text-center mt-7">
          From offline sync to smart checkout and embedded banking, every layer
          is designed to perform — even in low-connectivity, high-volume, or
          distributed environments.
        </p>
      </div>
      <div className="mt-18 lg:flex lg:flex-row flex-col gap-5">
        <div className="bg-[#0F226B0D] rounded-md lg:py-0 py-7 border border-[#0000001A] lg:w-[573px] w-auto lg:h-[315px] h-auto gap-5 lg:flex lg:flex-row flex-col items-end justify-center px-5">
          <div className="mb-3">
            <h1 className="lg:text-[18px] text-[16px] font-bold">
              Offline QR → Bluetooth sync
            </h1>
            <p className="text-[#1B1B1BB2] lg:w-[283px] w-auto">
              Enable field agents and merchants to accept and sync transactions
              offline — using device-to-device logic and QR scan confirmations.
            </p>
          </div>
          <div className="flex lg:justify-end justify-center">
            <Image src={"/built1.svg"} alt="built" width={227} height={217} />
          </div>
        </div>
       <div className="bg-[#0F226B0D] lg:mt-0 mt-5 rounded-md lg:py-0 py-7 border border-[#0000001A] lg:w-[573px] w-auto lg:h-[315px] h-auto gap-5 lg:flex lg:flex-row flex-col items-end justify-center px-5">
          <div className="mb-3">
            <h1 className="lg:text-[18px] text-[16px] font-bold">
              Field agent → Merchant Wallet → ReconcileX
            </h1>
            <p className="text-[#1B1B1BB2] lg:w-[283px] w-auto">
              Enable field agents and merchants to accept and sync transactions
              offline — using device-to-device logic and QR scan confirmations.
            </p>
          </div>
          <div>
            <Image src={"/built2.svg"} alt="built" width={227} height={217} />
          </div>
        </div>
      </div>
      <div className="bg-[#0F226B0D] rounded-md border border-[#0000001A] lg:w-[1165px] w-auto h-[484px] gap-5 flex flex-col items-center justify-center px-5 mt-5">
        <div>
          <Image src={"/built3.svg"} alt="built" width={433} height={294} />
        </div>
        <div className="mb-3">
          <h1 className="lg:text-[18px] text-[16px] font-bold text-center">
           Sync & Reconcile Engine
          </h1>
          <p className="text-[#1B1B1B] lg:w-[370px] w-auto mx-auto text-center leading-tight">
            Once back online, offline transactions auto-sync, match with ledgers, and reconcile with invoices — no manual steps required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Built;
