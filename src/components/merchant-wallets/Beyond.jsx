import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Beyond = () => {
  return (
    <div>
      <div className="lg:pt-40 pt-28">
        <div className="lg:flex block justify-center gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[520px] w-auto">
            <p className=" lg:text-[48px] text-[32px] font-[700] lg:leading-14 leading-8 lg:text-left text-center ">
              Beyond Wallets built to power your entire financial stack{" "}
            </p>
            <p className=" py-6 text-[#1B1B1B] lg:text-left text-center lg:mb-4 mb-0">
              VaultIQ enables cooperatives, fintechs and commerce platforms to
              build programmable merchant wallets with sub accounts, smart
              transfers, and fully traceable money flows no accountants
              required.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-11 font-bold">
              <Link href="#">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/people.svg"
              alt="power"
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

export default Beyond;
