import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Qr = () => {
  return (
    <div>
      <div className="lg:pt-40 pt-30">
        <div className="lg:flex block justify-center gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[510px] w-auto">
            <p className=" lg:text-[48px] text-[31px] font-[700] lg:leading-14 leading-8 lg:text-left text-center ">
            More than just a QR Code built for smarter transactions            </p>
            <p className="lg:py-6 py-8 text-[#1B1B1B] lg:text-left text-center">
            SnapTag lets you generate smart QR codes enriched with metadata so you can track who paid what they paid for where and when it happened.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-11 font-bold ">
              <Link href="#">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/qr.svg"
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

export default Qr;
