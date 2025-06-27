import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:py-40 pt-24 lg:flex lg:flex-row flex-col-reverse gap-16 justify-center">
      <div className="lg:pt-10 pt-0">
        <h1 className="lg:text-[48px] text-[32px] font-bold lg:w-[510px] w-auto leading-tight">
          Send Smarter Invoices. Get Paid Without the Guesswork
        </h1>
        <p className="text-[#1b1b1b] lg:w-[510px] w-auto pt-3">
          Whether you're a solo freelancer or a busy micro-merchant, InvoIQ
          helps you track payments, send branded invoices, and know exactly who
          owes what—without spreadsheets or finance teams.
        </p>
        <Button asChild className="bg-[#0F226B] text-white h-11 mt-5 lg:mt-10 lg:w-auto w-full font-bold ">
          <Link href="#">Get started</Link>
        </Button>
      </div>
      <div className="lg:mt-0 mt-10">
        <Image src={"/smart-invoice.svg"} width={541} height={484} alt="Smart invoice"/>
      </div>
    </div>
  );
};

export default Hero;
