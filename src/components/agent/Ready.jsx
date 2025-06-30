import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden  lg:pt-10 pt-10 lg:pb-20 lg:mt-40 mt-20">
      <div className="flex lg:px-40 px-5  ">
        <div className=" ">
          <p className=" lg:text-left text-center">Use Case</p>
          <Button
            asChild
            className="bg-[#0171DF] text-white h-10 lg:px-6 lg:w-auto w-full my-10 font-bold text-[18px]"
          >
            <Link href="#">Real - Life Scenario</Link>
          </Button>{" "}
          <div className="flex flex-col  ">
            <div className=" lg:w-[65%] w-full">
              <div className="flex-1 text-[#1B1B1B]">
                <p>
                  <span className="font-bold text-black">Chinedu,</span> sales
                  manager for AgroLink Fertilizers, uses AgentIQ to monitor 120
                  field reps across Nigeria.{" "}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-end lg:justify-end justify-center lg:w-[20%]  mb-5">
                <Image
                  src="/next-arrow.svg"
                  alt="next"
                  height={28}
                  width={28}
                  className="rotate-90 "
                />
              </div>
              <div className="bg-[#E7F7E6] rounded-[10px]  pl-8 lg:pr-28 py-8 w-full lg:w-[65%]">
                <p className="text-[#1B1B1B]"> He sees </p>
                <ul className="list-disc px-6 space-y-4 pt-5 text-[14px]">
                  <li> Who visited farmers in Nasarawa today</li>
                  <li>How much each rep collected in POS payments </li>
                  <li>How many refunds were requested in Enugu</li>
                  <li>Which territory is underperforming</li>
                  <li>Which agent needs retraining</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[90%] lg:flex hidden justify-end items-end h-full absolute  ">
          <Image
            src="/newhandb.png"
            alt="hand"
            height={900}
            width={900}
            className=""
          />
        </div>
      </div>
      <div className="lg:hidden flex pt-10">
        <Image src="/newhandb.png" alt="hand" height={600} width={650} />
      </div>
    </div>
  );
};

export default Ready;
