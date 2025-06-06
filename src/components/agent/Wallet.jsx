import Image from "next/image";
import React from "react";

const Wallet = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px]  lg:mt-0 mt-16 lg:mb-10 mb-20">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Wallet + Bank Settlements Per Merchant
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Sellers can choose to receive funds in a digital wallet or direct to
            their business bank account.
          </p>
        </div>
        <div>
          <Image
            src="/wal.png"
            alt="POS"
            height={442}
            width={495}
            className="rounded-md"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
            Wallet + Bank Settlements Per Merchant
          </h2>
          <p className="text-[16px] text-[#1B1B1B] w-[462px]">
            Sellers can choose to receive funds in a digital wallet or direct to
            their business bank account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
