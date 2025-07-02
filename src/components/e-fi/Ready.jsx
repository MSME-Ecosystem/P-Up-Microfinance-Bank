import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden lg:py-10 pt-10 lg:mt-30 mt-20">
      <div className="flex lg:px-40 px-5  ">
        <div className=" ">
          <p className=" lg:text-left text-center">Use Case</p>
          <Button
            asChild
            className="bg-[#0171DF] text-white h-11 lg:w-fit w-full my-10 font-bold text-[18px] rounded-[5px]"
          >
            <Link href="#">Real - Life Scenario</Link>
          </Button>{" "}
          <div className="flex flex-col  ">
            <div className="lg:flex block lg:w-[100%] w-full">
              <div className="flex-1 text-[#1B1B1B]">
                <p>
                  <span className="font-bold text-black">EasyBid,</span> a
                  transport fleet management platform, serves 20,000 drivers.
                  They want to:
                </p>
                <ul className="list-disc space-y-1 pl-8 pt-1">
                  <li>
                    Assign each driver a virtual account for fare collection
                  </li>
                  <li>Hold balances in internal wallets</li>
                  <li>Automate daily payouts to drivers’ bank accounts</li>
                  <li>
                    Enable the platform to charge commissions automatically
                    before payout
                  </li>
                </ul>
              </div>

              <div className="flex items-center  mx-auto lg:mx-4  justify-center  my-5">
                <Image
                  src="/next-arrow.svg"
                  alt="next"
                  height={28}
                  width={28}
                  className="shrink-0 lg:rotate-0 rotate-90"
                />
              </div>

              <div className="flex-1 ">
                <div className="bg-[#D22F27]/10 rounded-[10px] m-auto px-5 py-8 w-full lg:w-[320px] text-[#1B1B1B]">
                  <p>
                    Instead of applying for a license or building banking rails,
                    EasyBid integrates with BankBox’s API and goes live in 1
                    week.
                  </p>
                </div>
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
              <div className="bg-[#E7F7E6] rounded-[10px]  p-5 w-full lg:w-[35%]">
                <p> Each driver now has:</p>
                <ul className="list-disc px-6 space-y-4 pt-5 text-[14px]">
                  <li>A wallet</li>
                  <li>A programmable payout rule </li>
                  <li>A unique NUBAN virtual account</li>
                  <li>
                    Visibility into transactions, balances, and scheduled
                    transfers
                  </li>
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
