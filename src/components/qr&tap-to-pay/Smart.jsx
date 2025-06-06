import Image from "next/image";
import React from "react";

const Smart = () => {
  return (
    <div className="lg:pt-28 pt-12 lg:px-4 px-0">
      <h1 className="font-[700] lg:text-[40px] text-[30px] text-center my-12 ">
        Smart QR Payments — Built for Any Scenario
      </h1>
      <div className="lg:flex block gap-10 lg:mx-0 mx-6">
        <div className="bg-[#FAFAFA] lg:w-[360px] w-auto lg:h-[378px] h-[350px] rounded-lg lg:px-5 px-8 lg:pt-20 pt-14 lg:m-0 m-auto lg:mt-0 mt-10">
          <Image
            src="/framea.svg"
            alt="frame1"
            width={64}
            height={64}
            className="m-auto"
          />
          <p className="lg:text-[24px] text-[20px] font-[700] text-center py-6">
            Add Context to Every Payment
          </p>
          <p className="text-center text-[16px]">
            Embed metadata like item name, agent ID, or amount.
          </p>
        </div>
        <div className="bg-[#FAFAFA] lg:w-[360px] w-auto lg:h-[378px] h-[350px] rounded-lg lg:px-5 px-8 lg:pt-20 pt-14 lg:m-0 m-auto lg:mt-0 mt-10">
          <Image
            src="/frameb.svg"
            alt="frame1"
            width={64}
            height={64}
            className="m-auto"
          />
          <p className="lg:text-[24px] text-[20px] font-[700] text-center py-6">
            Checkout Starts with a Single Scan
          </p>
          <p className="text-center text-[16px]">
            Auto-trigger checkout pages from a single scan.
          </p>
        </div>
        <div className="bg-[#FAFAFA] lg:w-[360px] w-auto lg:h-[378px] h-[350px] rounded-lg lg:px-5 px-8 lg:pt-20 pt-14 lg:m-0 m-auto lg:mt-0 mt-10">
          <Image
            src="/framec.svg"
            alt="frame1"
            width={64}
            height={64}
            className="m-auto"
          />
          <p className="lg:text-[24px] text-[20px] font-[700] text-center py-6">
            Track and Reconcile in Real Time
          </p>
          <p className="text-center text-[16px]">
            Stay on top of who paid, when, and for what—automatically.
          </p>
        </div>
      </div>
      {/* Smart QR Generator */}
      <div className="lg:flex block justify-between lg:mt-40 mt-10">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Smart QR Generator
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Build QR codes with item, location, and pricing metadata.
          </p>
        </div>
        <div>
          <Image src="/pos.svg" alt="POS" height={442} width={495} />
        </div>
      </div>

      {/* Dynamic Checkout Builder */}
      <div className="lg:flex block justify-between lg:mt-28 mt-16">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Smart QR Generator
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Build QR codes with item, location, and pricing metadata.
          </p>
        </div>
        <div>
          <Image
            src="/dynamic.svg"
            alt="POS"
            height={442}
            width={495}
            className="rounded-xl"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
            Dynamic Checkout Builder{" "}
          </h2>
          <p className="text-[16px] text-[#1B1B1B]">
            Auto-generate payment pages linked to each code.{" "}
          </p>
        </div>
      </div>
      {/* Auto Reconciliation */}
      <div className="lg:flex block justify-between lg:mt-28 mt-16 lg:mb-40 mb-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center lg:text-left text-center">
          <p className="text-[16px] lg:pb-4 pb-0">Featuring</p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700]">
            Auto Reconciliation{" "}
          </h2>
          <p className="text-[16px] lg:mb-0 mb-4">
            Automatically match payments to items or agents.{" "}
          </p>
        </div>
        <div>
          <Image src="/posb.svg" alt="POS" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default Smart;
