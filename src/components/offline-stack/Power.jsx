import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Power = () => {
  return (
    <div className="text-black">
      <div className="lg:px-24 px-5 lg:pt-36 pt-24">
        <div className="lg:flex block gap-12">
          <div className="lg:h-[550px] h-auto flex flex-col justify-center lg:w-[520px] w-auto">
            <p className=" lg:text-[48px] text-[30px] font-[700] lg:leading-14 leading-8 lg:text-left text-center ">
              Power Offline Payments. No Airtime, No Problem
            </p>
            <p className="lg:py-10 py-6 text-[#1B1B1B] lg:text-left text-center">
              AirVend enables merchants and field agents to collect, sync, and
              reconcile payments—entirely offline. Built for markets where
              internet isn't guaranteed but business must go on.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-10">
              <Link href="/auth/register">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-8">
            <Image src="/power.svg" alt="power" height={615} width={580} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;
