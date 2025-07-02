import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const ERP = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-20 mt-16 lg:mb-40 mb-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center lg:text-left text-center">
          <p className="text-[16px] lg:pb-4 pb-0">Featuring</p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700]">
            ERP Integration
          </h2>
          <p className=" lg:mb-8 mb-4 w-[450px] lg:leading-7">
            Sync wallet and escrow data with your ERP for seamless
            reconciliation and audit-ready records.{" "}
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 px-22 font-bold lg:mb-0 mb-4"
          >
            <Link href="#">Connect ERP</Link>
          </Button>{" "}
        </div>
        <div>
          <Image src="/erp.png" alt="" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default ERP;
