import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-[#000000]">
      <div className="bg-cover bg-center bg-[url('/hero-bg.svg')] w-full h-screen flex flex-col items-center justify-center lg:px-0 px-4">
        <h1 className="lg:text-[48px] text-[30px] font-bold text-center text-[#000000] leading-tight lg:w-[689px] w-auto mx-auto">
        Modern financial infrastructure for real world commerce        </h1>
        <p className="text-center mt-5 lg:w-[510px] w-auto text-[#1B1B1B leading-tight]">
          Run every layer of your financial operations, from offline payments
          and smart checkout to reconciliation and embedded finance. All-in-one
          modular stack.
        </p>
        <div className="flex justify-center mt-12">
          <Button asChild className="bg-[#0F226B] text-white h-11 font-bold ">
            <Link href="#">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
