import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Turning = () => {
  return (
    <div>
      <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden  lg:pb-20  pt-10 lg:mt-40 mt-20">
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
                    <span className="font-bold text-black">Unity</span> Women’s
                    Coop has 300 members. Each has
                  </p>

                  <ul className="list-disc space-y-1 pl-8 pt-1">
                    <li>A personal wallet (for savings)</li>
                    <li>A loan wallet (for disbursement tracking)</li>
                    <li>A welfare wallet (for death benefit contributions)</li>
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
                <div className="bg-[#E7F7E6] rounded-[10px]  px-5 pt-12 pb-20 w-full lg:w-[100%]">
                  <p className="text-[#1B1B1B]">
                    {" "}
                    <span className="text-[#0171DF]">VaultIQ</span> allows the
                    coop to
                  </p>
                  <ul className="list-disc px-6 space-y-4 pt-8 text-[14px]">
                    <li> Automate deductions from savings → loan repayment</li>
                    <li>Show separate wallet balances with clear labels</li>
                    <li>Export ledgers for audit or grant reporting</li>
                    <li>
                      Tag wallet activity by purpose, period, and member ID{" "}
                    </li>
                  </ul>
                  <p className="text-sm pt-4">
                    No accountants. No Excel sheets. 100% traceable money.
                  </p>
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

export default Turning;
