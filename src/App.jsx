import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchPage from './Pages/SearchPage'
import FlightLoading from './Pages/FlightLoading'
import ContextState from './Context/ContextState'
import FlightResults from './Pages/FlightResults'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextState>
          <Routes>
            <Route exact path='/' element={<SearchPage />}></Route>
            <Route exact path='/flight_results-loading' element={<FlightLoading />}></Route>
            <Route exact path='/flight_results' element={<FlightResults />}></Route>
          </Routes>
        </ContextState>
      </BrowserRouter>
    </>
  )
}

export default App