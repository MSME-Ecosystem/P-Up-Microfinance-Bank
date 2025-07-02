import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
const Running = () => {
  return (
    <div>
      <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden lg:py-10 pt-10 lg:mt-0 mt-20">
        <div className="flex lg:px-40 px-5  ">
          <div>
            <p className=" lg:text-left text-center">Use Case</p>
            <Button
              asChild
              className="bg-[#0171DF] text-white h-11 px-24 my-10 font-bold text-[18px] rounded-[5px]"
            >
              <Link href="#">Real - Life Scenario</Link>
            </Button>{" "}
            <div className="flex flex-col  ">
              <div className="lg:flex block lg:w-[80%] w-full">
                <div className="flex-1">
                  <p className="text-[#1B1B1B]">
                    <span className="font-bold text-black">Tunde, </span> owner
                    of TundeTyres, a car parts distributor in Akure, uses Odoo
                    ERP to track inventory and generate invoices
                  </p>
                  <ul className="list-disc space-y-1 pl-8">
                    <li>
                      Send{" "}
                      <span className="font-bold text-black">invoices</span> via
                      email or WhatsApp
                    </li>
                    <li>
                      Wait for customers to pay (often by generic transfer)
                    </li>
                    <li>
                      Manually open his bank app and reconcile payments daily
                    </li>
                    <li>
                      Match payments to invoices based on narration and
                      guesswork
                    </li>
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

                <div className="flex-1">
                  <div className="bg-[#E6F7F1] rounded-[10px] m-auto p-5 w-full lg:w-[370px]">
                    <span className="font-bold">Now with ReconcileX:</span>
                    <ul className="list-disc px-6 space-y-2 text-[14px] pt-5">
                      <li>Each invoice gets a dedicated virtual account</li>
                      <li>
                        When a payment comes in, the system auto-matches it to
                        the invoice.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className=" lg:mt-15 mt-5">
                <div className="flex items-end lg:justify-end justify-center lg:w-[33%] lg:mb-0 mb-5">
                  <Image
                    src="/next-arrow.svg"
                    alt="next"
                    height={28}
                    width={28}
                    className="rotate-90 "
                  />
                </div>
                <div className="bg-[#E6F7F1] rounded-[10px]  p-5 w-full lg:w-[35%]">
                  <span className="font-bold">Now with ReconcileX:</span>
                  <ul className="list-disc px-6 space-y-2 pt-5 text-[14px]">
                    <li>
                      Tunde’s Odoo dashboard updates the invoice status to
                      "PAID" instantly, no manual checking needed
                    </li>
                    <li>
                      He also receives a daily summary report and cashflow chart
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
    </div>
  );
};

export default Running;
