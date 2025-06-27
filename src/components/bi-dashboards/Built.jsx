import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Built = () => {
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
                <p>
                  <span className="font-bold">Unity Women's Cooperative,</span>{" "}
                  a thrift savings group in Ilorin, manages ₦15M/month in
                  savings and loan repayments. Prior to ClariFi:
                </p>

                <ul className="list-disc space-y-1 pl-8 pt-6">
                  <li>They used Excel and handwritten ledgers</li>
                  <li>Reporting was done quarterly, manually</li>
                  <li>Fraud and omission were common</li>
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
              <div className="bg-[#E7F7E6] rounded-[10px]  p-5 w-full lg:w-[40%]">
                <p> Now </p>
                <ul className="list-disc px-6 space-y-4 pt-5 text-[14px]">
                  <li> Every collection, loan disbursement, and repayment shows on their dashboard</li>
                  <li>The treasurer gets SMS alerts if cash falls below safety thresholds </li>
                  <li>Monthly reports are auto-generated and submitted to the auditor</li>
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

export default Built;
