import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Purpose = () => {
  return (
    <div>
      <div className="lg:pt-40 pt-30">
        <div className="lg:flex block justify-center gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[520px] w-auto">
            <p className=" lg:text-[48px] text-[31px] font-[700] lg:leading-14 leading-8 lg:text-left text-center lg:w-[510px] w-auto ">
              Smart field collections. Built for the Last Mile.{" "}
            </p>
            <p className=" py-6 text-[#1B1B1B] lg:text-left text-center lg:mb-4 mb-0">
              AgentIQ gives financial institutions and businesses the tools to
              deploy, manage, and support field agents handling payments, loans,
              or collections, whether online or offline. Every feature is
              GPS-aware and built for the realities of the field.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-11 font-bold">
              <Link href="#">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/jays.svg"
              alt="checkout"
              height={615}
              width={580}
              className="lg:m-0 m-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
