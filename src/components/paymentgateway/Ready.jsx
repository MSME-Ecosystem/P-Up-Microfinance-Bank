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
              className="bg-[#0171DF] rounded-[5px] text-white h-11 lg:px-4 lg:w-auto w-full my-10 font-bold text-[18px]"
            >
              <Link href="#">Real - Life Scenario</Link>
            </Button>{" "}
            <div className="flex flex-col  ">
              <div className=" lg:w-[60%] w-full">
                <div className="flex-1 text-[#1B1B1B]">
                  <p>
                    <span className="font-bold text-black">AgroBid,</span> an is
                    an agricultural input marketplace that connects over 100,000
                    farmers to verified suppliers, and he wants 
                  </p>

                  <ul className="list-disc space-y-1 pl-8 pt-2">
                    <li>Branded checkout pages for each seller</li>
                    <li>Custom payout rules to different suppliers</li>
                    <li>Hold buyer funds in escrow wallets until delivery</li>
                    <li>Issue digital receipts for every transaction </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-end lg:justify-end justify-center lg:w-[25%]  mb-5">
                  <Image
                    src="/next-arrow.svg"
                    alt="next"
                    height={28}
                    width={28}
                    className="rotate-90 "
                  />
                </div>
                <div className="bg-[#E7F7E6] rounded-[10px]  px-5 py-8 w-full lg:w-[55%] ">
                  <p>
                    {" "}
                    With <span className="text-[#0171DF]">GateLite</span><span className="font-bold">,  AgroBid </span>is able to
                  </p>
                  <ul className="list-disc px-6 space-y-4 pt-4 text-[14px]">
                    <li> Accepts collections via SmartQR</li>
                    <li>Route his transactions through ReconcileX</li>
                    <li>Settles funds to merchant wallets after delivery</li>
                    <li>Gain real-time control; no reconciliation team needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[90%] lg:flex hidden justify-end items-end h-full absolute top-0 ">
            <Image
              src="/newhandb.png"
              alt="hand"
              height={900}
              width={900}
            />
          </div>
        </div>
        <div className="lg:hidden flex pt-10">
          <Image src="/newhandb.png" alt="hand" height={600} width={650} />
        </div>
      </div>
    </div>
  );
};

export default Ready;
