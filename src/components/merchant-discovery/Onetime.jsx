import Image from "next/image";
import React from "react";

const Onetime = () => {
  return (
    <div>
      {/* One-Time Verification */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-40 mt-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            One-Time Verification{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4 lg:w-[464px] w-auto">
            Merchants register once to get verified across platforms—no
            duplication, no confusion.
          </p>
        </div>
        <div>
          <Image src="/mail.svg" alt="mail" height={442} width={495} />
        </div>
      </div>

      {/* Public Trust Profile */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-10">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Public Trust Profile{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Each merchant gets a unique profile page showing order stats,
            ratings, badges, and platform links.
          </p>
        </div>
        <div>
          <Image
            src="/maternity.svg"
            alt="maternity"
            height={442}
            width={495}
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center w-[487px]">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-5 text-[#0171DF] text-[32px] font-[700]">
          Public Trust Profile{" "}
          </h2>
          <p className="text-[16px] text-[#1B1B1B]">
          Each merchant gets a unique profile page showing order stats,
            ratings, badges, and platform links.
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onetime;
