import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="lg:pt-40 pt-32 lg:pb-20 pb-32  lg:flex lg:flex-row flex-col-reverse gap-16 items-center justify-center">
      <div>
        <h1 className="lg:text-[48px] text-[32px] font-bold lg:w-[510px] w-auto leading-tight">
          Multi-merchant checkout built for the new commerce stack.
        </h1>
        <p className="text-[#1b1b1b] lg:w-[510px] w-auto lg:mt-0 mt-5">
          UniTap is a fully adaptive, white-label checkout engine that lets
          buyers pay for products across multiple vendors, payment types, and
          platforms—through a single, seamless interface.
        </p>
        <Button asChild className="bg-[#0F226B] text-white h-11 mt-5 lg:mt-10 w-full font-bold   ">
          <Link href="#">Get started</Link>
        </Button>
      </div>
      <div className="lg:mt-0 mt-10">
        <Image
          src={"/smart-checkout.svg"}
          width={541}
          height={484}
          alt="Smart checkout"
        />
      </div>
    </div>
  );
};

export default Hero;
