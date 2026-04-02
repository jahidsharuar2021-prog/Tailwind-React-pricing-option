
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/Navbar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultChart from './Components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

const pricingPromise=fetch('PricingData.json')
.then(res=>res.json());
const marksPromise=axios.get('MarksData.json')


function App() {
  

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense
          fallback={<span className="loading loading-ball loading-lg"></span>}
        >
          <PricingOption pricingPromise={pricingPromise}> </PricingOption>
        </Suspense>

        <Suspense
          fallback={<span className="loading loading-ball loading-lg"></span>}
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App
