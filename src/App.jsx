
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/Navbar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'

const pricingPromise=fetch('PricingData.json')
.then(res=>res.json());



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
      </main>
    </>
  );
}

export default App
