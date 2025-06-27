import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Market = () => {
  return (
    <div>
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
              <div className=" lg:w-[45%] w-full">
                <div className="flex-1 ">
                  <p>
                    <span className="font-bold">Mrs. Ekene,</span> a fruit
                    vendor in Aba, gets a QR sticker from the LGA labeled “Fruit
                    Line, Stall 24. Every morning she pays ₦200 levy via wallet
                    or transfer to her virtual account. The LGA receives{" "}
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
                <div className="bg-[#E7F7E6] rounded-[10px]  px-12 py-8 w-full lg:w-[45%]">
                  <ul className="list-disc px-6 space-y-4 py-5 text-[14px]">
                    <li>The exact stall, ward, time, and agent</li>
                    <li>An escrowed payment report </li>
                    <li>Zero paper, zero guesswork</li>
                    <li>Reconciliation across 15 wards in real time</li>
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

export default Market;
