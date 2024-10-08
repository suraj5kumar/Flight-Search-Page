import React, { useContext } from 'react'
import DetailsDisplay from '../Components/DetailsDisplay'
import Context from '../Context/ContextFile'
import FlightSearch from '../Components/FlightSearch'
import FlightsList from '../Components/FlightsList'
import FlightDetails from '../Components/FlightDetails'

const FlightResults = () => {
  const { searchFlights } = useContext(Context)
  return (
    <>
      <div className=' w-full flex flex-col'>
        <div className=' w-full sm:w-auto py-5'>
          {
            searchFlights ? <FlightSearch /> :
              <DetailsDisplay />
          }
        </div>


        <div className=' border-t'>
          <FlightsList />
          <FlightDetails />
        </div>
      </div>
    </>
  )
}

export default FlightResults