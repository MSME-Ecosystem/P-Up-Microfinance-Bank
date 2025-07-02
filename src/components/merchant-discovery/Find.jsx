import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Find = () => {
  return (
    <div>
      {/* Digital Levies */}
      <div className="lg:pt-40 pt-30">
        <div className="lg:flex block justify-center gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[540px] w-auto">
            <p className=" lg:text-[48px] text-[32px] font-[700] lg:leading-14 leading-8 lg:text-left text-center lg:w-[550px] w-auto ">
            Trustworthy merchants online, offline, anytime            </p>
            <p className="lg:py-6 py-8 text-[#1B1B1B] lg:text-left text-center w-[510px]">
            CrediFind lets you verify any seller online or offline before you pay. 
            No storefront? No problem. Just one scan reveals their rating, history, and real-time trust score.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-10 font-bold">
              <Link href="#">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/man.svg"
              alt="man"
              height={615}
              width={580}
              className="lg:m-0 m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
