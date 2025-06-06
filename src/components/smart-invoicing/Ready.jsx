import Image from "next/image";
import React from "react";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] lg:h-[712px] h-[760px] relative lg:mb-28 mb-16 w-full mt-24">
      <div className="flex lg:pl-[170px] pl-5 lg:pr-0 pr-5 lg:pt-28 pt-10 gap-10">
        <div className="lg:w-[50%] w-full flex flex-col lg:h-[500px] lg:justify-between">
          <div>
            <h1 className="font-[700] lg:text-[40px] text-[30px] lg:w-[450px] w-auto leading-12 lg:text-left text-center  lg:m-0 m-auto ">
              Built for Any Sector That Collects at Scale
            </h1>
            <p className="text-[16px] lg:w-[510px] w-auto mt-8 lg:text-left text-center">
              Whether you're managing fares at a transport park, tithes at a
              church, or school fees across campuses—SnapTag adapts to your
              needs.
            </p>
          </div>

          <div className="lg:flex lg:w-[610px] w-auto gap-5 lg:mt-0 mt-12 lg:text-left text-center">
            <div className="lg:w-[270px] w-auto">
              <h4 className="lg:text-[22px] text-[24px] font-[700]">
                Contactless Checkout
              </h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
                One scan triggers a dynamic checkout page
              </p>
            </div>
            <div className="mt-1 lg:block hidden">|</div>
            <div className="lg:w-[370px] w-auto lg:mt-0 mt-5">
              <h4 className="lg:text-[22px] text-[24px] font-[700]">
                Offline-Ready, Anywhere-Usable
              </h4>
              <p className="lg:mt-5 mt-2 text-[16px]">
                Print QR codes for offline use or embed them in digital formats.
                No internet? No problem.
              </p>
            </div>{" "}
          </div>
        </div>
        <div className=" w-[88.5%] lg:flex hidden justify-end items-end h-[600px] absolute  ">
          <Image
            src="/hands.svg"
            alt="hand"
            height={600}
            width={850}
            className="w-[830px] h-[530px]"
          />
        </div>
      </div>
      <div className="lg:hidden flex">
        <Image src="/hands.svg" alt="hand" height={600} width={650} />
      </div>
    </div>
  );
};

export default Ready;
