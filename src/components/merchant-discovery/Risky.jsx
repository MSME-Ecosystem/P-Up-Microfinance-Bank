import Image from "next/image";
import React from "react";

const Risky = () => {
  return (
    <div className="bg-[#EFFAF8] lg:h-[753px] h-[790px] relative mb-28 overflow-hidden lg:mt-28 mt-16">
      <div className="flex lg:pl-28 pl-5 lg:pr-0 pr-5 lg:pt-8 pt-12 gap-10">
        <div className="lg:w-[50%] w-full flex flex-col lg:h-[600px] lg:justify-between justify-center">
          <div>
            <h1 className="font-[700] lg:text-[40px] text-[30px] lg:w-[450px] w-auto leading-12 lg:text-left text-center  lg:m-0 m-auto lg:mt-12 mt-6">
            From Risky Transfers to Verified Transactions            </h1>
            <p className="text-[16px] lg:w-[510px] w-auto mt-8 lg:text-left text-center">
            A buyer finds a vendor on Instagram—but instead of guessing, she scans their Trust Profile. One tap reveals history, platform verifications, and delivery stats. No guesswork. Just trusted trade.
            </p>
          </div>

          <div className="lg:flex lg:w-[625px] w-auto gap-8 lg:mt-0 mt-12 lg:text-left text-center justify-between">
            <div className="lg:w-[250px] w-auto">
              <h4 className="lg:text-[22px] text-[24px] font-[700]">
              Instant Trust Checks              </h4>
              <p className="lg:mt-5 mt-2 text-[16px] w-[230px] lg:m-0 m-auto">
              Buyers can scan or click to see if a seller is verified before payment.
              </p>
            </div>
            <div className="mt-1 lg:block hidden">|</div>
            <div className="lg:w-[330px] w-auto lg:mt-0 mt-6">
              <h4 className="lg:text-[22px] text-[24px] font-[700] w-full text-nowrap">
              Cross-Platform Credibility              </h4>
              <p className="lg:mt-5 mt-2 text-[16px] w-[230px] lg:m-0 m-auto">
              Merchant trust is portable across WhatsApp, CartLink, PoS, and beyond.              </p>
            </div>{" "}
          </div>
        </div>
        <div className=" w-[97%] lg:flex hidden justify-end items-end h-[720px] absolute  ">
          <Image
            src="/bga.svg"
            alt="hand"
            height={700}
            width={850}
            className="w-[850px] h-[530px] mt-20"
          />
        </div>
      </div>
      <div className="lg:hidden flex">
        <Image src="/bga.svg" alt="hand" height={600} width={650} />
      </div>
    </div>
  );
};

export default Risky;
