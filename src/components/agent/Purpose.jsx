import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Purpose = () => {
  return (
    <div className="lg:py-24 pt-24 pb-12 ">

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        <div className="flex flex-col items-start  lg:w-1/2 w-full">
          <h1 className="text-[32px] font-bold leading-tight">
            Smart Field Collections. Built for the Last Mile.
          </h1>
          <p className="text-[#1B1B1B] text-[16px] mt-4">
            AgentIQ helps financial institutions and organizations deploy, track, and empower agents to manage payments, loans, and field operations—online or offline, with GPS-aware tools designed for rugged conditions.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white text-sm h-10 px-6 mt-6"
          >
            <Link href="/login">Get Started</Link>
          </Button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/1c.png"
            alt="checkout"
            width={629}
            height={591}
            className="rounded-md max-w-full h-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default Purpose;
