import Image from "next/image";
import React from "react";

const ERP = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-10">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center w-[487px]">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Single Wallet for Multiple Merchants
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Buyers top up once and pay across all participating merchants
            without switching wallets or apps.
          </p>
        </div>
        <div>
          <Image src="/wallet.png" alt="wallet" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default ERP;
