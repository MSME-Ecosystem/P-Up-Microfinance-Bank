import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Purpose = () => {
  return (
    <div>
      <div className="lg:pt-40 pt-30">
        <div className="lg:flex block justify-center gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[540px] w-auto">
            <p className=" lg:text-[48px] text-[31px] font-[700] lg:leading-14 leading-8 lg:text-left text-center lg:w-[550px] w-auto ">
              One checkout. Multiple merchants. Zero <br />
              hassle.
            </p>
            <p className="lg:py-6 py-8 text-[#1B1B1B] lg:text-left text-center w-[510px]">
            Enable smarter group selling with a unified checkout experience that automatically splits payments, routes funds, and reconciles for each merchant involved.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-11 font-bold ">
              <Link href="#">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/1c.png"
              alt="checkout"
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

export default Purpose;
