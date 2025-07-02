import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Power = () => {
  return (
    <div className="text-black">
      <div className="lg:pt-[120px] pt-24">
        {/* Power offline payments Section */}
        <div className="lg:flex block justify-center gap-20">
          <div className="lg:h-[550px] h-auto flex flex-col justify-center lg:w-[520px] w-auto">
            <p className=" lg:text-[48px] text-[31px] font-[700] lg:leading-14 leading-8 lg:text-left text-center ">
            No Airtime? No Internet? Still paid            </p>
            <p className=" py-8 text-[#1B1B1B] lg:text-left text-center">
            AirVend empowers merchants and field agents to collect, sync, and reconcile payments completely offline. Designed for environments where connectivity is unreliable but businesses can't afford to stop.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-11 font-bold">
              <Link href="#">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/power.svg"
              alt="power"
              height={585}
              width={540}
              className="lg:m-0 m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Power;
