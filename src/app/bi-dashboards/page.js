import Built from '@/components/bi-dashboards/Built'
import Kpi from '@/components/bi-dashboards/Kpi'
import Realtime from '@/components/bi-dashboards/Realtime'
import Voice from '@/components/bi-dashboards/Voice'
import React from 'react'

const page = () => {
  return (
    <div className='text-black'>
        <div className='lg:px-24 px-5'>
            <Realtime/>
            <Kpi/>
            <Voice/>
        </div>
        <Built/>

    </div>
  )
}

export default page