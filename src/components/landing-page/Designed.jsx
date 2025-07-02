import Image from "next/image";
import React from "react";

const Designed = () => {
  return (
    <div className="lg:py-20 py-16">
      <div>
        <h1 className="lg:text-[40px] text-[27px] font-bold leading-tight lg:w-[644px] w-auto">
        Designed for every operator in the financial stack        </h1>
        <p className="text-[#1B1B1B] lg:w-[462px] w-auto leading-normal lg:pt-8 pt-4 lg:pb-20 pb-4">
        Whether you're a merchant, agent, aggregator, or platform provider, each module is tailored to fit smoothly into your operations, online or offline.
        </p>
      </div>
      <div className="lg:flex lg:flex-row flex-col gap-10 justify-center">
        <div>
          <Image
            src={"/designed1.svg"}
            alt="Designed"
            width={595}
            height={579}
          />
        </div>
        <div className="lg:mt-0 mt-7">
          <Image
            src={"/designed2.svg"}
            alt="Designed"
            width={595}
            height={579}
            className="rotate-y-180"
          />
        </div>
      </div>
    </div>
  );
};

export default Designed;
