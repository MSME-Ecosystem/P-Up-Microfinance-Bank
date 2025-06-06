import Beyond from '@/components/merchant-wallets/Beyond'
import Multi from '@/components/merchant-wallets/Multi'
import Turning from '@/components/merchant-wallets/Turning'
import React from 'react'

const page = () => {
  return (
    <div className='text-black'>
        <div className='lg:px-24 px-5'>
        <Beyond/>
        <Multi/>
        </div>
        <Turning/>
    </div>
  )
}

export default page