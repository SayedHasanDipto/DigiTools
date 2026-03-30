import './App.css'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className='manrope'>
        <HeroSection></HeroSection>
      </main>
    </>
  )
}

export default App
