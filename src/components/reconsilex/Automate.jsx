import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
const Automate = () => {
  return (
    <div>
        <div className="lg:pt-36 pt-24">
        {/* Power offline payments Section */}
        <div className="lg:flex block gap-12">
          <div className="lg:h-[550px] h-auto flex flex-col justify-center lg:w-[520px] w-auto">
            <p className=" lg:text-[48px] text-[31px] font-[700] lg:leading-14 leading-8 lg:text-left text-center ">
            Automate Payment Matching with  <span className="text-[#0171DF]">ReconcileX</span>            </p>
            <p className="lg:py-10 py-8 text-[#1B1B1B] lg:text-left text-center">
            ReconcileX automatically matches payments to invoices, 
            orders, and ledgers—online or offline.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-10">
              <Link href="/auth/register">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image src="/automate.svg" alt="power" height={615} width={580} />
          </div>
        </div>

        

      </div>
    </div>
  )
}

export default Automate