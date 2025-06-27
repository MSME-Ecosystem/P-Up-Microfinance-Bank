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
          className="bg-[#0171DF] text-white h-11 px-24 my-10 font-bold "
        >
          <Link href="#">Real - Life Scenario</Link>
        </Button>{" "}
        <div className="flex flex-col  ">
          <div className="lg:flex block lg:w-[80%] w-full">
            <div className="flex-1 ">
              <p>
              Sandra, a buyer in Lagos, visits an Instagram page selling groceries. She selects 3 items
 
              </p>
              <ul className="list-disc space-y-0 pl-8 pt-1">
                <li>
                Rice from ObinnaRiceHub

                </li>
                <li>
                Groundnut oil from MamaFatimaStores
                </li>
                <li>
                Detergent from EkitiMarture,                </li>
                
              </ul>
            </div>

            <div className="flex items-start  mx-auto lg:mx-4 lg:justify-start justify-center  my-5">
              <Image
                src="/next-arrow.svg"
                alt="next"
                height={28}
                width={28}
                className="shrink-0 lg:rotate-0 rotate-90"
              />
            </div>

            <div className="flex-1 ">
              <div className="bg-[#E6F7F1] rounded-[10px] m-auto p-5 w-full lg:w-[370px]">
                <p>Each merchant has a P-UP merchant profile linked to UniTap. Sandra adds all items to a  single cart and checks out via her mobile wallet. Behind the scenes, the system</p>
              </div>
            </div>
          </div>

          <div className=" lg:mt-20 mt-5">
            <div className="flex items-end lg:justify-end justify-center lg:w-[15%]  mb-5">
              <Image
                src="/next-arrow.svg"
                alt="next"
                height={28}
                width={28}
                className="rotate-90 "
              />
            </div>
            <div className="bg-[#E6F7F1] rounded-[10px]  p-5 w-full lg:w-[35%]">
                <ul className="list-disc px-6 space-y-4 pt-5 text-[14px]">
                  <li >Splits payments automatically per merchant</li>
                  <li>
                  Reconciles each order independently                  </li>
                  <li>Generates receipts per vendor</li>
                  <li>Sends confirmation to each seller’s dashboard</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div className=" w-[87%] lg:flex hidden justify-end items-end h-full absolute  ">
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
