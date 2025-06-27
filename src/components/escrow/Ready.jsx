import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden  pt-10 lg:mt-30 mt-20">
      <div className="flex lg:px-40 px-5  ">
        <div className=" ">
          <p className=" lg:text-left text-center">Use Case</p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-10 lg:px-6 lg:w-auto w-full my-10 font-bold text-[18px]"
          >
            <Link href="#">Real - Life Scenario</Link>
          </Button>{" "}
          <div className="flex flex-col  ">
            <div className=" lg:w-[65%] w-full">
              <div className="flex-1 ">
                <p>
                  Raji, CFO at MegaMart Nigeria, runs 70 grocery outlets. Each
                  cashier uses a shared POS device. Previously, they had
                </p>
                <ul className="list-disc space-y-1 pl-8 pt-4">
                  <li>Zero visibility into who collected what</li>
                  <li>Reconciliation issues due to shift overlaps</li>
                  <li>Missing funds or unresolved disputes </li>
                </ul>
              </div>
            </div>

            <div className=" lg:mt-10 mt-5">
              <div className="flex items-end lg:justify-end justify-center lg:w-[20%]  mb-5">
                <Image
                  src="/next-arrow.svg"
                  alt="next"
                  height={28}
                  width={28}
                  className="rotate-90 "
                />
              </div>
              <div className="bg-[#E7F7E6] rounded-[10px]  p-5 w-full lg:w-[40%]">
                <p>
                  {" "}
                  Now, with <span className="text-[#0171DF]">SafeHands:</span>
                </p>
                <ul className="list-disc px-6 space-y-4 pt-5 text-[14px]">
                  <li>Each cashier gets a personal wallet</li>
                  <li>
                    Cash is escrowed until the branch supervisor signs of{" "}
                  </li>
                  <li>
                    Daily logs show inflows by cashier, device, time, and shift
                  </li>
                  <li>Fraud drops by 90%</li>
                  <li>End-of-day reports sync with MegaMart's ERP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[90%] lg:flex hidden justify-end items-end h-full absolute  ">
          <Image
            src="/newhandb.svg"
            alt="hand"
            height={900}
            width={900}
            className=""
          />
        </div>
      </div>
      <div className="lg:hidden flex pt-10">
        <Image src="/newhandb.svg" alt="hand" height={600} width={650} />
      </div>
    </div>
  );
};

export default Ready;
