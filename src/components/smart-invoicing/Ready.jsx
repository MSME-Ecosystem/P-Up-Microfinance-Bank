import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden  lg:py-10 pt-10 lg:mt-40 mt-20">
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
              <div className="flex-1 ">
                <p className="text-[#1B1B1B]">
                  <span className="font-bold text-black">Tomi,</span> a graphic
                  designer in Osogbo, used to send clients screenshots with her
                  bank account number and hope they paid,
                </p>
                <p className="py-6">
                  Now with <span className="text-[#0171DF]">InvoIQ:</span>
                </p>
                <ul className="list-disc space-y-1 pl-8">
                  <li>She sends a branded invoice via WhatsApp</li>
                  <li>Each invoice is tied to a P-UP virtual account</li>
                  <li>
                    When a client pays, the system auto-updates the invoice to
                    “PAID”
                  </li>
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
              <div className="bg-[#E7F7E6] rounded-[10px]  px-5 py-8 w-full lg:w-[40%]">
                <p className="text-[#1B1B1B]">
                  {" "}
                  Tomi opens her dashboard and sees:{" "}
                </p>
                <ul className="list-disc px-6 space-y-4 pt-5 text-[14px]">
                  <li> 3 open invoices</li>
                  <li>₦120,000 in receivables </li>
                  <li>₦200,000 collected this month </li>
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
