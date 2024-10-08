import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context/ContextFile'
import { useNavigate } from 'react-router-dom'
const DetailsDisplay = () => {
  const { sourceCopy, destinationCopy, departureDate, returnDate, setsearchFlights } = useContext(Context)

  const [formattedDepartureDate, setformattedDepartureDate] = useState('')
  const [formattedReturnDate, setformattedReturnDate] = useState('')

  const navigate = useNavigate()

  const home = () => {
    navigate("/")
    window.location.reload()
  }

  // UseEffect to format the date when it is added
  useEffect(() => {
    if (departureDate && returnDate) {
      const options = { month: 'short', day: '2-digit' }; // Short month and 2-digit day
      const formattedDepartureDate = departureDate.toLocaleDateString('en-US', options).replace(',', '')
      const formattedReturnDate = returnDate.toLocaleDateString('en-US', options).replace(',', '')
      setformattedDepartureDate(formattedDepartureDate)
      setformattedReturnDate(formattedReturnDate)
    }

    else {
      setformattedDepartureDate("")
      setformattedReturnDate("")
    }

  }, [departureDate, returnDate])

  return (
    <>
      <div className=' w-full flex flex-col gap-5 px-3 sm:flex-row-reverse sm:items-center sm:justify-between md:px-10 xl:px-40 2xl:px-60'>

        {/* Cross Icon */}
        <div className=' w-full flex justify-end sm:w-auto'>
          <div onClick={home} className=' border cursor-pointer rounded-full'>
            <img src="/Images/cross.svg" className=' p-2' />
          </div>
        </div>

        {/* Airports and dates display */}
        <div className=' w-full flex border py-1 sm:rounded-full sm:w-[510px] sm:h-[50px] lg:w-[660px] lg:pl-4'>
          <div className=' flex w-full flex-col sm:flex-row sm:w-auto'>

            {/* Source and destination airports display */}
            <div className=' flex w-full justify-center sm:w-auto sm:items-center'>
              <div className=' w-[160px] sm:flex sm:items-center border-r px-2 py-2 sm:h-[30px] sm:py-0 lg:w-[210px]'>
                <div onClick={() => { setsearchFlights(true) }} className=' w-[140px] flex sm:items-center gap-1 whitespace-nowrap overflow-scroll lg:w-[180px]'>
                  <p className=' font-bold'>{sourceCopy.code}</p> <p className=' text-slate-600'>{sourceCopy.name}</p>
                </div>
              </div>

              <div className=' w-[160px] sm:flex sm:items-center sm:border-r px-2 py-2 sm:h-[30px] sm:py-0 lg:w-[210px] lg:px-4'>
                <div onClick={() => { setsearchFlights(true) }} className=' w-[140px] flex gap-1 whitespace-nowrap overflow-scroll lg:w-[180px]'>
                  <p className=' font-bold'>{destinationCopy.code}</p> <p className=' text-slate-600'>{destinationCopy.name}</p>
                </div>
              </div>
            </div>

            {/* Date display */}
            <div className=' flex w-full justify-center items-center mt-2 sm:w-auto sm:mt-0'>

              <div onClick={() => { setsearchFlights(true) }} className=' w-[140px] py-2 border-r flex justify-center items-center sm:h-[30px] sm:py-0 lg:w-[160px]'>
                <p className=' font-bold'>{`${formattedDepartureDate} - ${formattedReturnDate}`}</p>
              </div>

              <div className=' flex justify-center items-center w-[140px] sm:w-auto sm:pl-2 lg:pl-5'>
                <div onClick={() => { setsearchFlights(true) }} className=' bg-[#E5EBEB] flex justify-center items-center w-[30px] h-[30px] rounded-full'>
                  <img src="/Images/loadingmagnifier.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsDisplay