import React from 'react'
import Inputs from '../Components/Inputs'

const SearchPage = () => {
  return (
    <>

      <div className=' w-full h-[100vh] flex flex-col gap-10 justify-center items-center px-2 md:px-10 lg:px-40 xl:px-10 2xl:px-40'>
        {/* User name */}
        <h1 className=' font-normal text-2xl lg:text-[36px] text-center'>Good afternoon, Brian</h1>

        {/* Search box */}
        <div className=' w-full flex flex-col border border-[#E6E8EB] rounded-xl shadow-search_box p-5 gap-8 2xl:px-[28px] 2xl:py-[24px]'>
          <div className=' w-full'>
            <button className=' bg-[#F5F7FA] rounded-md font-medium text-[16px] cursor-default py-2 px-6'>Flights</button>
          </div>
          <Inputs />
        </div>
      </div>

    </>
  )
}

export default SearchPage