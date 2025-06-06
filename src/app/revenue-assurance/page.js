import Digital from '@/components/revenue-assurance/Digital'
import Market from '@/components/revenue-assurance/Market'
import Virtual from '@/components/revenue-assurance/Virtual'
import React from 'react'

const page = () => {
  return (
    <div className='text-black'>
        <div className='lg:px-24 px-5'>
            <Digital/>
            <Virtual/>
        </div>
        <Market/>

    </div>
  )
}

export default page