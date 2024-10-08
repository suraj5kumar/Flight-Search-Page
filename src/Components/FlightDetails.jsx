import React, { useContext } from 'react'
import Context from '../Context/ContextFile'


const FlightDetails = () => {
  const { flightDetails, setflightDetails } = useContext(Context)


  return (
    <>
      <div className={` ${flightDetails ? "flex" : "hidden"} w-full h-[100vh] fixed top-0`}>
        <div onClick={() => { setflightDetails(false) }} className=' hidden sm:block sm:w-[30%] md:w-[40%] 2xl:w-[60%] bg-slate-500 opacity-20'></div>


        <div className=' w-full sm:w-[70%] md:w-[60%] 2xl:w-[40%] bg-[#e0e3e8] sm:pt-5 sm:pr-5 sm:pb-5'>
          <div className=' w-full flex flex-col gap-7 h-[100vh] sm:h-[95vh] bg-white rounded-xl p-5 items-center'>
            <div onClick={() => { setflightDetails(false) }} className=' cursor-pointer self-start p-2 bg-slate-100 rounded-full'>
              <img src="/Images/backimage.svg" className=' h-4' />
            </div>

            <div className=' w-full'>
              <p className=' text-[20px] font-medium'>Flight details</p>
            </div>

            <div className=' w-full flex gap-2 border-t'>
              <div className=' flex w-[3%] flex-col justify-center gap-2 lg:pt-5 lg:justify-start'>
                <img src="/Images/ellipseicon.svg" className=' lg:h-3' />
                <img src="/Images/verticalLine.svg" className=' h-[75px]' />
                <img src="/Images/ellipseicon.svg" className=' lg:h-3' />
                <img src="/Images/verticalDottedLine.svg" className=' h-[130px]' />
                <img src="/Images/ellipseicon.svg" className=' lg:h-3' />
                <img src="/Images/verticalLine.svg" className=' h-[75px]' />
                <img src="/Images/ellipseicon.svg" className=' lg:h-3' />
              </div>

              <div className=' flex flex-col w-[50%] justify-start gap-10 pt-7 lg:pt-5'>
                <div>
                  <p className=' text-[#787B80] text-[12px]'>Sat 28 Sept • 2:15</p>
                  <h1 className=' text-[#001F1D] text-[12px] font-medium'>DXB • Dubai International Airport</h1>
                </div>
                <div className=' lg:pt-5'>
                  <p className=' text-[#787B80] text-[12px]'>Sat 28 Sept • 2:15</p>
                  <h1 className=' text-[#001F1D] text-[12px] font-medium'>RUH • King Khalid International Airport</h1>
                </div>
                <div className=' flex items-center gap-2 pl-5 lg:pt-5'>
                  <img src="/Images/clockIcon.svg" />
                  <p className=' text-[#787B80] text-[14px]'>Layover 2h 25m</p>
                </div>
                <div className=' lg:pt-1'>
                  <p className=' text-[#787B80] text-[12px]'>Sat 28 Sept • 2:15</p>
                  <h1 className=' text-[#001F1D] text-[12px] font-medium'>RUH • King Khalid International Airport</h1>
                </div>
                <div className=' lg:pt-7'>
                  <p className=' text-[#787B80] text-[12px]'>Sat 28 Sept • 2:15</p>
                  <h1 className=' text-[#001F1D] text-[12px] font-medium'>CDG • Paris - Charles de Gualle Airport</h1>
                </div>
              </div>

              <div className=' flex flex-col justify-between py-10 w-[47%]'>
                <div className=' flex w-full items-start gap-2'>
                  <div className=' border p-1'>
                    <img src="/Images/lufthansalogo.png" className=' h-7' />
                  </div>
                  <div className=' text-[12px] text-[#484A4D]'>
                    <p>Saudi Arabian Airlines • SV553</p>
                    <p>Economy • A330</p>
                    <p>Flight time 3h 45m</p>
                  </div>
                </div>
                <div className=' flex w-full items-start gap-2'>
                  <div className=' border p-1'>
                    <img src="/Images/lufthansalogo.png" className=' h-7' />
                  </div>
                  <div className=' text-[12px] text-[#484A4D]'>
                    <p>Saudi Arabian Airlines • SV553</p>
                    <p>Economy • A330</p>
                    <p>Flight time 3h 45m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlightDetails