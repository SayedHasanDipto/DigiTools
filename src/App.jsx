import './App.css'
import Begain from './component/Begain'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'
import Spliter from './component/Spliter'
import Workflow from './component/Workflow'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='manrope'>
        <HeroSection></HeroSection>
        <Spliter></Spliter>
        <Begain></Begain>
        <Workflow></Workflow>
      </main>
    </>
  )
}

export default App
