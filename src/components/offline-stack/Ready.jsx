import Image from "next/image";
import React from "react";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] lg:h-[700px] h-[790px] relative mb-24">
      <div className="flex lg:pl-28 pl-3 lg:pr-0 pr-5 lg:pt-24 pt-10 gap-10">
        <div className="lg:w-[50%] flex flex-col lg:h-[500px] lg:justify-between">
          <div>
            <h1 className="font-[700] lg:text-[40px] text-[30px] lg:w-[450px]  leading-12 lg:text-left text-center   ">
              Real-World Ready. Even Without Internet.
            </h1>
            <p className="text-[16px] w-[510px] mt-8 lg:text-left text-center">
              You don’t need constant network coverage to run a modern business.
              Whether you're selling from a market stall, running field
              collections, or operating in remote areas, AirVend lets you accept
              payments and track sales completely offline.
            </p>
          </div>

          <div className="lg:flex w-[520px] gap-5 lg:mt-0 mt-12 lg:text-left text-center">
            <div className="lg:w-[230px] w-auto">
              <h4 className="lg:text-[22px] text-[24px] font-[700]">Get Paid Without Data</h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
                Accept Bluetooth or QR-based payments—no data required
              </p>
            </div>
            <div className="mt-1 lg:block hidden">|</div>
            <div className="lg:w-[230px] w-auto lg:mt-0 mt-5">
              <h4 className="lg:text-[22px] text-[24px] font-[700]">Instant Confirmation</h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
                Confirm transactions instantly, right on your phone{" "}
              </p>
            </div>{" "}
          </div>
        </div>
        <div className=" w-[92%] lg:flex hidden justify-end items-end h-[600px] absolute  ">
          <Image
            src="/bga.svg"
            alt="hand"
            height={600}
            width={850}
            className="w-[850px] h-[530px]"
          />
        </div>
      </div>
      <div className="lg:hidden flex">
        <Image src="/bga.svg" alt="hand" height={600} width={650} />
      </div>
    </div>
  );
};

export default Ready;
