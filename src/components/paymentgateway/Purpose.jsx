import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Purpose = () => {
  return (
    <div>
      <div className="lg:pt-40 pt-28">
        <div className="lg:flex block justify-center gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[520px] w-auto">
            <p className=" lg:text-[48px] text-[30px] font-[700] lg:leading-14 leading-8 lg:text-left text-center ">
            Securely launch your own branded payment Gateway            </p>
            <p className=" py-6 text-[#1B1B1B] lg:text-left text-center lg:mb-4 mb-0 lg:w-[510px] w-auto">
            GateLite makes it easy for platforms, SaaS providers, and community organizations to become payment service providers in just days. With a ready-to-use, white-label gateway, you can manage collections, handle routing and reconciliation, and give your users a fully branded experience. 
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-11 font-bold">
              <Link href="#">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/pgw.png"
              alt="payment"
              height={615}
              width={580}
              className="lg:m-0 m-auto rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
