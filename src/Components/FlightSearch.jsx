import React, { useContext } from 'react'
import Inputs from './Inputs'
import Context from '../Context/ContextFile'

const FlightSearch = () => {
  const { setsearchFlights } = useContext(Context)
  return (
    <>
      <div className=' w-full h-[100vh] flex flex-col fixed top-0 z-30'>
        <div className=' w-full h-[60%] flex bg-white justify-center items-center px-5 py-7 sm:h-[40%] md:px-10 lg:px-40 xl:px-10 xl:items-end xl:py-5 xl:h-[30%] 2xl:px-44'>
          <Inputs />
        </div>

        <div onClick={() => { setsearchFlights(false) }} className=' w-full h-[40%] bg-slate-500 opacity-20 sm:h-[60%] xl:h-[70%]'>
        </div>
      </div>
    </>
  )
}

export default FlightSearch