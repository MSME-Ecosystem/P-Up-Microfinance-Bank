import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-[#000000]">
      <div className="bg-cover bg-center bg-[url('/hero-bg.svg')] w-full h-screen flex flex-col items-center justify-center">
        <h1 className="lg:text-[40px] text-[30px] font-bold text-center text-[#000000] leading-tight lg:w-[689px] w-auto mx-auto">
          Modern Financial Infrastructure Built for Real-World Commerce
        </h1>
        <p className="text-center mt-4 text-[14px] lg:w-[510px] w-auto text-[#1B1B1B leading-tight]">
          Power every layer of your financial operations — from offline payments
          to reconciliation, checkout, and embedded finance. <br /> All in one
          stack
        </p>
        <div className="flex justify-center mt-6">
          <Button asChild className="bg-[#0F226B] text-white h-10">
            <Link href="/auth/register">Get started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
