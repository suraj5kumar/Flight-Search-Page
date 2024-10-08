import React, { useContext, useEffect, useState } from 'react'
import DetailsDisplay from '../Components/DetailsDisplay';
import LoadingEffect from '../Components/LoadingEffect';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const FlightLoading = () => {
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setProgress(40)

    const progress = window.setInterval(() => {
      setProgress((prev) => prev + 20);
    }, 1000);

    const timeout = window.setTimeout(() => {
      setProgress(100);
      window.clearInterval(progress);
      navigate("/flight_results");
    }, 3000);

    return () => {
      clearTimeout(timeout)
    }

  }, []);

  return (
    <>

      <div className=' w-full flex flex-col'>
        <div className=' w-full sm:w-auto py-5'>
          <DetailsDisplay />
        </div>


        <div className=' border-t py-10 px-2 md:px-10 xl:py-14'>
          <LoadingBar className=' absolute top-[188px] sm:top-[91px]' color={"#3A6889"} progress={progress}
            onLoaderFinished={() => setProgress(0)} />

          <LoadingEffect />
        </div>
      </div>
    </>
  )
}

export default FlightLoading