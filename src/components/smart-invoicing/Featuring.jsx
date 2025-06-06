import Image from "next/image";
import React from "react";

const Featuring = () => {
  return (
    <div className="space-y-20">
      <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-[150px]">
        <div>
          <p>Featuring</p>
          <h1 className="lg:text-[32px] text-[25px] font-bold text-[#0171DF] my-5">
            Instant Invoice Generation
          </h1>
          <p className="lg:w-[464px] w-auto">
            Create professional invoices from your phone or laptop—ready to send
            via WhatsApp, email, or link.
          </p>
        </div>
        <div>
          <Image
            src={"/featuring1.svg"}
            width={495}
            height={442}
            alt="Featuring 1"
          />
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-[150px]">
        <div className="flex flex-col lg:hidden">
          <p>Featuring</p>
          <h1 className="lg:text-[32px] text-[25px] lg:w-[487px] w-auto font-bold leading-tight text-[#0171DF] my-5">
            Each Invoice Gets Its Own Account
          </h1>
          <p className="lg:w-[464px] w-auto">
            Assign a unique virtual account to every invoice so payments land
            exactly where they should.
          </p>
        </div>
        <div>
          <Image
            src={"/featuring2.svg"}
            width={495}
            height={442}
            alt="Featuring 2"
          />
        </div>
        <div className="lg:flex lg:flex-col hidden">
          <p>Featuring</p>
          <h1 className="lg:text-[32px] text-[25px] lg:w-[487px] w-auto font-bold leading-tight text-[#0171DF] my-5">
            Each Invoice Gets Its Own Account
          </h1>
          <p className="lg:w-[464px] w-auto">
            Assign a unique virtual account to every invoice so payments land
            exactly where they should.
          </p>
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-[150px]">
        <div>
          <p>Featuring</p>
          <h1 className="lg:text-[32px] text-[25px] font-bold text-[#0171DF] my-5">
            Real-Time Payment Alerts
          </h1>
          <p className="lg:w-[464px] w-auto">
            Know the moment a client pays. Your invoice updates to “PAID”
            automatically.
          </p>
        </div>
        <div>
          <Image
            src={"/featuring3.svg"}
            width={495}
            height={442}
            alt="Featuring 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Featuring;
