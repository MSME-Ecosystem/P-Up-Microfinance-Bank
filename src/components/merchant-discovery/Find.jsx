import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Find = () => {
  return (
    <div>
        {/* Digital Levies */}
      <div className="lg:pt-40 pt-30">
        <div className="lg:flex block gap-12">
          <div className="lg:h-[450px] h-auto flex flex-col justify-center lg:w-[540px] w-auto">
            <p className=" lg:text-[48px] text-[31px] font-[700] lg:leading-14 leading-8 lg:text-left text-center lg:w-[550px] w-auto ">
            Find Merchants You Can Trust—Anywhere, Anytime            </p>
            <p className="lg:py-6 py-8 text-[#1B1B1B] lg:text-left text-center w-[510px]">
            Whether online or offline, CrediFind helps you verify any seller before you pay. No storefront? No problem. One scan shows their history, rating, and real-time trust score.
            </p>
            <Button asChild className="bg-[#0F226B] text-white h-10">
              <Link href="/auth/register">Get Started</Link>
            </Button>{" "}
          </div>
          <div className="lg:mt-0 mt-10">
            <Image
              src="/man.svg"
              alt="man"
              height={615}
              width={580}
              className="lg:m-0 m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Find