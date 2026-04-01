import { Suspense, useState } from 'react'
import './App.css'
import Begain from './component/Begain'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'
import Pricing from './component/Pricing'
import Spliter from './component/Spliter'
import Workflow from './component/Workflow'
import Footer from './component/Footer'
import Tools from './component/Tools'
import Cart from './component/Cart'
import ToolsHeader from './component/ToolsHeader'

const pricingData = async () => {
  const res = await fetch("/pricing.json");
  return res.json();
}

const toosPriceData = async () => {
  const res = await fetch("/toolspricing.json")
  return res.json();
}
function App() {
  const pricingPromise = pricingData();
  const toolsPrice = toosPriceData();
  // console.log(toolsPrice);

  const [activeTab, setActiveTab] = useState("tools");
  console.log(activeTab);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='manrope'>
        <HeroSection></HeroSection>
        <Spliter></Spliter>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <ToolsHeader></ToolsHeader>
          {activeTab === "tools" && < Tools setActiveTab={setActiveTab} toolsPrice={toolsPrice}></Tools>}
          {activeTab === "cart" && <Cart></Cart>}
        </Suspense>
        <Begain></Begain>
        <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
          <Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>
        <Workflow></Workflow>
      </main >
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
