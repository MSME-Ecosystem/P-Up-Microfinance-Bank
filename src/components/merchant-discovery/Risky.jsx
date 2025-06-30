import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Risky = () => {
  return (
    <div>
      <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden  lg:pb-30  pt-10 lg:mt-40 mt-20">
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
              <div className=" lg:w-[100%] w-full">
                <div className="flex-1 text-[#1B1B1B]">
                  <p>
                    <span className="font-bold text-black">Emeka,</span> a phone
                    accessories vendor at Onitsha Main Market:
                  </p>

                  <ul className="list-disc space-y-1 pl-8 pt-1">
                    <li>Registers on CrediFind</li>
                    <li>
                      Links his PoS QR, CartLink profile, and FieldSync ledger
                    </li>
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
                <div className="bg-[#E7F7E6] rounded-[10px] p-10 pb-4 w-full lg:w-[70%]">
                  <p> Customers scanning his checkout QR can view</p>
                  <ul className="list-disc px-6 space-y-4 pt-5 text-[14px]">
                    <li> 800+ transactions reconciled</li>
                    <li>Top buyer feedback: fast delivery</li>
                    <li>98% transaction match rate”</li>
                  </ul>
                  <p className="text-sm pt-4">
                    Emeka’s weekly sales rise 25% due to increased trust from
                    buyers who previously hesitated{" "}
                  </p>
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
              className=""
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

export default Risky;
