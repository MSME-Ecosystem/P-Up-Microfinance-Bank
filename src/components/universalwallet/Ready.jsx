import Image from "next/image";
import React from "react";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] relative lg:mb-24 mb-12  lg:max-h-screen overflow-hidden lg:text-left text-center">
      <div className="flex lg:pl-28 pl-3 lg:pr-0 pr-5 lg:pt-24 pt-10 gap-10">
        <div className="flex flex-col lg:h-[500px] lg:justify-between">
          <div>
            <h1 className="font-[700] lg:text-[40px] text-[30px] leading-12 lg:w-[450px] w-auto">
              One Wallet. Any Vendor. Every Platform.
            </h1>
            <p className="text-[16px] lg:w-[510px] mt-8 ">
              UniPouch empowers buyers to shop effortlessly across multiple
              merchants with just one wallet — no app switching, no payment
              delays, and full transparency. Merchants get paid instantly, with
              detailed transaction records and no hassle.{" "}
            </p>
          </div>

          <div className="lg:flex lg:w-[48%] gap-10  mt-12  mb-10 z-10">
            <div className=" mb-5 lg:mb-0">
              <h4 className="lg:text-[22px] text-[24px] font-[700] text-nowrap">
                Boosted Customer Loyalty
              </h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
                Built-in cashback and loyalty programs encourage repeat
                purchases and long-term engagement.
              </p>
            </div>
            <div className="mt-1 lg:block hidden">|</div>
            <div className="">
              <h4 className="lg:text-[22px] text-[24px] font-[700] text-nowrap">
                Unified Transaction History
              </h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
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
          height={600}
          width={650}
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
