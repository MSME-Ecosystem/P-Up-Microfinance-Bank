import Image from "next/image";
import React from "react";

const Running = () => {
  return (
    <div>
      <div className="bg-[#EFFAF8] lg:h-[700px] h-[790px]  mb-24">
        <div className="flex lg:pl-28 pl-5 lg:pr-0 pr-5 lg:pt-24 pt-10 gap-10">
          <div className="lg:w-[50%] flex flex-col lg:h-[500px] lg:justify-between">
            <div>
              <h1 className="font-[700] lg:text-[40px] text-[30px] lg:w-[576px] w-[450px]  leading-12 lg:text-left text-center lg:pl-0 pl-5  ">
              Running on Odoo, QuickBooks, or a custom ERP? ReconcileX plugs right in.              </h1>
              <p className="text-[16px] w-[510px] mt-8 lg:text-left text-center">
              No more manual checks. No more messy spreadsheets. Just accurate, real-time reconciliation.
              </p>
            </div>

            <div className="lg:flex w-[520px] gap-5 lg:mt-0 mt-12 lg:text-left text-center">
              <div className="lg:w-[230px] w-auto">
                <h4 className="lg:text-[22px] text-[24px] font-[700]">
                Save Time                </h4>
                <p className="lg:mt-5 mt-2 text-[16px]">
                Save hours of manual work weekly                </p>
              </div>
              <div className="mt-1 lg:block hidden">|</div>
              <div className="lg:w-[230px] w-auto lg:mt-0 mt-5">
                <h4 className="lg:text-[22px] text-[24px] font-[700]">
                See payment live                </h4>
                <p className="lg:mt-5 mt-2 text-[16px]">
                Track cashflow and payment status in real time                </p>
              </div>{" "}
            </div>
          </div>
          <div className=" w-[92%] lg:flex hidden justify-end items-end h-[600px] absolute  ">
            <Image
              src="/phone.svg"
              alt="hand"
              height={600}
              width={850}
              className="w-[600px] h-[530px]"
            />
          </div>
        </div>
        <div className="lg:hidden flex">
          <Image src="/phone.svg" alt="hand" height={600} width={650} />
        </div>
      </div>
    </div>
  );
};

export default Running;
