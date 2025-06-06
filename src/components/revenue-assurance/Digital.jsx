import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Digital = () => {
  return (
    <div>
        {/* Digital Levies */}
        <div className="lg:pt-40 pt-30">
        <div className="lg:flex block gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[540px] w-auto">
            <p className=" lg:text-[48px] text-[31px] font-[700] lg:leading-14 leading-8 lg:text-left text-center lg:w-[560px] w-auto ">
            Digital Levies. Accountable Collections. Zero Paperwork            </p>
            <p className="lg:py-6 py-8 text-[#1B1B1B] lg:text-left text-center">
            Bring structure and visibility to daily levies, taxes, and fees—whether in open markets, on the road, or across government sectors.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-10">
              <Link href="/auth/register">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/tax.svg"
              alt="power"
              height={615}
              width={580}
              className="lg:m-0 m-auto"
            />
          </div>
        </div>
      </div>

        {/* Cards */}
        <div className="lg:flex block gap-10 lg:mx-0 mx-6 lg:mt-28 mt-12">
                <div className="bg-[#FAFAFA] lg:w-[360px] w-auto lg:h-[378px] h-[350px] rounded-lg lg:px-5 px-8 lg:pt-20 pt-14 lg:m-0 m-auto lg:mt-0 mt-10">
                  <Image
                    src="/boxa.svg"
                    alt="frame1"
                    width={64}
                    height={64}
                    className="m-auto"
                  />
                  <p className="lg:text-[24px] text-[20px] font-[700] text-center py-6">
                  Assign Every Payer a Unique ID                  </p>
                  <p className="text-center text-[16px]">
                  Exchange tokens between phones—no SIM, no airtime, no Wi-Fi.                  </p>
                </div>
                <div className="bg-[#FAFAFA] lg:w-[360px] w-auto lg:h-[378px] h-[350px] rounded-lg lg:px-5 px-8 lg:pt-20 pt-14 lg:m-0 m-auto lg:mt-0 mt-10">
                  <Image
                    src="/boxb.svg"
                    alt="frame1"
                    width={64}
                    height={64}
                    className="m-auto"
                  />
                  <p className="lg:text-[24px] text-[20px] font-[700] text-center py-6">
                  Collect Taxes—With or Without Network                  </p>
                  <p className="text-center text-[16px]">
                  Log sales, issue receipts, sync data when online.                  </p>
                </div>
                <div className="bg-[#FAFAFA] lg:w-[360px] w-auto lg:h-[378px] h-[350px] rounded-lg lg:px-5 px-8 lg:pt-20 pt-14 lg:m-0 m-auto lg:mt-0 mt-10">
                  <Image
                    src="/boxc.svg"
                    alt="frame1"
                    width={64}
                    height={64}
                    className="m-auto"
                  />
                  <p className="lg:text-[24px] text-[20px] font-[700] text-center py-6">
                  Track Who Paid, 
                  When, and Where                  </p>
                  <p className="text-center text-[16px]">
                  Generate QR codes that adjust based on customer and transaction state.                  </p>
                </div>
              </div>
              
    </div>
  )
}

export default Digital