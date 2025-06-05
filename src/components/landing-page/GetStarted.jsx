import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="pb-20">
      <div className="bg-cover bg-center bg-[url('/get-started.svg')] text-center w-full h-[492px] flex flex-col items-center justify-center rounded-md">
        <h1 className="lg:text-[40px] text-[30px] font-bold text-white lg:w-[624px] w-auto leading-tight">
          Let’s Build the Future of Financial Infrastructure
        </h1>
        <Button asChild className="bg-[#0F226B] text-white h-10 mt-5">
          <Link href="/offline-stack">Get started</Link>
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
