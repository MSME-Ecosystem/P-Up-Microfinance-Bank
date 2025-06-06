import Image from "next/image";
import React from "react";

const Voice = () => {
  return (
    <div>
      {/* Multilingual & Voice-Enabled */}
      <div className="lg:flex block justify-between lg:mt-24 mt-10">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center w-[487px]">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Multilingual & Voice-Enabled{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Team members can interact in local languages or request summaries
            via WhatsApp voice command.
          </p>
        </div>
        <div>
          <Image src="/algeria.svg" alt="algeria" height={442} width={495} />
        </div>
      </div>

      {/* Exportable Reports for Taxes & Audits */}
      <div className="lg:flex block justify-between lg:mt-28 mt-10">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-6 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Exportable Reports for Taxes & Audits{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4">
            Download audit-friendly financial summaries with one tap—ideal for
            cooperatives, NGOs, and small teams.
          </p>
        </div>
        <div>
          <Image src="/chartb.svg" alt="chart" height={442} width={495} />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center w-[487px]">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-5 text-[#0171DF] text-[32px] font-[700]">
            Visual Reports for Non-Numbers People{" "}
          </h2>
          <p className="text-[16px] text-[#1B1B1B]">
            Pie charts, trend lines, bar graphs—all automatically generated for
            easier decisions and presentations.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Voice;
