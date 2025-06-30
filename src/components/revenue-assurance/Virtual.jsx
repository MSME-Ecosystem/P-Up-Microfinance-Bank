import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Virtual = () => {
  return (
    <div>
      {/* Virtual Accounts for Each Payer */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-40 mt-14">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Virtual Accounts for Each Payer{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-8 mb-4 w-[464px] lg:pr-0 pr-5">
            Assign unique, traceable accounts or QR codes to stalls, buses,
            shops, or co-ops—linked by ward, agent, or tax type.
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-20 lg:mb-0 mb-6"
          >
            <Link href="#">Assign Accounts</Link>
          </Button>{" "}
        </div>
        <div>
          <Image src="/woman.svg" alt="POS" height={442} width={495} />
        </div>
      </div>

      {/* QR & Wallet-Based Payments */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-16">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            QR & Wallet-Based Payments{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Accept payments via mobile wallet, bank transfer, or QR scan—even
            with no internet. Syncs automatically when back online.{" "}
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-20 w-full mb-6"
          >
            <Link href="#">Accept Payments</Link>
          </Button>{" "}
        </div>
        <div>
          <Image
            src="/barcode.svg"
            alt="barcode"
            height={442}
            width={495}
            className=""
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
            QR & Wallet-Based Payments{" "}
          </h2>
          <p className="text-[16px] text-[#1B1B1B] w-[462px] lg:mb-8 mb-4">
            Accept payments via mobile wallet, bank transfer, or QR scan—even
            with no internet. Syncs automatically when back online.{" "}
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-20"
          >
            <Link href="#">Accept Payments</Link>
          </Button>{" "}
        </div>
      </div>
      {/* Field Agent Monitoring */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-20 lg:mb-40 mb-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center lg:text-left text-center lg:w-[487px] w-auto">
          <p className="text-[16px] lg:pb-4 pb-0">Featuring</p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700]">
            Field Agent Monitoring{" "}
          </h2>
          <p className="text-[16px] lg:mb-8 mb-4">
            Track agent collections in real-time by location, role, and
            cashflow. Trigger wallet top-ups, reviews, or audits instantly
          </p>
          <Button
            asChild
            className="bg-[#0F226B] text-white h-11 font-bold px-20 lg:mb-0 mb-6"
          >
            <Link href="#">Monitor Agents</Link>
          </Button>{" "}
        </div>
        <div>
          <Image src="/mask.svg" alt="mask" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
