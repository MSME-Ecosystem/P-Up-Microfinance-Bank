import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Realtime = () => {
  return (
    <div>
      {/* Digital Levies */}
      <div className="lg:pt-40 pt-30">
        <div className="lg:flex block justify-center gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[540px] w-auto">
            <p className=" lg:text-[48px] text-[32px] font-[700] lg:leading-14 leading-8 lg:text-left text-center lg:w-[500px] w-auto ">
              ClariFi: Real-Time Financial Intelligence for Everyday Businesses{" "}
            </p>
            <p className="lg:py-6 py-8 text-[#1B1B1B] lg:text-left text-center">
              Plug-and-play dashboards that speak your language—literally.
              ClariFi transforms messy transaction data into clear insights,
              predictive alerts, and audit-ready reports. No coding. No
              spreadsheets. Just clarity.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-11  font-bold">
              <Link href="#">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/drive.svg"
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

export default Realtime;
