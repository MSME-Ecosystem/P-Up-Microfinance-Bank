import Image from "next/image";
import React from "react";

const Trust = () => {
  return (
    <div>
      {/* Trust-Linked Payments */}
      <div className="lg:flex block justify-between lg:mt-28 mt-10">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center w-[487px]">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Trust-Linked Payments{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            SmartLinks, QR codes, and checkouts carry merchant trust badges and
            scores—right at point of payment.
          </p>
        </div>
        <div>
          <Image src="/phoneb.svg" alt="phone" height={442} width={495} />
        </div>
      </div>

      {/* Verified Badges */}
      <div className="lg:flex block justify-between lg:mt-28 mt-10">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Verified Badges{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
          Dynamic badges display real merchant activity like “Reconciled 1,000+ Orders” or “Verified by 3 Platforms.
          </p>
        </div>
        <div>
          <Image src="/manb.svg" alt="man" height={442} width={495} />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center w-[487px]">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-5 text-[#0171DF] text-[32px] font-[700]">
          Verified Badges{" "}
          </h2>
          <p className="text-[16px] text-[#1B1B1B]">
          Dynamic badges display real merchant activity like “Reconciled 1,000+ Orders” or “Verified by 3 Platforms.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Trust;
