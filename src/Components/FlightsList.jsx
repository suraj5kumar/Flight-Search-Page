import React, { useContext } from 'react'
import Context from '../Context/ContextFile'
const FlightsList = () => {
  const { setflightDetails } = useContext(Context)

  return (
    <>
      <div className=' w-full py-5 flex gap-5 flex-col px-2 md:px-10 xl:py-8 xl:px-40 2xl:px-52'>

        <p className=' text-[#787B80] text-[18px]'>Showing 356 of 767 results</p>

        <div className=' flex w-full flex-col border rounded-2xl lg:flex-row'>
          <div onClick={()=>{setflightDetails(true)}} className=' w-full flex p-5 flex-col gap-10 cursor-pointer'>
            <div className=' w-full flex flex-col gap-2 sm:flex-row'>
              <div className=' w-full flex gap-3 items-center'>
                <img src="/Images/emirateslogo.png" className=' h-6' />
                <div>
                  <p className=' text-[#787B80] text-[13px]'>Emirates • AT 4334</p>
                  <h1 className=' text-[#001F1D] text-[18px]'>9:45 AM - 11:45 AM</h1>
                </div>
              </div>
              <div className=' w-full flex flex-col pl-10'>
                <p className=' text-[#787B80] text-[13px]'>CDG - DXB</p>
                <div className=' flex gap-10'>
                  <p className=' text-[#001F1D] text-[18px]'>2h 10min</p>
                  <p className=' text-[#001F1D] text-[18px]'>Non stop</p>
                </div>
              </div>
            </div>
            <div className=' w-full flex flex-col gap-2 sm:flex-row'>
              <div className=' w-full flex gap-5 items-center'>
                <img src="/Images/lufthansalogo.png" className=' h-8' />
                <div>
                  <p className=' text-[#787B80] text-[13px]'>Lufthansa • AT 4334</p>
                  <h1 className=' text-[#001F1D] text-[18px]'>11:45 PM - 6:45 AM <sup className=' text-[12px] text-[#962828F9]'>+1 day</sup></h1>
                </div>
              </div>
              <div className=' w-full flex flex-col pl-10'>
                <div className=' flex gap-10 lg:gap-14'>
                  <p className=' text-[#787B80] text-[13px]'>DXB - CDG</p>
                  <p className=' text-[#787B80] text-[13px]'>6h 32m in Lisbon, Paris</p>
                </div>
                <div className=' flex gap-6 lg:gap-10'>
                  <p className=' text-[#001F1D] text-[18px]'>4h 10min</p>
                  <p className=' text-[#001F1D] text-[18px]'>2 stops</p>
                </div>
              </div>
            </div>
          </div>

          <div className=' w-full flex border-t p-5 justify-between items-center lg:flex-col lg:justify-end lg:border-l lg:border-t-0 lg:w-auto lg:items-start lg:gap-3'>
            <div className=' flex flex-col'>
              <p className=' text-[14px] text-[#787B80]'>from</p>
              <p className=' text-[20px] text-[#001F1D] whitespace-nowrap'>AED 2,456.90</p>
            </div>
            <button className=' bg-[#003E39] py-1 px-8 text-white rounded-lg hover:opacity-95'>Select</button>
          </div>
        </div>


        <div className=' flex w-full flex-col border rounded-2xl lg:flex-row'>
          <div onClick={()=>{setflightDetails(true)}} className=' cursor-pointer w-full flex p-5 flex-col gap-6'>
            {/* First Flight */}
            <div className=' w-full flex flex-col gap-2'>
              <p className=' text-[#787B80] text-[13px]'>Thu 25 Jun</p>
              <div className=' w-full flex flex-col gap-2 sm:flex-row'>
                <div className=' w-full flex gap-5 items-center'>
                  <div className=' border py-2 rounded-md'>
                    <img src="/Images/emirateslogo.png" className=' h-6' />
                  </div>
                  <div>
                    <p className=' text-[#787B80] text-[13px]'>Emirates • AT 4334</p>
                    <h1 className=' text-[#001F1D] text-[18px]'>9:45 AM - 11:45 AM</h1>
                  </div>
                </div>
                <div className=' w-full flex flex-col pl-10'>
                  <div className=' flex gap-10 lg:gap-14'>
                    <p className=' text-[#787B80] text-[13px]'>CDG - DXB</p>
                  </div>
                  <div className=' flex gap-6 lg:gap-10'>
                    <p className=' text-[#001F1D] text-[18px]'>7h 10min</p>
                    <p className=' text-[#001F1D] text-[18px]'>1 stop</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Flight */}
            <div className=' w-full flex flex-col gap-2'>
              <p className=' text-[#787B80] text-[13px]'>Sat 2 Jul</p>
              <div className=' w-full flex flex-col gap-2 sm:flex-row'>
                <div className=' w-full flex gap-5 items-center'>
                  <div className=' border py-2 rounded-md'>
                    <img src="/Images/emirateslogo.png" className=' h-6' />
                  </div>
                  <div>
                    <p className=' text-[#787B80] text-[13px]'>Emirates • AT 4334</p>
                    <h1 className=' text-[#001F1D] text-[18px]'>11:45 PM - 6:45 AM<sup className=' text-[12px] text-[#962828F9]'>+1 day</sup></h1>
                  </div>
                </div>
                <div className=' w-full flex flex-col pl-10'>
                  <div className=' flex gap-10 lg:gap-14'>
                    <p className=' text-[#787B80] text-[13px]'>CDG - DXB</p>
                    <p className=' text-[#787B80] text-[13px]'>Lisbon</p>
                  </div>
                  <div className=' flex gap-3 lg:gap-[29px]'>
                    <p className=' text-[#001F1D] text-[18px]'>19h 10min</p>
                    <p className=' text-[#001F1D] text-[18px]'>1 stop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' w-full flex border-t p-5 justify-between items-center lg:flex-col lg:justify-end lg:border-l lg:border-t-0 lg:w-auto lg:items-start lg:gap-3'>
            <div className=' flex flex-col'>
              <p className=' text-[14px] text-[#787B80]'>from</p>
              <p className=' text-[20px] text-[#001F1D] whitespace-nowrap'>AED 1,456.90</p>
            </div>
            <button className=' bg-[#003E39] py-1 px-8 text-white rounded-lg hover:opacity-95'>Select</button>
          </div>
        </div>


        <div className=' flex w-full flex-col border rounded-2xl lg:flex-row'>
          <div onClick={()=>{setflightDetails(true)}} className=' cursor-pointer w-full flex p-5 flex-col gap-6'>
            {/* First Flight */}
            <div className=' w-full flex flex-col gap-2'>
              <p className=' text-[#787B80] text-[13px]'>Thu 25 Jun</p>
              <div className=' w-full flex flex-col gap-2 sm:flex-row'>
                <div className=' w-full flex gap-5 items-center'>
                  <div className=' border p-2 rounded-md'>
                    <img src="/Images/lufthansalogo.png" className=' h-8' />
                  </div>
                  <div>
                    <p className=' text-[#787B80] text-[13px]'>Lufthansa • AT 4334</p>
                    <h1 className=' text-[#001F1D] text-[18px]'>9:45 AM - 11:45 AM</h1>
                  </div>
                </div>
                <div className=' w-full flex flex-col pl-10'>
                  <div className=' flex gap-10 lg:gap-14'>
                    <p className=' text-[#787B80] text-[13px]'>CDG - DXB</p>
                  </div>
                  <div className=' flex gap-6 lg:gap-10'>
                    <p className=' text-[#001F1D] text-[18px]'>7h 10min</p>
                    <p className=' text-[#001F1D] text-[18px]'>Non stop</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Flight */}
            <div className=' w-full flex flex-col gap-2'>
              <p className=' text-[#787B80] text-[13px]'>Thu 25 Jun</p>
              <div className=' w-full flex flex-col gap-2 sm:flex-row'>
                <div className=' w-full flex gap-5 items-center'>
                  <div className=' flex'>
                    <div className=' border p-1 rounded-md relative bottom-[4px] sm:bottom-[15px] md:bottom-[4px]'>
                      <img src="/Images/lufthansalogo.png" className=' h-4' />
                    </div>
                    <div className=' border relative right-[13px] p-1 top-2 bg-white rounded-md sm:-top-1 md:top-2'>
                      <img src="/Images/lufthansalogo.png" className=' h-4' />
                    </div>
                  </div>
                  <div>
                    <p className=' text-[#787B80] text-[13px]'>Lufthansa • AT 4334, Indigo • 6E 783</p>
                    <h1 className=' text-[#001F1D] text-[18px]'>11:45 PM - 6:45 AM<sup className=' text-[12px] text-[#962828F9]'>+1 day</sup></h1>
                  </div>
                </div>
                <div className=' w-full flex flex-col pl-10'>
                  <div className=' flex gap-10 lg:gap-14'>
                    <p className=' text-[#787B80] text-[13px]'>CDG - DXB</p>
                  </div>
                  <div className=' flex gap-3 lg:gap-[29px]'>
                    <p className=' text-[#001F1D] text-[18px]'>4h 10min</p>
                    <p className=' text-[#001F1D] text-[18px]'>Non stop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' w-full flex border-t p-5 justify-between items-center lg:flex-col lg:justify-end lg:border-l lg:border-t-0 lg:w-auto lg:items-start lg:gap-3'>
            <div className=' flex flex-col'>
              <p className=' text-[14px] text-[#787B80]'>from</p>
              <p className=' text-[20px] text-[#001F1D] whitespace-nowrap'>AED 1,456.90</p>
            </div>
            <button className=' bg-[#003E39] py-1 px-8 text-white rounded-lg hover:opacity-95'>Select</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlightsList