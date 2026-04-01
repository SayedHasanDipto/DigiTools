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


  // Set Active is here so don't mistake again

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
        <ToolsHeader setActiveTab={setActiveTab}></ToolsHeader>
        <div className="pt-8 tabs gap-1 tabs-box justify-center bg-[#F9FAFC]">
          <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Products" onClick={() => setActiveTab('tools')} defaultChecked />
          <input type="radio" onClick={() => setActiveTab("cart")} name="my_tabs_1" className="tab rounded-full" aria-label="Cart (2)" />
        </div>
        <Suspense fallback={
          <div className='flex justify-center items-center pt-26'>
            <div className="skeleton h-screen w-304 rounded-2xl"></div>
          </div>
        }>
          {activeTab === "tools" ? < Tools toolsPrice={toolsPrice}></Tools> : null}
          {activeTab === "cart" ? <Cart></Cart> : null}
        </Suspense>
        <Begain></Begain>
        <Suspense fallback={
          <span className="skeleton skeleton-text">AI is thinking harder...</span>
        }>
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
