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
          <div className=" lg:w-[45%] w-full">
            <div className="flex-1 ">
              <p>
              Goke, a transport park manager in Ilorin, prints dynamic QR codes for each route and  bus. Riders scan the QR on arrival, select their seat, pay using their wallet, and receive a  ticket via SMS
              </p>
              
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
            <div className="bg-[#E7F7E6] rounded-[10px]  px-5 py-12 w-full lg:w-[30%]">
              
              <ul className="list-disc px-6 space-y-4 pt-5 text-[14px]">
                <li>Goke sees, in real time: Route, vehicle, collector, amount</li>
                <li>
                Reconciliation is automated                </li>
                <li>
                No more cash leakage or lost tickets                </li>
                <li>He even knows which driver's route earned ₦18,000 by 2:30PM</li>
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
