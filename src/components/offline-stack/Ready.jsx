import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Ready = () => {
  return (
    <div className="bg-[#EFFAF8] h-auto relative mb-28  overflow-hidden lg:py-10 pt-10 lg:mt-0 mt-20">
      <div className="flex lg:px-40 px-5 ">
        <div className=" ">
          <p className=" lg:text-left text-center">Use Case</p>
          <Button
            asChild
            className="bg-[#0171DF] text-white h-10 lg:px-4 lg:w-auto w-full my-10 font-bold text-[18px] rounded-[5px]"
          >
            <Link href="#">Real - Life Scenario</Link>
          </Button>{" "}
          <div className="flex flex-col  ">
            <div className="lg:flex block lg:w-[70%] w-full">
              <div className="flex-1">
                <p className="text-[#1B1B1B]">
                  <span className="font-bold text-black">Ngozi,</span> a yam
                  seller in a village outside{" "}
                  <span className="font-bold">Kaduna,</span> accepts payments
                  using a basic Android phone with{" "}
                  <span className="text-[#0171DF] font-bold">AirVend</span>{" "}
                  installed. A customer arrives with no cash.{" "}
                  <span className="font-bold text-black">Ngozi</span> generates
                  a <span className="text-[#0171DF]">QR</span> or Bluetooth
                  pairing signal. The customer's phone sends a token offline via{" "}
                  <span className="text-[#0171DF]">Bluetooth.</span> The payment
                  is confirmed instantly on
                  <span className="font-bold text-black"> Ngozi's</span> phone.
                </p>
              </div>

              <div className="flex items-start mx-auto lg:mx-4 lg:justify-start justify-center lg:my-5 my-3">
                <Image
                  src="/next-arrow.svg"
                  alt="next"
                  height={28}
                  width={28}
                  className="shrink-0 lg:rotate-0 rotate-90"
                />
              </div>

              <div className="flex-1">
                <div className="bg-[#E6F7F1] rounded-[10px] m-auto p-6 h-[160px] w-full lg:w-[350px] text-[#1B1B1B]">
                  <span className="font-bold text-black">Ngozi</span> doesn't
                  have internet service at the time, but when she enters
                  coverage later that evening, her phone syncs the transaction
                  with{" "}
                  <span className="text-[#0171DF] font-bold">
                    P-UP's servers,
                  </span>{" "}
                  updating her balance and generating a receipt.
                </div>
              </div>
            </div>
            <div className="lg:flex block  h-auto lg:mt-10 mt-15">
              <p className="lg:w-[25%] text-[#1B1B1B]">
                <span className="font-bold text-black">Ahmed,</span> a dispatch
                rider in <span className="font-bold text-black">Ibadan</span>{" "}
                collects ₦1,500 for a delivered bag of rice. He receives it
                using his{" "}
                <span className="text-[#0171DF] font-bold">AirVend</span> app in
                offline mode, paired with the merchant’s phone. The payment is
                immediately marked as Paid and reflects in{" "}
                <span className="font-bold text-black">Ahmed's</span> Ledger
                Balance.
              </p>
              <div className="flex items-end justify-center lg:justify-start lg:my-0 my-3">
                <Image
                  src="/next-arrow.svg"
                  alt="next"
                  height={28}
                  width={28}
                  className="rotate-90 "
                />
              </div>{" "}
            </div>
            <div className="lg:w-[55%] w-auto flex justify-end">
              <p className="lg:w-[65%] w-auto bg-[#EEF7E6] rounded-[10px]  p-8 lg:mt-3 mt-0 lg:mb-0 mb-10 text-[#1B1B1B]">
                When <span className="font-bold text-black">Ahmed,</span>{" "}
                returns to HQ and connects to Wi-Fi,{" "}
                <span className="text-[#0171DF] font-bold">AirVend</span> syncs
                the collection. The merchant sees it marked as{" "}
                <span className="text-[#07BF00]">“Reconciled”</span> in the{" "}
                <span className="text-[#0171DF] font-bold">P-UP dashboard</span>{" "}
                and is reflected in Available Balance. No errors. No excuses. No
                network complaints.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[90%] lg:flex hidden justify-end items-end absolute bottom-[-100px] ">
          <Image
            src="/newhand.png"
            alt="hand"
            height={800}
            width={800}
            className=""
          />
        </div>
      </div>
      <div className="lg:hidden flex">
        <Image src="/newhand.png" alt="hand" height={600} width={650} />
      </div>
    </div>
  );
};

export default Ready;
