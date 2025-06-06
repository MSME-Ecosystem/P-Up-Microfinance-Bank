import Image from "next/image";
import React from "react";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] relative lg:mb-24 mb-12  max-h-screen overflow-hidden">
      <div className="flex lg:pl-28 pl-3 lg:pr-0 pr-5 lg:pt-24 pt-10 gap-10">
        <div className="flex flex-col lg:h-[500px] lg:justify-between">
          <div>
            <p className="py-3">Use Case</p>
            <h1 className="font-[700] lg:text-[40px] text-[30px] leading-12 text-left">
              Designed for Platforms <br/> That Move Money
            </h1>
            <p className="text-[16px] lg:w-[510px] mt-8 text-left">
              Whether you manage fleets, marketplaces, or SaaS tools, BankBox gives you the banking-grade infrastructure to handle payments, wallets, and payouts—all seamlessly embedded into your platform.
            </p>
          </div>

          <div className="lg:flex lg:w-[68%] gap-10  mt-12  mb-10 z-10">
            <div className=" mb-5 lg:mb-0">
              <h4 className="lg:text-[22px] text-[24px] font-[700]">No Banking License Required</h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
                Launch banking-like services without the regulatory burden or complexity.
              </p>
            </div>
            <div className="mt-1 lg:block hidden">|</div>
            <div className="">
              <h4 className="lg:text-[22px] text-[24px] font-[700]">Automated Payouts & Settlements</h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
                Schedule and trigger payouts automatically based on your platform’s logic.
              </p>
            </div>{" "}
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 right-0 hidden lg:block">
        <Image
          src="/uc1.png"
          alt="use case"
          height={500}
          width={550}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Ready;
