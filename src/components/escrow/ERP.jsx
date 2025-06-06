import Image from "next/image";
import React from "react";

const ERP = () => {
  return (
    <div>
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-20 mt-16 lg:mb-30 mb-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center lg:text-left text-center">
          <p className="text-[16px] lg:pb-4 pb-0">Featuring</p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700]">
            ERP Integration
          </h2>
          <p className="text-[16px] lg:mb-0 mb-4">
            Sync verified balances and logs with accounting or sales platforms.
          </p>
        </div>
        <div>
          <Image src="/erp.png" alt="" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default ERP;
