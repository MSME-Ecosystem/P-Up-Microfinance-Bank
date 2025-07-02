import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden  pt-10 lg:mt-40 mt-20">
      <div className="flex lg:px-40 px-5  ">
        <div className=" ">
          <p className=" lg:text-left text-center">Use Case</p>
          <Button
            asChild
            className="bg-[#0171DF] text-white h-11 lg:px-4 rounded-[5px] lg:w-auto w-full my-10 font-bold text-[18px]"
          >
            <Link href="#">Real - Life Scenario</Link>
          </Button>{" "}
          <div className="flex flex-col  ">
            <div className=" lg:w-[65%] w-full">
              <div className="flex-1 text-[#1B1B1B]">
                <p>
                  <span className="font-bold text-black"> Uju,</span> a food
                  content creator, posts a recipe reel on Instagram and tags:
                </p>

                <ul className="list-disc space-y-1 pl-8 pt-1">
                  <li>Anambra Rice Mart (rice vendor)</li>
                  <li>Ajoke Palm Oil</li>
                  <li>Yinka Pepper Supplies</li>
                </ul>
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
              <div className="bg-[#E7F7E6] rounded-[10px]  px-5 pt-12 pb-20 w-full lg:w-[45%]">
                <p className="text-[#1B1B1B]">
                  {" "}
                  Each merchant is on{" "}
                  <span className="text-[#0171DF]">CartLink.</span> Uju
                  generates a multi-merchant cart link with preset SKUs. Her
                  fans click, add all items, and check out once.{" "}
                </p>
                <ul className="list-disc px-6 space-y-4 pt-8 text-[14px]">
                  <li> Payment is automatically split</li>
                  <li>Each vendor receives the exact line items ordered</li>
                  <li>Reconciliation is instant</li>
                  <li>Uju receives commission via tagged affiliate tracking</li>
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
