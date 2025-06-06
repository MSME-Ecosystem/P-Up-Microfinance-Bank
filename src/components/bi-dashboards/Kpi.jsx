import Image from "next/image";
import React from "react";

const Kpi = () => {
  return (
    <div>
      {/* Clear KPIs */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-40 mt-16">
        <div className="lg:h-[440px] h-auto flex flex-col justify-center">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Clear KPIs Without the Jargon{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4 text-[#1B1B1B] lg:w-[464px] w-auto">
            Instantly view revenue, expenses, profit, and cash flow in a
            mobile-friendly dashboard.{" "}
          </p>
        </div>
        <div>
          <Image src="/chart.svg" alt="chart" height={442} width={495} />
        </div>
      </div>

      {/* Visual Reports for Non-Numbers People */}
      <div className="lg:flex block justify-center lg:gap-[170px] lg:mt-28 mt-10">
        <div className="lg:hidden block">
          <p className="text-[16px] lg:pb-4 pb-0 lg:text-left text-center">
            Featuring
          </p>
          <h2 className="lg:py-5 py-2 text-[#0171DF] lg:text-[32px] text-[24px] font-[700] lg:text-left text-center">
            Visual Reports for Non-Numbers People{" "}
          </h2>
          <p className="text-[16px] lg:text-left text-center lg:mb-0 mb-4 text-[#1B1B1B]">
            Pie charts, trend lines, bar graphs—all automatically generated for
            easier decisions and presentations.{" "}
          </p>
        </div>
        <div>
          <Image
            src="/report.svg"
            alt="report"
            height={442}
            width={495}
            className="rounded-xl"
          />
        </div>
        <div className="h-[440px] lg:flex hidden flex-col justify-center w-[487px]">
          <p className="text-[16px] pb-4">Featuring</p>
          <h2 className="py-5 text-[#0171DF] text-[32px] font-[700]">
          Visual Reports for Non-Numbers People{" "}
          </h2>
          <p className="text-[16px] text-[#1B1B1B]">
          Pie charts, trend lines, bar graphs—all automatically generated for
          easier decisions and presentations.{" "}          </p>
        </div>
      </div>
    </div>
  );
};

export default Kpi;
