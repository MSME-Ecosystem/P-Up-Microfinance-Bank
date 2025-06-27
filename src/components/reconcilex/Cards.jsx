import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="text-black w-full">
      <div className="lg:flex block justify-center lg:py-32 pt-12 gap-5 ">
        <div className="lg:w-[370px] w-auto py-15 bg-[#F6EBC6]/50 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/carda.svg"
              alt="carda"
              width={112}
              height={112}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center w-[255px] m-auto">
          Invoice-Linked Virtual Account Matching          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
          Assign a unique virtual account 
          to each invoice           </p>
        </div>
        <div className="lg:w-[370px] w-auto py-15 bg-[#0171DF]/10 lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/cardb.svg"
              alt="cardb"
              width={112}
              height={112}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center">
          ERP Integration & Auto-Posting          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B]">
          Sync payments directly to your ERP and update records automatically          </p>
        </div>
        <div className="lg:w-[370px] w-auto py-15 bg-[#DEF4EA] lg:px-10 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/cardc.svg"
              alt="cardc"
              width={112}
              height={112}
              className="m-auto mt-15"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5 text-center ">
          Real-Time Business 
          Intelligence Dashboards          </p>
          <p className="lg:text-[16px] text-[14px] text-center text-[#1B1B1B] ">
          Visualize cashflow, payments, and performance as they happen          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
