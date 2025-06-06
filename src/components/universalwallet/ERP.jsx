import Image from "next/image";
import React from "react";

const ERP = () => {
    return (
        <div className="py-24 ">

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                <div className="flex flex-col items-start  md:w-1/2 w-full ">
                    <h1 className="py-5 text-[16px] leading-tight">
                        Featuring
                    </h1>
                    <h1 className="text-[28px] text-[#0171DF] font-bold leading-tight">
                        Single Wallet for Multiple Merchants
                    </h1>
                    <p className="text-[#1B1B1B] text-[14px] mt-4 pr-5">
                        Buyers top up once and pay across all participating merchants without switching wallets or apps.
                    </p>

                </div>

                <div className="w-full md:w-1/2 flex md:pr-8">
                    <Image
                        src="/wallet.png"
                        alt="Order"
                        width={350}
                        height={326}
                        className="rounded-md max-w-full h-auto"
                    />
                </div>
            </div>

        </div>
    );
};

export default ERP;
