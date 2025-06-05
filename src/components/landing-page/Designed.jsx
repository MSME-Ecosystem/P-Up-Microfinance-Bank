import Image from "next/image";
import React from "react";

const Designed = () => {
  return (
    <div className="py-24">
      <div>
        <h1 className="lg:text-[40px] text-[30px] font-bold leading-tight lg:w-[644px] w-auto">
          Designed for Every Operator in the Financial Stack
        </h1>
        <p className="text-[#1B1B1B] lg:w-[462px] w-auto leading-tight py-7">
          Whether you're a field agent, platform operator, aggregator, or
          merchant — each module is tailored to fit your workflow, online or
          offline.
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
        <div>
          <Image
            src={"/designed2.svg"}
            alt="Designed"
            width={595}
            height={579}
          />
        </div>
      </div>
    </div>
  );
};

export default Designed;
