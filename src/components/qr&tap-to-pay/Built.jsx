import React from "react";
import Image from "next/image";

const Built = () => {
  return (
    <div className="bg-[#EFFAF8] lg:h-[753px] h-[790px] relative mb-28 overflow-hidden">
      <div className="flex lg:pl-[170px] pl-5 lg:pr-0 pr-5 lg:pt-8 pt-10 gap-10">
        <div className="lg:w-[50%] w-full flex flex-col lg:h-[600px] lg:justify-between justify-center">
          <div>
            <p className="text-[16px] lg:py-12 py-4 lg:text-left text-center">Use Case</p>
            <h1 className="font-[700] lg:text-[40px] text-[30px] lg:w-[450px] w-auto leading-12 lg:text-left text-center  lg:m-0 m-auto ">
              Built for Any Sector That Collects at Scale{" "}
            </h1>
            <p className="text-[16px] lg:w-[510px] w-auto mt-8 lg:text-left text-center">
              Whether you're managing fares at a transport park, tithes at a
              church, or school fees across campuses—SnapTag adapts to your
              needs.
            </p>
          </div>

          <div className="lg:flex lg:w-[625px] w-auto gap-8 lg:mt-0 mt-12 lg:text-left text-center justify-between">
            <div className="lg:w-[250px] w-auto">
              <h4 className="lg:text-[22px] text-[24px] font-[700]">
                Contactless Checkout
              </h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
                One scan triggers a dynamic checkout page{" "}
              </p>
            </div>
            <div className="mt-1 lg:block hidden">|</div>
            <div className="lg:w-[330px] w-auto lg:mt-0 mt-6">
              <h4 className="lg:text-[22px] text-[24px] font-[700] w-full text-nowrap">
                Offline-Ready, Anywhere-Usable
              </h4>
              <p className="lg:mt-5 mt-2 text-[16px] w-[290px] lg:m-0 m-auto">
                Print QR codes for offline use or embed them in digital formats.
                No internet? <br/> No problem.{" "}
              </p>
            </div>{" "}
          </div>
        </div>
        <div className=" w-[95%] lg:flex hidden justify-end items-end h-[720px] absolute  ">
          <Image
            src="/bga.svg"
            alt="hand"
            height={700}
            width={850}
            className="w-[850px] h-[530px] mt-20"
          />
        </div>
      </div>
      <div className="lg:hidden flex">
        <Image src="/bga.svg" alt="hand" height={600} width={650} />
      </div>
    </div>
  );
};

export default Built;
