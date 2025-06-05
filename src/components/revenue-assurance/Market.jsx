import Image from "next/image";
import React from "react";

const Market = () => {
  return (
    <div>
      <div className="bg-[#EFFAF8] lg:h-[753px] h-[770px] relative mb-28 overflow-hidden">
        <div className="flex lg:pl-28 pl-5 lg:pr-0 pr-5 lg:pt-28 pt-12 gap-10">
          <div className="lg:w-[50%] w-full flex flex-col lg:h-[530px] lg:justify-between justify-center">
            <div>
              <h1 className="font-[700] lg:text-[40px] text-[30px] lg:w-[450px] w-auto leading-12 lg:text-left text-center  lg:m-0 m-auto ">
              From Open Markets to Ministries—Every Naira Accounted For              </h1>
              <p className="text-[16px] lg:w-[510px] w-auto mt-8 lg:text-left text-center">
              A typical street vendor pays ₦200 daily levy using a QR code tied to her stall. Local authorities see the exact ward, time, and collection agent—ensuring full transparency without field paperwork.
              </p>
            </div>

            <div className="lg:flex lg:w-[635px] w-auto gap-5 lg:mt-0 mt-12 lg:text-left text-center justify-between">
              <div className="lg:w-[300px] w-auto">
                <h4 className="lg:text-[22px] text-[24px] font-[700]">
                Multi-Level Reporting (Ward, Sector, Agent)                </h4>
              </div>
              <div className="mt-1 lg:block hidden">|</div>
              <div className="lg:w-[283px] w-auto lg:mt-0 mt-6">
                <h4 className="lg:text-[22px] text-[24px] font-[700] ">
                Virtual Account Generator for Payers
                </h4>
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
    </div>
  );
};

export default Market;
