import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Link } from "lucide-react";

const MDash = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] mt-12">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Mobile Dashboards for Field Ops
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Agents access tools for collections, deposits, disbursements, and
            customer interactions right from their phones.{" "}
          </p>
          <Button className="bg-[#0F226B] text-white h-11 font-bold px-22 w-full mb-6">
            Launch Dashboard
          </Button>
        </div>
        <div>
          <Image
            src="/mdash.png"
            alt="Purpose"
            height={442}
            width={495}
            className="rounded-xl"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700] text-nowrap">
            Mobile Dashboards for Field Ops
          </h2>
          <p className="text-[16px] text-[#1B1B1B] w-[462px] mb-8">
            Agents access tools for collections, deposits, disbursements, and
            customer interactions right from their phones.
          </p>
          <Button className="bg-[#0F226B] text-white h-11 font-bold px-22">
            Launch Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MDash;
