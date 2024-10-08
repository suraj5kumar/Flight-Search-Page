import React, { useContext, useEffect } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { airports } from "../../Airport_Data/Airport_Data.json"
import { useNavigate } from 'react-router-dom'
import Context from '../Context/ContextFile'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inputs = () => {
  const { departureDate, setdepartureDate, returnDate, setreturnDate, source, setsource,
    destination, setdestination, sourceAirports, setsourceAirports, destinationAirports, setdestinationAirports,
    setsourceCopy, setdestinationCopy, setsearchFlights } = useContext(Context)

  const navigate = useNavigate()


  // Function to swap source and destination
  const swap = () => {
    const temp = source
    setsource(destination)
    setdestination(temp)
  }


  // Function to handle change in source airport input
  const handleSourceChange = (e) => {
    const input = e.target.value
    setsource(input)

    // Condition to check if the input is matched with either city, airport, or country name
    if (input) {
      // Filtering the list of airports
      const filteredAirports = airports.filter(airport =>
        airport.city.toLowerCase().includes(input.toLowerCase()) ||
        airport.name.toLowerCase().includes(input.toLowerCase()) ||
        airport.country.toLowerCase().includes(input.toLowerCase())
      )
      // Updating the matched sourceAirports array
      setsourceAirports(filteredAirports);
    }
    else {
      setsourceAirports([]);
    }
  };


  // Function to handle change in destination airport input
  const handleDestinationChange = (e) => {
    const input = e.target.value
    setdestination(input)

    // Condition to check the matching input
    if (input) {
      // Filtering the matching input from list of airports
      const filteredAirports = airports.filter(airport =>
        airport.city.toLowerCase().includes(input.toLowerCase()) ||
        airport.name.toLowerCase().includes(input.toLowerCase()) ||
        airport.country.toLocaleLowerCase().includes(input.toLowerCase())
      )
      // Updating the destination airports
      setdestinationAirports(filteredAirports)
    }
    else {
      setdestinationAirports([])
    }
  };


  // Function to update the source airport input field and list of dynamic airports
  const selectSourceAirport = (airport) => {
    setsource(`(${airport.code}) ${airport.name}`)  // Set the selected airport's city from list to input
    setsourceCopy({ code: airport.code, name: airport.name })
    setsourceAirports([])  // Clear the airport suggestions to hide the list
  };

  // Function to update the destination input field and list of dynamic airports
  const selectDestinationAirport = (airport) => {
    setdestination(`(${airport.code}) ${airport.name}`)  // Set the selected airport's city to input
    setdestinationCopy({ code: airport.code, name: airport.name })
    setdestinationAirports([])  // Clear the airport suggestions
  };


  // Function to navigate to the next page
  const results = () => {
    // Checking conditions before navigating to the next page

    // Checking if the selected source and destination is from the list of airports or not
    const validSourceAirport = airports.find(airport => `(${airport.code}) ${airport.name}` === source)
    const validDestinationAirport = airports.find(airport => `(${airport.code}) ${airport.name}` === destination)

    // Taking today's date so that the departure and return date could be checked properly
    const today_date = new Date()
    // Formatting today's date for smooth comaprison
    today_date.setHours(0, 0, 0, 0)

    // Checking all conditions before navigation to the next page
    if (validSourceAirport) {
      if (validDestinationAirport) {
        if (source !== destination) {
          if (departureDate) {
            if (departureDate >= today_date) {
              if (returnDate) {
                if (returnDate >= today_date) {
                  if (returnDate >= departureDate) {
                    setsearchFlights(false)
                    // Navigating to the next page
                    navigate("/flight_results-loading")
                  }
                  else {
                    toast.warn('Return date cannot be in past', {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                  }
                }
                else {
                  toast.warn('Return date cannot be in past', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                }
              }
              else {
                toast.warn('Please select return date.', {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
              }
            }
            else {
              toast.warn('Departure date cannot be in past', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }
          }
          else {
            toast.warn('Please select departure date.', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }
        }
        else {
          toast.warn("Source and destination can't be same.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      }
      else {
        toast.warn('Please select destination airport.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
    else {
      toast.warn('Please select source airport.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <>
      <ToastContainer />
      <div className=' w-full flex flex-col gap-8'>

        <div className=' w-full flex flex-col gap-3 xl:flex-row'>

          {/* Source and Destination Inputs */}
          <div className=' w-full flex flex-col gap-3 sm:flex-row sm:gap-1 md:gap-3 xl:w-auto xl:gap-5'>
            {/* Where from input */}
            <div className=' flex gap-2 justify-center border border-[#E6E8EB] p-3 rounded-md sm:px-6 relative'>
              <img src="/Images/location.svg" />
              <input value={source} onChange={handleSourceChange} type="text" placeholder='Where from?' className=' placeholder:text-[#484A4D] outline-none' />
              <img src="/Images/down.svg" />

              {/* Rendering the dynamic suggetion list of airports for source input */}
              {sourceAirports.length > 0 && (
                <div className={` airport-suggestions absolute top-12 left-0 border w-full rounded-lg bg-white z-10 ${sourceAirports.length > 7 ? "h-[350px]" : "h-auto"} ${sourceAirports.length > 4 ? "sm:h-[250px]" : "sm:h-auto"} overflow-y-scroll`}>
                  {sourceAirports.map((airport, index) => (
                    <div key={index} onClick={() => selectSourceAirport(airport)} className=' pt-2 px-2 border-t cursor-pointer'>
                      {airport.name} ({airport.code}) ({airport.city})
                    </div>
                  ))}
                </div>
              )}
            </div>


            {/* Swap button */}
            <div className=' w-full flex justify-center sm:items-center sm:w-auto'>
              <div onClick={swap} className=' cursor-pointer py-2 px-[10px] bg-[#F5F7FA] rounded-full'>
                <img src="/Images/swap.svg" className=' sm:h-5' />
              </div>
            </div>

            {/* Where to input */}
            <div className=' flex gap-2 justify-center border border-[#E6E8EB] p-3 rounded-md sm:px-6 relative'>
              <img src="/Images/location.svg" />
              <input value={destination} onChange={handleDestinationChange} type="text" placeholder='Where to?' className=' placeholder:text-[#484A4D] outline-none' />
              <img src="/Images/down.svg" />

              {/* Rendering the dynamic list of airports for destination input */}
              {destinationAirports.length > 0 && (
                <div className={` airport-suggestions absolute top-12 left-0 border w-full rounded-lg bg-white z-10 ${destinationAirports.length > 4 ? "h-[250px]" : "h-auto"} ${destinationAirports.length > 4 ? "sm:h-[250px]" : "sm:h-auto"} overflow-y-scroll`}>
                  {destinationAirports.map((airport, index) => (
                    <div key={index} onClick={() => selectDestinationAirport(airport)} className=' pt-2 px-2 border-t cursor-pointer'>
                      {airport.city} ({airport.code}) ({airport.name})
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>


          {/* Arrival & Departure Date picker */}
          <div className=' flex flex-col items-center gap-3 sm:flex-row justify-center'>
            <div className=' flex gap-2 border border-[#E6E8EB] p-3 rounded-md w-[250px]'>
              <img src="/Images/calendar.svg" />
              <DatePicker selected={departureDate} onChange={(date) => setdepartureDate(date)} placeholderText='Departure' className=' placeholder:text-[#484A4D] outline-none' />
            </div>

            <div className=' flex gap-2 border border-[#E6E8EB] p-3 rounded-md w-[250px]'>
              <img src="/Images/calendar.svg" />
              <DatePicker selected={returnDate} onChange={(date) => setreturnDate(date)} placeholderText='Return' className=' placeholder:text-[#484A4D] outline-none' />
            </div>
          </div>
        </div>

        {/* Search button */}
        <div className=' w-full flex justify-end'>
          <button onClick={results} className=' flex justify-center items-center gap-3 py-2 px-8 bg-[#003E39] rounded-[7px] text-white font-medium hover:opacity-90 duration-300'>
            <img src="/Images/magnifier.svg" />
            Search flights
          </button>
        </div>
      </div>
    </>
  )
}

export default Inputs