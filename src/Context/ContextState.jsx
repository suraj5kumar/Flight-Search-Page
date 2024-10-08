import React, { useState, useEffect } from 'react'
import Context from './ContextFile'

const ContextState = (props) => {
  // useState hooks to store important data
  const [departureDate, setdepartureDate] = useState('')
  const [returnDate, setreturnDate] = useState('')
  const [source, setsource] = useState('')
  const [destination, setdestination] = useState('')

  // Array of source and destination airports which matches the typed alphabets or words
  // It will help to display the dynamic list of airports related to that alphabet or word
  const [sourceAirports, setsourceAirports] = useState([])
  const [destinationAirports, setdestinationAirports] = useState([])
  const [sourceCopy, setsourceCopy] = useState({ code: "", name: "" })
  const [destinationCopy, setdestinationCopy] = useState({ code: "", name: "" })
  const [searchFlights, setsearchFlights] = useState(false)
  const [flightDetails, setflightDetails] = useState(false)


  return (
    <>
      <Context.Provider value={{
        departureDate, setdepartureDate, returnDate, setreturnDate, source, setsource,
        destination, setdestination, sourceAirports, setsourceAirports, destinationAirports, setdestinationAirports,
        sourceCopy, setsourceCopy, destinationCopy, setdestinationCopy, searchFlights, setsearchFlights,
        flightDetails, setflightDetails
      }}>
        {props.children}
      </Context.Provider >
    </>
  )
}

export default ContextState