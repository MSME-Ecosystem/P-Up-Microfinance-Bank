import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="text-black">
      <div className="lg:flex block justify-center lg:px-4 px-0 lg:pt-28 pt-12 gap-8 lg:pb-30 pb-8">
        <div className="lg:w-[360px] w-auto lg:h-[360px] h-[350px] bg-[#F3F5F7] lg:px-4 px-6 pt-1 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/carda.svg"
              alt="bluetooth"
              width={255}
              height={208}
              className="m-auto mt-12"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5  w-[212px] text-center m-auto">
            Invoice-Linked Virtual Account Matching{" "}
          </p>
        </div>
        <div className="lg:w-[360px] w-auto lg:h-[360px] h-[350px] bg-[#0171DF]/10 lg:px-4 px-6 pt-1 lg:mt-0 mt-10 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/cardb.svg"
              alt="bluetooth"
              width={255}
              height={208}
              className="m-auto mt-12"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5  w-[212px] text-center m-auto">
            ERP Integration & Auto-Posting{" "}
          </p>{" "}
        </div>
        <div className="lg:w-[360px] w-auto lg:h-[360px] h-[350px] bg-[#F4F3DE] lg:px-4 px-6 pt-1 lg:mt-0 mt-10 lg:m-0 m-6 rounded-lg">
          <div className="">
            <Image
              src="/cardc.svg"
              alt="bluetooth"
              width={255}
              height={208}
              className="m-auto mt-12"
            />
          </div>
          <p className="font-[700] lg:text-[20px] text-[18px] py-5  w-[223px] text-center m-auto">
            Real-Time Business Intelligence Dashboards{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Cards;
