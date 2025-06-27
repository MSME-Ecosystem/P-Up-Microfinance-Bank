import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Ready = () => {
  return (
    <div>
      <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden  lg:pb-24  pt-10 lg:mt-40 mt-20">
        <div className="flex lg:px-40 px-5  ">
          <div className=" ">
            <p className=" lg:text-left text-center">Use Case</p>
            <Button
              asChild
              className="bg-[#0171DF] text-white h-11 lg:px-6 lg:w-auto w-full my-10 font-bold text-[18px]"
            >
              <Link href="#">Real - Life Scenario</Link>
            </Button>{" "}
            <div className="flex flex-col  ">
              <div className=" lg:w-[90%] w-full">
                <div className="flex-1 ">
                  <p>
                    <span className="font-bold">AgroBid,</span> an agri-input
                    ordering system for 100,000 farmers, wants
                  </p>

                  <ul className="list-disc space-y-1 pl-8 pt-2">
                    <li>Branded checkout per seller</li>
                    <li>Payout logic to suppliers</li>
                    <li>Escrowed wallet holding for buyers</li>
                    <li>Digital receipts</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-end lg:justify-end justify-center lg:w-[45%]  mb-5">
                  <Image
                    src="/next-arrow.svg"
                    alt="next"
                    height={28}
                    width={28}
                    className="rotate-90 "
                  />
                </div>
                <div className="bg-[#E7F7E6] rounded-[10px]  px-5 py-8 w-full lg:w-[100%]">
                  <p>
                    {" "}
                    With <span className="text-[#0171DF]">GateLite</span>
                  </p>
                  <ul className="list-disc px-6 space-y-4 pt-4 text-[14px]">
                    <li> AgroBid collects via SmartQR</li>
                    <li>Routes payments through ReconcileX</li>
                    <li>Settles funds to merchant wallet after delivery</li>
                    <li>
                    Gains real-time control, zero reconciliation staf                    </li>
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[90%] lg:flex hidden justify-end items-end h-full absolute top-0 ">
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
    </div>
  );
};

export default Ready;
