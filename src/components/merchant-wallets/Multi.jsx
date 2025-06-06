import Image from "next/image";
import React from "react";

const Multi = () => {
  return (
    <div>
      {/* Multi-Purpose Sub-Wallets */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-40 mt-14">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Multi-Purpose Sub-Wallets{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4 w-[464px]">
            Create wallets by member, product, fund type, or business goal—each
            with its own rules and visibility.{" "}
          </p>
        </div>
        <div>
          <Image src="/purse.svg" alt="POS" height={442} width={495} />
        </div>
      </div>

      {/* Automated Money Movement */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-16">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Smart QR Generator
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Build QR codes with item, location, and pricing metadata.
          </p>
        </div>
        <div>
          <Image
            src="/money.svg"
            alt="POS"
            height={442}
            width={495}
            className="rounded-xl"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-6 text-[#0171DF] text-[32px] font-[700]">
            Automated Money Movement{" "}
          </h2>
          <p className="text-[16px] text-[#1B1B1B] w-[462px]">
            Schedule or trigger internal transfers based on conditions—like
            commissions, repayments, or contributions.{" "}
          </p>
        </div>
      </div>
      {/* Smart Mini-Ledger */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-20 lg:mb-40 mb-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center lg:text-left text-center lg:w-[487px] w-auto">
          <p className="text-[16px] lg:pb-4 pb-0">Featuring</p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700]">
          Smart Mini-Ledger          </h2>
          <p className="text-[16px] lg:mb-0 mb-4">
          See the full transaction journey—who moved money, why, and when. Every debit and credit is logged with metadata.          </p>
        </div>
        <div>
          <Image src="/book.svg" alt="POS" height={442} width={495} />
        </div>
      </div>
    </div>
  );
};

export default Multi;
