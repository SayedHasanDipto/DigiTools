import './App.css'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'
import Spliter from './component/Spliter'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='manrope'>
        <HeroSection></HeroSection>
        <Spliter></Spliter>
      </main>
    </>
  )
}

export default App
