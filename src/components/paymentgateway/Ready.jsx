import Image from "next/image";
import React from "react";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] relative lg:mb-24 mb-12  lg:max-h-screen  overflow-hidden lg:text-left text-center">
      <div className="flex lg:pl-28 pl-3 lg:pr-0 pr-5 pt-10 gap-10">
        <div className="flex flex-col lg:h-[600px] lg:justify-between ">
          <div>
            <p className="py-8">Use Case</p>
            <h1 className="font-[700] lg:text-[40px] text-[30px] leading-12 lg:w-[510px] w-auto lg:text-nowrap">
              Seamless Payment
              <br /> Infrastructure for SaaS,
              <br /> Communities, and Agencies
            </h1>
            {/*  <p className="text-[16px] lg:w-[510px] mt-8 text-left">
              CartLink makes it easy to sell together—and get paid separately. Whether you’re bundling with friends or running an affiliate campaign, we’ve got the flow covered.
            </p> */}
          </div>

          <div className="lg:flex lg:w-3/5  gap-10  mt-12  mb-20 z-10">
            <div className=" mb-5 lg:mb-0">
              <h4 className="lg:text-[22px] text-[24px] font-[700] text-nowrap">
                Boosted Customer Loyalty
              </h4>
              <p className="lg:mt-5 mt-2 text-[16px] lg:w-[230px] w-auto">
                Built-in cashback and loyalty programs encourage repeat
                purchases and long-term engagement.
              </p>
            </div>
            <div className="mt-1 lg:block hidden">|</div>
            <div className="">
              <h4 className="lg:text-[22px] text-[24px] font-[700] text-nowrap">
                Unified Transaction History
              </h4>
              <p className="lg:mt-5 mt-2 text-[16px] lg:w-[230px] w-auto">
                Merchant trust is portable across WhatsApp, CartLink, PoS, and
                beyond.
              </p>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden lg:block">
        <Image
          src="/bga.svg"
          alt="use case"
          height={550}
          width={600}
          className="object-contain"
        />
      </div>
      <div className="lg:hidden flex">
        <Image src="/bga.svg" alt="hand" height={600} width={650} />
      </div>
    </div>
  );
};

export default Ready;
